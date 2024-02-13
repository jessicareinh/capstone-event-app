import EventForm from "@/components/EventForm";
import Link from "next/link";
import { uid } from "uid";
import { useRouter } from "next/router";

export default function MyEvents({ ownEvents, setOwnEvents }) {
  const router = useRouter();
  function handleAddEvent(newEvent) {
    setOwnEvents([...ownEvents, { id: uid(), ...newEvent }]);
    alert("🎉You have added your Event successfully!");
    router.push("/my-events");
  }

  return (
    <>
      <EventForm onAddEvent={handleAddEvent} />
      <Link href="/my-events"> Back to your Events </Link>
      <br></br>
      <Link href="/"> Back to homepage </Link>
    </>
  );
}
