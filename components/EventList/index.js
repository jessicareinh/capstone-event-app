import EventCard from "../EventCard";
import styled from "styled-components";
import { selectImage } from "../Utils";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const StyledList = styled.li`
  list-style: none;
`;

export default function EventList({ apiData, favList, onToggleFavorite }) {
  const uniqueIds = new Set();
  const filteredData = [];

  // Filter out duplicate events based on their IDs
  apiData.forEach((event) => {
    if (!uniqueIds.has(event.id)) {
      uniqueIds.add(event.id);
      filteredData.push(event);
    }
  });
  return (
    <Wrapper>
      {filteredData.map((event) => (
        <StyledList key={event.id}>
          <EventCard
            title={event.name}
            location={event._embedded.venues[0].city.name}
            venue={event._embedded.venues[0].name}
            date={event.dates.start.localDate}
            image={selectImage(event.images).url}
            width={selectImage(event.images).width}
            height={selectImage(event.images).height}
            id={event.id}
            isFavorite={favList?.find((fav) => fav.id === event.id)?.isFavorite}
            onToggleFavorite={() => onToggleFavorite(event.id)}
          />
        </StyledList>
      ))}
    </Wrapper>
  );
}
