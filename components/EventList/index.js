import EventCard from "../EventCard";

export default function EventList({ apiData }) {
  return (
    <>
      {apiData.map((event) => (
        <li key={event.id}>
          <EventCard
            title={event.name}
            image={event.images[2].url}
            date={event.dates.start.localDate}
            location={event._embedded.venues[0].city.name}
            width={300}
            height={200}
          />
        </li>
      ))}
    </>
  );
}
