import Image from "next/image";
import styled from "styled-components";
import Map from "../LocationMap";
import FavoriteButton from "../FavoriteButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 750px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 767px) {
    max-width: 444px;
  }
  @media (min-width: 768px) {
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export default function EventDetails({
  title,
  location,
  date,
  image,
  category,
  time,
  genre,
  address,
  postalCode,
  width,
  height,
  lat,
  lon,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Wrapper>
        <CardContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <StyledImage src={image} alt={title} width={width} height={height} />
          <StyledList>
            <h3>{title}</h3>
            <li>
              {category} - {genre}
            </li>
            <li> {date}</li>
            <li>{time} Uhr</li>
            <li>{address}</li>
            <li>
              {postalCode} {location}
            </li>
          </StyledList>
          <Map lat={lat} lon={lon} />
        </CardContainer>
      </Wrapper>
    </>
  );
}
