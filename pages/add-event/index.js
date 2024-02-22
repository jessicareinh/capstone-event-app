import EventForm from "@/components/EventForm";
import Link from "next/link";
import styled from "styled-components";

const H2 = styled.h2`
  font-family: monospace;
  margin-top: 30px;
  font-size: 32px;
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <H2> Add Your Own Event</H2>
      <EventForm onAddEvent={onAddEvent} />
      <Link href="/my-events"> Back to your Events </Link>
      <br></br>
      <Link href="/"> Back to homepage </Link>
    </>
  );
}
