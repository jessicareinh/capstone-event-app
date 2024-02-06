import useSWR from "swr";
import EventList from "@/components/EventList";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.main`
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

export default function HomePage() {
  const [page, setPage] = useState(1);

  const { data: events, isLoading, error } = useSWR(`/api/events?page=${page}`);

  if (isLoading) {
    <h1>Loding Events</h1>;
  }

  if (error) {
    <h1>Error</h1>;
  }

  function handleLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }
  return (
    <Wrapper>
      <Title>EVENT APP</Title>
      <EventList events={events?._embedded.events} />
      <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
    </Wrapper>
  );
}
