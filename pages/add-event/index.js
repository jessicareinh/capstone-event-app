import EventForm from "@/components/EventForm";
import Link from "next/link";
import { uid } from "uid";

export default function MyEvents({ ownEvents, setOwnEvents }) {
  function handleAddEvent(newEvent) {
    setOwnEvents([...ownEvents, { id: uid(), ...newEvent }]);
  }

  return (
    <>
      <EventForm onAddEvent={handleAddEvent} />
      <Link href="/my-events"> Zurück </Link>
    </>
  );
}
