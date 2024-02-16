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

const StyledButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px;
`;

export default function HomePage({
  apiData,
  handleLoadMore,
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
        <StyledButton onClick={handleLoadMore}>See More</StyledButton>
      </Wrapper>
    </>
  );
}
