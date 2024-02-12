import EventForm from "@/components/EventForm";
import Link from "next/link";
import { uid } from "uid";

export default function MyEvents({ ownEvents, setOwnEvents }) {
  function handleAddEvent(newEvent) {
    setOwnEvents([...ownEvents, { id: uid(), ...newEvent }]);
    alert("🎉You have added your Event successfully!");
  }

  return (
    <>

      <EventForm onAddEvent={handleAddEvent} />
      <Link href="/my-events"> MyEventList </Link>
    <br/>
      <Link href="/"> Back to homepage </Link>

    </>
  );
}
