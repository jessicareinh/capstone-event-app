export default async function handler(req, res) {
  const { page = 1 } = req.query;
  const apiKey = process.env.TICKETMASTER_API_KEY;
  const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";
  const countryCode = "DE";
  const classification = "music";

  const startDate = "2024-02-01T14:00:00Z";
  const endDateTime = "2024-03-01T14:00:00Z";

  const url = `${baseUrl}?apikey=${apiKey}&classificationName=${classification}&startDateTime=${startDate}&endDateTime=${endDateTime}&sort=date,asc&countryCode=${countryCode}&page=${page}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error when retrieving the data" });
  }
}
