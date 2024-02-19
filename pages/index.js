import EventList from "@/components/EventList";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
`;

const Nav = styled.nav`
  font-family: "Chakra Petch", sans-serif;
  margin-bottom: 15px;
  display: flex;
  gap: 55px;
  font-size: 1.2rem;
  color: navy;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

const LoadButton = styled.button`
  width: 180px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px auto;
  background-color: #fda1de;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fd3a95;
  }
`;

export default function HomePage({
  apiData,
  onLoadMore,
  onToggleFavorite,
  favList,
}) {
  return (
    <>
      <Wrapper>
        <PageTitle>Upcoming Events</PageTitle>
        <Nav>
          <NavLink href="/favorites">Favorites</NavLink>
          <NavLink href="/my-events">My Events</NavLink>
        </Nav>

        <EventList
          apiData={apiData}
          onToggleFavorite={onToggleFavorite}
          favList={favList}
        />
        <LoadButton onClick={onLoadMore}>See More</LoadButton>
      </Wrapper>
    </>
  );
}
