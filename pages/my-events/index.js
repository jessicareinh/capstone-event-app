import Link from "next/link";

export default function MyEvents() {
  return (
    <>
      <h1>My Events List</h1>

      <Link href="/add-event">
        <button type="button">➕</button>
      </Link>
    </>
  );
}
