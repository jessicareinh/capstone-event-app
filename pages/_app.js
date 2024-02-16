import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [ownEvents, setOwnEvents] = useLocalStorageState("myEvents", {
    defaultValue: [],
  });

  const baseUrl = "https://app.ticketmaster.com/discovery/v2/events?apikey=";
  const countryCode = "DE";
  const sortBy = "relevance,desc";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${baseUrl}${apiKey}&sort=${sortBy}&page=${page}&countryCode=${countryCode}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch api");
        }
        const json = await response.json();
        setData((prev) => [...prev, ...json._embedded.events]);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    fetchData();
  }, [page]);

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  function handleAddEvents(newEvent) {
    setOwnEvents([...ownEvents, { ...newEvent, id: uid() }]);
  }

  function handleSaveEvent(editedEvent) {
    setOwnEvents(
      ownEvents.map(function (ownEvent) {
        if (ownEvent.id === editedEvent.id) {
          return editedEvent;
        } else {
          return ownEvent;
        }
      })
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        onAddEvent={handleAddEvents}
        onSave={handleSaveEvent}
        apiData={data}
        handleLoadMore={handleLoadMore}
        ownEvents={ownEvents}
        {...pageProps}
      />
    </>
  );
}
