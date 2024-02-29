import EventList from "@/components/EventList";
import styled from "styled-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin: 15px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
  }
`;
const Info = styled.p`
  font-size: 1.3rem;
  margin: 20px;
`;
export default function Favorites({ combinedData, favList, onToggleFavorite }) {
  const favorites = combinedData?.filter((event) =>
    favList?.some((fav) => fav.id === event.id && fav.isFavorite)
  );

  return (
    <>
      <PageTitle>Favorites</PageTitle>

      <Wrapper>
        {!favorites || favorites.length === 0 ? (
          <Info>You have not added any favorites.</Info>
        ) : (
          <EventList
            favList={favList}
            onToggleFavorite={onToggleFavorite}
            DATA={favorites}
          />
        )}
      </Wrapper>

      <ScrollToTopButton aria-label="Go to top" />
    </>
  );
}
