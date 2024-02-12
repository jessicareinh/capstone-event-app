import Link from "next/link";

export default function MyEventsList({ ownEvents }) {
  return (
    <>
      <h2>My Events</h2>
      <ul>
        {ownEvents.map((event) => (
          <li key={event.id}>
            <p>{event.title}</p>
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
      <Link href="/addEvent">
        <button type="button">➕</button>
      </Link>
    </>
  );
}
