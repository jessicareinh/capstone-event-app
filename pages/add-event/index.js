import EventForm from "@/components/EventForm";
import Link from "next/link";

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <EventForm onAddEvent={onAddEvent} />
      <Link href="/my-events"> Back to your Events </Link>
      <br></br>
      <Link href="/"> Back to homepage </Link>
    </>
  );
}
