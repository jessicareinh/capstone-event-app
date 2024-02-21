import EventList from "@/components/EventList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 10px;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px;
`;

export default function HomePage({
  apiData,
  handleLoadMore,
  onToggleFavorite,
  favList,
}) {
  return (
    <>
      <Wrapper>
        <PageTitle>Upcoming Events</PageTitle>
        <EventList
          apiData={apiData}
          onToggleFavorite={onToggleFavorite}
          favList={favList}
        />
        <StyledButton onClick={handleLoadMore}>See More</StyledButton>
      </Wrapper>
    </>
  );
}
