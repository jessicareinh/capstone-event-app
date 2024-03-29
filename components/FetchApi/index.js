const baseUrl = "https://app.ticketmaster.com/discovery/v2/events?apikey=";
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export default async function fetchData(param, onSetData) {
  const sortBy = "relevance,desc";
  try {
    const response = await fetch(
      `${baseUrl}${apiKey}&sort=${sortBy}&countryCode=DE&locale=*&${param}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    onSetData(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
