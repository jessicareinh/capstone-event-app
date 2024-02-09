import AddEvent from "../addEvent";
import Link from "next/link";
import { useState } from "react";

export default function MyEvents() {
  const [events, setEvents] = useState([]);
  return (
    <>
      <h2>My Events</h2>
      <p>Page is empty</p>

      <Link href="/addEvent">
        <button type="button">➕</button>
      </Link>
    </>
  );
}
