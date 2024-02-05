import Image from "next/image";

export default function HomePage({ apiData }) {
  return (
    <>
      <title>EVENT APP</title>

      <h1>EVENT APP</h1>
      {apiData?.map((event) => (
        <div key={event.id}>
          {event.name}
          <Image
            src={event.images[2].url}
            alt={event.name}
            width={350}
            height={200}
          />
          {event.dates.start.localDate}
          {event._embedded.venues[0].city.name}
        </div>
      ))}
    </>
  );
}
