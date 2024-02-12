import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";

export default function MyEvents() {
  return (
    <>
      <h1>My Events List</h1>
      <MyEventsList />
      <Link href="/add-event">
        <button type="button">➕</button>
      </Link>
    </>
  );
}
