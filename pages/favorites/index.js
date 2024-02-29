import EventList from "@/components/EventList";
import styled from "styled-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 10px auto;
`;

export default function Favorites({ combinedData, favList, onToggleFavorite }) {
  const favorites = combinedData?.filter((event) =>
    favList?.some((fav) => fav.id === event.id && fav.isFavorite)
  );

  return (
    <>
      <PageTitle>Favorites Page</PageTitle>
      <ul>
        <Wrapper>
          <EventList
            favList={favList}
            onToggleFavorite={onToggleFavorite}
            DATA={favorites}
          />
        </Wrapper>
      </ul>
      <ScrollToTopButton aria-label="Go to top" />
    </>
  );
}
