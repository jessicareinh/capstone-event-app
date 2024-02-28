// HomePage.js
import EventList from "@/components/EventList";
import styled from "styled-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import DropDownMenu from "@/components/DropDownMenu";
import { germanCities } from "@/components/utils";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin: 20px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
  }
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
  onLoadMore,
  onToggleFavorite,
  favList,
  onCityChange,
  city,
}) {
  return (
    <>
      <Wrapper>
        <PageTitle>Upcoming Events</PageTitle>

        <DropDownMenu
          selectedCity={city}
          onCityChange={onCityChange}
          cities={germanCities}
        />
        <EventList
          DATA={apiData}
          onToggleFavorite={onToggleFavorite}
          favList={favList}
        />
        <StyledButton onClick={onLoadMore}>See More</StyledButton>
      </Wrapper>
      <ScrollToTopButton />
    </>
  );
}
