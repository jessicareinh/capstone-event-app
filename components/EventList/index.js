import EventCard from "../EventCard";
import styled from "styled-components";
import Link from "next/link";
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function EventList({ apiData }) {
  return (
    <>
      <Wrapper>
        {apiData.map((event) => (
          <StyledList key={event.id}>
            <StyledLink href={`/details/${event.id}`}>
              <CardContainer>
                <EventCard
                  title={event.name}
                  location={event._embedded.venues[0].city.name}
                  venue={event._embedded.venues[0].name}
                  date={event.dates.start.localDate}
                  image={event.images[2].url}
                  width={300}
                  height={200}
                />
              </CardContainer>
            </StyledLink>
          </StyledList>
        ))}
      </Wrapper>
    </>
  );
}
