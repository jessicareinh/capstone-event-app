import EventDetails from "@/components/EventDetails";
import { useRouter } from "next/router";
import selectImage from "@/components/utils";
import Link from "next/link";

export default function DetailsPage({ apiData, onToggleFavorite, favList }) {
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = apiData.find((event) => event.id === id);

  if (!currentEvent) {
    return <div>Loading..</div>;
  }

  return (
    <main>
      <Link href="/">Back</Link>
      <EventDetails
        image={selectImage(currentEvent.images)?.url}
        title={currentEvent.name}
        date={currentEvent.dates.start.localDate}
        category={currentEvent.classifications[0].segment.name}
        genre={currentEvent.classifications[0].genre.name}
        address={currentEvent._embedded.venues[0].address.line1}
        postalCode={currentEvent._embedded.venues[0].postalCode}
        location={currentEvent._embedded.venues[0].city.name}
        time={currentEvent.dates.start.localTime}
        width={300}
        height={300}
        lat={currentEvent._embedded.venues[0].location.latitude}
        lon={currentEvent._embedded.venues[0].location.longitude}
        isFavorite={
          favList?.find((fav) => fav.id === currentEvent.id)?.isFavorite
        }
        onToggleFavorite={() => {
          onToggleFavorite(currentEvent.id);
        }}
      ></EventDetails>
    </main>
  );
}
