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
  const [categoryEvents, setCategoryEvents] = useState([]);
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
  //combines apiData, searchData and categoryEvents to one unified state for pages/[id] and /favorites
  const [combinedData, setCombinedData] = useLocalStorageState("combinedData", {
    defaultValue: [],
  });

  //fetches data on homepage
  useEffect(() => {
    fetchData(`page=${page}&city=${city}&size=27`, (apiData) => {
      setApiData(apiData._embedded.events);
      setCombinedData([...combinedData, ...apiData._embedded.events]);
    });
  }, [page, city]);

  function handleAddCategory(category) {
    setCategory(category);
    if (city !== "" && category !== "") {
      fetchDataAndUpdate(category, city);
    }
  }

  function handleCityChange(city) {
    setCity(city);
    if (city !== "" && category !== "") {
      fetchDataAndUpdate(category, city);
    }
  }

  // Define a common function to fetch data based on parameters
  function fetchDataAndUpdate(category, city) {
    fetchData(
      `classificationName=${category}&city=${city}&size=30`,
      (categoryEvents) => {
        setCategoryEvents(
          "_embedded" in categoryEvents ? categoryEvents._embedded.events : []
        );
        setCombinedData(
          "_embedded" in categoryEvents
            ? [...combinedData, ...categoryEvents._embedded.events]
            : combinedData
        );
      }
    );
  }

  //triggers search on submit in /search
  function handleSearch(query) {
    fetchData(`keyword=${query}&size=50`, (searchData) => {
      setSearchData(searchData._embedded.events);
      setCombinedData([...combinedData, ...searchData._embedded.events]);
    });
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
          categoryEvents={categoryEvents}
          onAddCategory={handleAddCategory}
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
