export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "Missing phone number" });
  }

  try {
    const response = await fetch(`https://famofc.kesug.com/apis/simdataapi.php?num=${number}`);
    const data = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
}
