import EventDetails from "@/components/EventDetails";
import { useRouter } from "next/router";
import { selectImage, formatDate } from "@/components/Utils";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-family: "Chakra Petch", sans-serif;
  font-weight: 700;
`;

const Nav = styled.nav`
  font-family: "Chakra Petch", sans-serif;
  display: flex;
  gap: 55px;
  font-size: 1.2rem;
  color: navy;
  margin-bottom: 15px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

const BackLink = styled.button`
  text-decoration: none;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: navy;
  &:hover {
    text-decoration: underline;
    text-decoration-color: #fda1de;
    text-decoration-thickness: 3px;
  }
`;

export default function DetailsPage({ apiData, onToggleFavorite, favList }) {
  const condition = "TABLET_LANDSCAPE_16_9";
  const router = useRouter();
  const { id } = router.query;

  const currentEvent = apiData.find((event) => event.id === id);

  if (!currentEvent) {
    return <div>Loading..</div>;
  }
  return (
    <>
      <Wrapper>
        <PageTitle>Details</PageTitle>
        <Nav>
          <BackLink onClick={() => router.back()}>◄ Back</BackLink>
          <NavLink href="/favorites">Favorites</NavLink>
          <NavLink href="/my-events">My Events</NavLink>
        </Nav>
        <EventDetails
          title={currentEvent.name}
          image={selectImage(condition, currentEvent.images)?.url}
          width={selectImage(condition, currentEvent.images)?.width}
          height={selectImage(condition, currentEvent.images)?.height}
          category={currentEvent.classifications[0].segment.name}
          genre={currentEvent.classifications[0].genre.name}
          address={currentEvent._embedded.venues[0].address?.line1}
          postalCode={currentEvent._embedded.venues[0].postalCode}
          location={currentEvent._embedded.venues[0].city.name}
          time={currentEvent.dates.start.localTime}
          lat={currentEvent._embedded.venues[0].location?.latitude}
          lon={currentEvent._embedded.venues[0].location?.longitude}
          date={formatDate(currentEvent.dates.start.localDate)}
          priority={true}
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
