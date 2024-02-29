import { useState } from "react";
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
  onAddCategory,
  favList,
  onToggleFavorite,
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
      onAddCategory(categoryValue);
    }
  }
  return (
    <>
      <PageTitle>Categories</PageTitle>
      <Wrapper>
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

        {(!categoryEvents || categoryEvents.length === 0) && (
          <p>No results found</p>
        )}

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
