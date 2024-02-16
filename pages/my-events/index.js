import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";

export default function MyEvents({ ownEvents, onSave }) {
  return (
    <>
      <h1>My Events List</h1>
      <MyEventsList ownEvents={ownEvents} onSave={onSave} />
      <Link href="/"> Back to homepage </Link>
      <br></br>
      <br></br>
      <Link href="/add-event">
        <button>Add your Event</button>
      </Link>
    </>
  );
}
