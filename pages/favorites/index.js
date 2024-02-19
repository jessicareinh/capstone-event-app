import EventList from "@/components/EventList";
import styled from "styled-components";
import router from "next/router";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
`;

const Nav = styled.nav`
  font-family: "Chakra Petch", sans-serif;
  display: flex;
  gap: 55px;
  font-size: 1.2rem;
  color: navy;
  margin-bottom: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;
const BackLink = styled.button`
  font-size: 1.2rem;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  color: navy;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

export default function Favorites({ apiData, favList, onToggleFavorite }) {
  const favorites = apiData.filter((event) =>
    favList.find((fav) => fav.id === event.id && fav.isFavorite)
  );
  return (
    <>
      <PageTitle>Favorites Page</PageTitle>
      <Wrapper>
        <Nav>
          <BackLink onClick={() => router.back()}>◄ Back</BackLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/my-events">My Events</NavLink>
        </Nav>
        <EventList
          favList={favList}
          onToggleFavorite={onToggleFavorite}
          apiData={favorites}
        />
      </Wrapper>
    </>
  );
}
