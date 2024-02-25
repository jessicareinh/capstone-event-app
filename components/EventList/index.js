import EventCard from "../EventCard";
import styled from "styled-components";
import selectImage from "../utils";

const Wrapper = styled.ul`
  max-width: 1300px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 1em;
  gap: 1.5em;
  @media (min-width: 950px) {
    gap: 2.3em;
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  @media (min-width: 768px) {
    max-width: 350px;
  }
`;

export default function EventList({ DATA, favList, onToggleFavorite }) {
  const uniqueIds = new Set();
  const filteredData = [];

  DATA.forEach((event) => {
    if (!uniqueIds.has(event.id)) {
      uniqueIds.add(event.id);
      filteredData.push(event);
    }
  });

  return (
    <Wrapper>
      {filteredData?.map((event) => (
        <StyledListItem key={event.id}>
          <EventCard
            title={event.name}
            location={event._embedded.venues[0].city.name}
            longTitle={event.name.length >= 35}
            venue={event._embedded.venues[0].name}
            date={event.dates.start.localDate}
            image={selectImage(event.images).url}
            width={selectImage(event.images).width}
            height={selectImage(event.images).height}
            id={event.id}
            isFavorite={favList.find((fav) => fav.id === event.id)?.isFavorite}
            onToggleFavorite={() => onToggleFavorite(event.id)}
          />
        </StyledListItem>
      ))}
    </Wrapper>
  );
}
