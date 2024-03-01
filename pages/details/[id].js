import EventDetails from "@/components/EventDetails";
import { useRouter } from "next/router";
import { selectImage, formatDate } from "@/components/utils";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
font-size: 1.5rem;
  text-align: center;
  margin: 15px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default function DetailsPage({
  combinedData,
  onToggleFavorite,
  favList,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id]);

  const currentEvent = combinedData.find((event) => event.id === id);

  if (!currentEvent) {
    return <div>Loading..</div>;
  }

  return (
    <>
      <Wrapper>
        <Header>
          <PageTitle>Details</PageTitle>
        </Header>
        {loading ? (
          <LoadingAnimation
            duration={1000}
            onComplete={() => setLoading(false)}
          />
        ) : (
          <EventDetails
            image={selectImage(currentEvent.images)?.url}
            alt={currentEvent.name}
            title={currentEvent.name}
            date={formatDate(currentEvent.dates.start.localDate)}
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
        )}
      </Wrapper>
    </>
  );
}
