import EventDetails from "@/components/EventDetails";
import { useRouter } from "next/router";
import selectImage from "@/components/utils";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin: 30px 0;
  text-align: center;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function DetailsPage({
  searchData,
  apiData,
  onToggleFavorite,
  favList,
}) {
  const combinedData = [...searchData, ...apiData];
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = combinedData.find((event) => event.id === id);

  if (!currentEvent) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <Wrapper>
        <Header>
          <PageTitle>Details Page</PageTitle>
        </Header>

        <EventDetails
          image={selectImage(currentEvent.images)?.url}
          title={currentEvent.name}
          date={currentEvent.dates.start.localDate}
          category={currentEvent.classifications[0].segment.name}
          genre={currentEvent.classifications[0].genre.name}
          address={currentEvent._embedded.venues[0].address?.line1}
          postalCode={currentEvent._embedded.venues[0].postalCode}
          location={currentEvent._embedded.venues[0].city.name}
          time={currentEvent.dates.start?.localTime}
          width={selectImage(currentEvent.images)?.width}
          height={selectImage(currentEvent.images)?.height}
          lat={currentEvent._embedded.venues[0].location?.latitude}
          lon={currentEvent._embedded.venues[0].location?.longitude}
          isFavorite={
            favList?.find((fav) => fav.id === currentEvent.id)?.isFavorite
          }
          onToggleFavorite={() => {
            onToggleFavorite(currentEvent.id);
          }}
        ></EventDetails>
      </Wrapper>
    </>
  );
}
