import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import { baseUrl, apiKey } from "@/components/utils";
import fetchData from "@/components/FetchApi";

export default function App({ Component, pageProps }) {
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [ownEvents, setOwnEvents] = useLocalStorageState("myEvents", {
    defaultValue: [],
  });
  const [favList, setFavList] = useLocalStorageState("favList", {
    defaultValue: [],
  });

  useEffect(() => {
    fetchData(`&page=${page}&size=27`, (data) =>
      setApiData((prev) => [...prev, ...data._embedded.events])
    );
  }, [page]);

  //triggers search on submit in /search
  async function handleSearch(query) {
    fetchData(`&keyword=${query}&size=50`, (searchData) =>
      setSearchData(searchData._embedded.events)
    );
  }

  //loads the next page of event cards in the homepage "/"
  function handleLoadMore() {
    setPage(page + 1);
  }

  //CRUD functions
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

  function toggleFavorite(id) {
    const currentEvent = favList.find((event) => event.id === id);
    if (currentEvent) {
      setFavList(
        favList.map((fav) =>
          fav.id === id ? { id, isFavorite: !fav.isFavorite } : fav
        )
      );
    } else {
      setFavList([...favList, { id, isFavorite: true }]);
    }
  }

  console.log("API DATA from app.js: ", apiData);
  console.log("SEARCHDATA from app.js: ", searchData);
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          apiData={apiData}
          searchData={searchData}
          ownEvents={ownEvents}
          favList={favList}
          onSubmit={handleSearch}
          onAddEvent={handleAddEvents}
          onSave={handleSaveEvent}
          onLoadMore={handleLoadMore}
          onToggleFavorite={toggleFavorite}
          {...pageProps}
        />
      </Layout>
    </>
  );
}
