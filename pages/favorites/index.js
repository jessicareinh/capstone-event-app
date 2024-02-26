import EventList from "@/components/EventList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 10px auto;
`;

export default function Favorites({
  apiData,
  searchData,
  favList,
  onToggleFavorite,
}) {
  const combinedData = [...searchData, ...apiData];
  const favorites = combinedData?.filter((event) =>
    favList?.some((fav) => fav.id === event.id && fav.isFavorite)
  );

  console.log("API Data from FAVORITES", apiData);
  console.log("SEARCHDATA from FAVORITES", searchData);
  return (
    <>
      <PageTitle>Favorites Page</PageTitle>
      <Wrapper>
        <EventList
          favList={favList}
          onToggleFavorite={onToggleFavorite}
          DATA={favorites}
        />
      </Wrapper>
    </>
  );
}