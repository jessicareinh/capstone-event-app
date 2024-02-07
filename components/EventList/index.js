import EventCard from "../EventCard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1400px;
  justify-content: center;
`;
const StyledList = styled.li`
  list-style: none;
`;

const CardContainer = styled.div`
  display: flex;
`;

export default function EventList({ apiData }) {
  return (
    <>
      <Wrapper>
        {apiData.map((event) => (
          <StyledList key={event.id}>
            <CardContainer>
              <EventCard
                title={event.name}
                location={event._embedded.venues[0].city.name}
                venue={event._embedded.venues[0].name}
                date={event.dates.start.localDate}
                image={event.images[2].url}
                width={300}
                height={200}
                id={event.id}
              />
            </CardContainer>
          </StyledList>
        ))}
      </Wrapper>
    </>
  );
}
