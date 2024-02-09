import EventForm from "@/components/EventForm";
import Link from "next/link";
import { useState } from "react";
import { uid } from "uid";
// import useLocalStorageState from "use-local-storage-state";

export default function MyEvents({ onAddEvent }) {
  const [myEvents, setMyEvents] = useState([]);
  function handleAddEvent(newEvent) {
    setMyEvents([...myEvents, { id: uid(), ...newEvent }]);
  }
  return (
    <>
      <EventForm onAddEvent={handleAddEvent} />
      <Link href="/my-events"> Back </Link>
      <ul>
        {myEvents.map((event) => (
          <li key={event.id}>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
