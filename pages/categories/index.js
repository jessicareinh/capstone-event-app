import CategoryButton from "@/components/CategoryButtons";
import styled from "styled-components";
import EventList from "@/components/EventList";
import DropDownMenu from "@/components/DropDownMenu";
import { germanCities } from "@/components/utils";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  @media (min-width: 650px) {
    max-width: 80vw;
  }
`;

const PageTitle = styled.h3`
  text-align: center;
  margin: 20px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
  }
`;

export default function Categories({
  categoryEvents,
  handleAddCategory,
  favList,
  onToggleFavorite,
  onCityChange,
  city,
}) {
  return (
    <>
      <PageTitle>Categories</PageTitle>
      <Wrapper>
        <DropDownMenu
          onCityChange={onCityChange}
          selectedCity={city}
          cities={germanCities}
        />

        {(!categoryEvents || categoryEvents.length === 0) && (
          <p>No results found</p>
        )}
        <ButtonContainer>
          <CategoryButton onClick={() => handleAddCategory("arts & theatre")}>
            Art
          </CategoryButton>
          <CategoryButton onClick={() => handleAddCategory("music")}>
            Music
          </CategoryButton>
          <CategoryButton onClick={() => handleAddCategory("comedy")}>
            Comedy
          </CategoryButton>
          <CategoryButton onClick={() => handleAddCategory("cultural")}>
            Cultural
          </CategoryButton>
          <CategoryButton onClick={() => handleAddCategory("sport")}>
            Sport
          </CategoryButton>
          <CategoryButton onClick={() => handleAddCategory("miscellaneous")}>
            Other
          </CategoryButton>
        </ButtonContainer>

        {categoryEvents && categoryEvents.length > 0 && (
          <EventList
            DATA={categoryEvents}
            favList={favList}
            onToggleFavorite={onToggleFavorite}
          />
        )}
      </Wrapper>
      <ScrollToTopButton />
    </>
  );
}
