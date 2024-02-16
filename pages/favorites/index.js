import EventList from "@/components/EventList";
import styled from "styled-components";
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
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: navy;
  &:hover {
    text-decoration: underline;
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
