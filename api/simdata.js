import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { num } = req.query;
  if (!num) {
    res.status(400).send('Number parameter is required');
    return;
  }

  const primaryUrl = `https://famofc.kesug.com/apis/simdataapi.php?num=${encodeURIComponent(num)}`;
  const secondaryUrl = `https://dbcenter.cc/api?num=${encodeURIComponent(num)}`;

  try {
    let response = await fetch(primaryUrl);
    let data = await response.text();

    // Agar primary API fail ho ya data empty ho to secondary API call karo
    if (!data || data.trim() === '' || response.status !== 200) {
      response = await fetch(secondaryUrl);
      data = await response.text();
    }

    if (!data || data.trim() === '') {
      res.status(404).send('No data found from both APIs');
      return;
    }

    res.status(200).send(data);
  } catch (error) {
    console.error('API fetch error:', error);
    res.status(500).send('Server error fetching API data');
  }
}
