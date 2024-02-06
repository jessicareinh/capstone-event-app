import useSWR from "swr";
import EventList from "@/components/EventList";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 5px;
  border-radius: 8px;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

const baseUrl = "https://app.ticketmaster.com/discovery/v2/events?apikey=";
const countryCode = "DE";
const classification = "music";
const startDate = "2024-02-01T14:00:00Z";
const endDateTime = "2024-03-01T14:00:00Z";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export default function HomePage() {
  const [page, setPage] = useState(1);
  const {
    data: events,
    isLoading,
    error,
  } = useSWR(
    `${baseUrl}${apiKey}&classificationName=${classification}&startDateTime=${startDate}&endDateTime=${endDateTime}&sort=date,asc&countryCode=${countryCode}`
  );

  if (isLoading) {
    <h1>Loding Events</h1>;
  }

  if (error) {
    <h1>Error</h1>;
  }

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);

    console.log(events);
  }
  return (
    <main>
      <Title>EVENT APP</Title>
      <EventList events={events?._embedded.events} />
      <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
    </main>
  );
}
