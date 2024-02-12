import EventList from "@/components/EventList";
import styled from "styled-components";
import Link from "next/link";

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

const StyledLink = styled(Link)`
  background-color: grey;
  color: white;
  float: right;
  width: 45px;
  height: 35px;
  padding: 5px;
  border-radius: 8px;

  &:hover {
    background-color: grey;
    color: white;
  }
`;

export default function HomePage({ apiData, handleLoadMore }) {
  return (
    <>
      <StyledLink href="/my-events"> ADD </StyledLink>
      <Wrapper>
        <Title>EVENT APP</Title>
        <EventList apiData={apiData} />
        <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
      </Wrapper>
    </>
  );
}
