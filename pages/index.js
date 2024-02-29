// HomePage.js
import EventList from "@/components/EventList";
import styled from "styled-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import DropDownMenu from "@/components/DropDownMenu";
import CategoryButton from "@/components/CategoryButtons";
import { germanCities } from "@/components/utils";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ButtonContainer = styled.div`
  position: relative;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  @media (min-width: 768px) {
    width: 100%;
    gap: 10px;
  }
  @media (min-width: 1156px) {
    gap: 20px;
  }
`;

const LoadMore = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px;
`;

export default function HomePage({
  apiData,
  onCategoryChange,
  onLoadMore,
  onToggleFavorite,
  favList,
  onCityChange,
  city,
}) {
  const [activeCategory, setActiveCategory] = useState(null);

  const categories = [
    { name: "Art", value: "arts & theatre" },
    { name: "Music", value: "music" },
    { name: "Comedy", value: "comedy" },
    { name: "Sport", value: "sport" },
    { name: "Other", value: "miscellaneous" },
  ];

  function handleCategoryClick(categoryValue) {
    if (categoryValue !== activeCategory) {
      setActiveCategory(categoryValue);
      onCategoryChange(categoryValue);
    }
  }
  return (
    <>
      <Wrapper>
        <PageTitle>Upcoming Events</PageTitle>

        <ButtonContainer>
          <DropDownMenu
            onCityChange={onCityChange}
            selectedCity={city}
            cities={germanCities}
          />

          {categories.map((category) => (
            <CategoryButton
              key={category.value}
              onClick={() => handleCategoryClick(category.value)}
              active={category.value === activeCategory}
            >
              {category.name}
            </CategoryButton>
          ))}
        </ButtonContainer>

        {(!apiData || apiData.length === 0) && <Info>No results found</Info>}

        {apiData && apiData.length > 0 && (
          <EventList
            DATA={apiData}
            favList={favList}
            onToggleFavorite={onToggleFavorite}
          />
        )}
        {apiData && apiData.length > 0 && (
          <LoadMore onClick={onLoadMore}>See More</LoadMore>
        )}
      </Wrapper>
      <ScrollToTopButton />
    </>
  );
}
