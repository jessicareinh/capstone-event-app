import Link from "next/link";
import MyEventsList from "@/components/MyEventsList";
import styled from "styled-components";

export default function MyEvents({ ownEvents }) {
  return (
    <>
      <h1>My Events List</h1>
      <MyEventsList ownEvents={ownEvents} />
      <Link href="/add-event">
        <button>➕</button>
      </Link>
    </>
  );
}
