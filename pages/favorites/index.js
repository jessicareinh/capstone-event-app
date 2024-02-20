import EventList from "@/components/EventList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 1150px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 10px auto;
`;

export default function Favorites({ apiData, favList, onToggleFavorite }) {
  const favorites = apiData.filter((event) =>
    favList.find((fav) => fav.id === event.id && fav.isFavorite)
  );
  return (
    <>
      <PageTitle>Favorites Page</PageTitle>
      <Wrapper>
        <EventList
          favList={favList}
          onToggleFavorite={onToggleFavorite}
          apiData={favorites}
        />
      </Wrapper>
    </>
  );
}
