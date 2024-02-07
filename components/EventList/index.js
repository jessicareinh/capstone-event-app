import EventCard from "../EventCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const StyledList = styled.li`
  list-style: none;
`;

export default function EventList({ apiData }) {
  return (
    <Wrapper>
      {apiData.map((event) => (
        <StyledList key={event.id}>
          <EventCard
            title={event.name}
            location={event._embedded.venues[0].city.name}
            venue={event._embedded.venues[0].name}
            date={event.dates.start.localDate}
            image={event.images[2].url}
            width={event.images[2].width}
            height={0}
            id={event.id}
          />
        </StyledList>
      ))}
    </Wrapper>
  );
}
