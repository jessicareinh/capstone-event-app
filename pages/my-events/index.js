import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function MyEvents({ ownEvents }) {
  const [storedOwnEvents, setStoredOwnEvents] = useLocalStorageState(
    "myEvents",
    ownEvents
  );

  const router = useRouter();

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

  const Button = styled.button`
    width: 120px;
    height: 30px;
    border-radius: 5px;
    &:hover {
      background-color: lightgray;
    }
  `;
  const handleDeleteEvent = (eventId) => {
    setStoredOwnEvents(storedOwnEvents.filter((event) => event.id !== eventId));
  };

  return (
    <>
      <Wrapper>
        <PageTitle>My Events List</PageTitle>
        <Nav>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/favorites">Favorites</NavLink>
        </Nav>

        <MyEventsList
          ownEvents={storedOwnEvents}
          onDeleteEvent={handleDeleteEvent}
        />

        <Button type="button" onClick={() => router.push("/add-event")}>
          Add your Event
        </Button>
      </Wrapper>
    </>
  );
}
