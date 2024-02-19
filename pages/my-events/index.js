import Link from "next/link";
import styled from "styled-components";
import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";
import router from "next/router";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
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

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px;
  background-color: #fda1de;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff3bc4;
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

export default function MyEvents({ ownEvents }) {
  const [storedOwnEvents, setStoredOwnEvents] = useLocalStorageState(
    "myEvents",
    ownEvents
  );

  const handleDeleteEvent = (eventId) => {
    setStoredOwnEvents(storedOwnEvents.filter((event) => event.id !== eventId));
  };

  return (
    <>
      <Wrapper>
        <PageTitle>My Events List</PageTitle>
        <Nav>
          <BackLink onClick={() => router.back()}>◄ Back</BackLink>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/add-event">+ Add Event</NavLink>
        </Nav>
        <MyEventsList
          ownEvents={storedOwnEvents}
          onDeleteEvent={handleDeleteEvent}
        />

        <Link href="/add-event">
          <AddButton>Add Event</AddButton>
        </Link>
      </Wrapper>
    </>
  );
}
