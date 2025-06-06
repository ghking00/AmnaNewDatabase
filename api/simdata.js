export default async function handler(req, res) {
  const { num } = req.query;

  if (!num) {
    res.status(400).send('Number parameter is required');
    return;
  }

  const primaryUrl = `https://famofc.kesug.com/apis/simdataapi.php?num=${encodeURIComponent(num)}`;

  try {
    const response = await fetch(primaryUrl);

    if (!response.ok) {
      res.status(response.status).send('Primary API returned error');
      return;
    }

    const data = await response.text();

  
