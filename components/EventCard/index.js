import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  margin: auto;
  min-width: 335px;
  height: 255px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
  }
  @media (min-width: 480px) {
    height: 295px;
    max-width: 450px;
  }

  @media (min-width: 768px) {
    max-width: 350px;
  }
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: ${(prop) => (prop.$longTitle ? "140px" : "150px")};
  object-fit: cover;
  @media (min-width: 480px) {
    height: 180px;
  }
`;

const Title = styled.h2`
  margin: 5px 10px 0 10px;
  font-size: ${(prop) => (prop.$longTitle ? "1rem" : "1.2rem")};
`;

const DetailsContainer = styled.div`
  line-height: 1.4rem;
  margin: auto 10px 10px 10px;
`;

const DetailsRows = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Row1 = styled.li`
  display: flex;
  justify-content: space-between;
`;
const Location = styled.p`
  font-size: 1.1rem;
`;

const Row2 = styled.li`
  list-style: none;
  font-style: italic;
  font-size: 0.8rem;
`;

export default function EventCard({
  title,
  image,
  date,
  location,
  width,
  height,
  id,
  venue,
  onToggleFavorite,
  isFavorite,
  longTitle,
}) {
  return (
    <CardContainer>
      <FavoriteButton
        isFavorite={isFavorite}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={`/details/${id}`}>
        <StyledImage
          src={image}
          alt={title}
          width={width}
          height={height}
          $longTitle={longTitle}
          priority
        />
      </Link>

      <Title $longTitle={longTitle}>{title}</Title>
      <DetailsContainer>
        <DetailsRows>
          <Row1>
            <Location>{location}</Location>
            <p>{date}</p>
          </Row1>
          <Row2>
            <p>{venue}</p>
          </Row2>
        </DetailsRows>
      </DetailsContainer>
    </CardContainer>
  );
}
