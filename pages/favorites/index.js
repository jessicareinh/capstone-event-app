import EventList from "@/components/EventList";

export default function Favorites({ apiData, favList, onToggleFavorite }) {
  const favorites = apiData.filter((event) =>
    favList.find((fav) => fav.id === event.id && fav.isFavorite)
  );
  return (
    <>
      <h1>Favorites Page</h1>
      <EventList
        favList={favList}
        onToggleFavorite={onToggleFavorite}
        apiData={favorites}
      />
    </>
  );
}
