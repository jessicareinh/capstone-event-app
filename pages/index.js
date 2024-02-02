import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
//const apiKey = process.env.apiKey;

export default function HomePage() {
  const [data, setData] = useState([]);
  const countryCode = "de";
  const locale = "*";
  const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://app.ticketmaster.com/discovery/v2/events?apikey=KUfDtCZdKiqgRrrY7R9qumcHOH8tg1RA"
          //`${baseUrl}&${apiKey}&${countryCode}&${locale}`
        );
        if (!response.ok) {
          throw new Error("failed to fetch api");
        }
        const json = await response.json();
        setData(json._embedded.events);
      } catch (error) {
        console.log("Error");
      }
    }
    fetchData();
    console.log(data);
  }, []);

  return (
    <>
      <Head>
        <title>EVENT APP</title>
      </Head>

      <body>
        <h1>EVENT APP</h1>
        {data.map((event) => (
          <div key={event.id}>
            {event.name}
            <Image
              src={event.images[1].url}
              alt={event.name}
              width={350}
              height={200}
            />
            {event.dates.start.localDate}
            {event._embedded.venues[0].city.name}
          </div>
        ))}
      </body>
    </>
  );
}
