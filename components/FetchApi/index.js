const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const sortBy = "relevance,desc";

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
