import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin: 15px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
  }
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
      </Wrapper>
      <ScrollToTopButton aria-label="Go to top" />
    </>
  );
}
