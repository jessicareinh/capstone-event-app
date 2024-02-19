import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";
import useLocalStorageState from "use-local-storage-state";

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
      <h1>My Events List</h1>
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
    </>
  );
}
