import EventForm from "@/components/EventForm";
import Link from "next/link";
// import { uid } from "uid";
// import useLocalStorageState from "use-local-storage-state";

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Link href="/my-events"> Back </Link>
      <EventForm onAddEvent={onAddEvent} />
    </>
  );
}
