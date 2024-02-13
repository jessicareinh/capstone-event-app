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
  align-items: center;
  background-color: lightpink;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: absulute;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

const StyledLink = styled(Link)`
  align-items: center;
  background-color: lightpink;
  border: 2px solid #111;
  border-radius: 8px;

  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 14px;
  height: 42px;
  justify-content: right;
  line-height: 24px;
  max-width: 100%;
  padding: 0 23px;
  position: absolute;
  top: 0;
  right: 0;
  text-align: right;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:hover {
    background-color: grey;
    color: white;
  }
`;

export default function HomePage({ apiData, handleLoadMore }) {
  return (
    <>
      <StyledLink href="/my-events"> my events </StyledLink>
      <Wrapper>
        <Title>EVENT APP</Title>
        <EventList apiData={apiData} />
        <StyledButton onClick={handleLoadMore}>Load More</StyledButton>
      </Wrapper>
    </>
  );
}
