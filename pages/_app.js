import GlobalStyle from "../styles";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import Layout from "@/components/Layout";
import fetchData from "@/components/FetchApi";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function App({ Component, pageProps }) {
  const [apiData, setApiData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [page, setPage] = useState(1);
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  const [ownEvents, setOwnEvents] = useLocalStorageState("myEvents", {
    defaultValue: [],
  });
  const [favList, setFavList] = useLocalStorageState("favList", {
    defaultValue: [],
  });
  //combines apiData, searchData to one unified state for pages/[id] and /favorites
  const [combinedData, setCombinedData] = useLocalStorageState("combinedData", {
    defaultValue: [],
  });

  //fetches data on homepage
  useEffect(() => {
    fetchData(
      `page=${page}&city=${city}&classificationName=${category}&size=27`,
      (apiData) => {
        setApiData("_embedded" in apiData ? apiData._embedded.events : []);
        setCombinedData(
          "_embedded" in apiData
            ? [...combinedData, ...apiData._embedded.events]
            : combinedData
        );
      }
    );
  }, [page, city, category]);

  
  //triggers search on submit in /search
  function handleSearch(query) {
    fetchData(`keyword=${query}&size=50`, (searchData) => {
      setSearchData(searchData._embedded.events);
      setCombinedData([...combinedData, ...searchData._embedded.events]);
    });
  }

  function handleCityChange(city) {
    setCity(city);
  }

  function handleCategoryChange(category) {
    setCategory(category);
  }

  //loads the next page of event cards in the homepage "/"
  function handleLoadMore() {
    setPage(page + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

  return (
    <>
      <GlobalStyle />
      <Layout>
        {loading ? (
          <LoadingAnimation
            duration={1000}
            onComplete={() => setLoading(false)}
          />
        ) : null}
        <Component
          combinedData={combinedData}
          apiData={apiData}
          searchData={searchData}
          onCategoryChange={handleCategoryChange}
          city={city}
          onCityChange={handleCityChange}
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
