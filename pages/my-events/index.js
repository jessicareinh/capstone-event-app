import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 0;
`;

export default function MyEvents({ ownEvents, onSave }) {
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
        <PageTitle>My Events </PageTitle>
        <MyEventsList
          ownEvents={storedOwnEvents}
          onDeleteEvent={handleDeleteEvent}
          onSave={onSave}
        />
        <Link href="/"> Back to homepage </Link>
        <br></br>
        <br></br>
        <Link href="/add-event">
          <button>Add your Event</button>
        </Link>
      </Wrapper>
    </>
  );
}
