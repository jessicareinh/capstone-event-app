import EventCard from "../EventCard";
import styled from "styled-components";
import { selectImage, formatDate } from "../Utils";

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
  const condition = "RETINA_PORTRAIT_16_9";
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
            date={formatDate(event.dates.start.localDate)}
            image={selectImage(condition, event.images).url}
            width={selectImage(condition, event.images).width}
            height={selectImage(condition, event.images).height}
            id={event.id}
            isFavorite={favList?.find((fav) => fav.id === event.id)?.isFavorite}
            onToggleFavorite={() => onToggleFavorite(event.id)}
          />
        </StyledList>
      ))}
    </Wrapper>
  );
}
