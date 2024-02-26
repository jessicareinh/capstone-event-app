// const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const sortBy = "relevance,desc";
const apiKey = "KUfDtCZdKiqgRrrY7R9qumcHOH8tg1RA";
const baseUrl = "https://app.ticketmaster.com/discovery/v2/events?apikey=";

export default async function fetchData(param, onSetData) {
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
