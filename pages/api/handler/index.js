export default async function handler(req, res) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const sortBy = "relevance,desc";

  try {
    const response = await fetch(
      `${baseUrl}${apiKey}&sort=${sortBy}&countryCode=DE&locale=*&keyword=${query}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
