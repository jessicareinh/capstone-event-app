import EventList from "@/components/EventList";

export default function HomePage({ apiData }) {
  return (
    <>
      <title>EVENT APP</title>

      <h1>EVENT APP</h1>
      <EventList apiData={apiData} />

    </>
  );
}
