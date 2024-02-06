import EventDetails from "@/components/EventDetails";
import { useRouter } from "next/router";

export default function DetailsPage({ apiData }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = apiData.find((event) => event.id === id);

  if (!currentEvent) {
    return <div>Loading..</div>;
  }

  return (
    <EventDetails
      image={currentEvent.images[2]}
      title={currentEvent.name}
      date={currentEvent.dates.start.localDate}
      location={currentEvent._embedded.venues[0].city.name}
      category={currentEvent.classifications[0].segment.name}
      genre={currentEvent.classifications[0].genre.name}
      address={currentEvent._embedded.venues[0].address.line1}
      postalCode={currentEvent._embedded.venues[0].postalCode}
    ></EventDetails>
  );
}
