import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

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
      <MyEventsList
        ownEvents={storedOwnEvents}
        onDeleteEvent={handleDeleteEvent}
        onSave={onSave}
      />
    </>
  );
}
