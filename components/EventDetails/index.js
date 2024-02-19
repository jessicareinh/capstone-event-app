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
  background-color: #fff;
  position: relative;
  width: 100%;
  height: 80vh;
  margin: 20px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 400px) {
    height: 100vh;
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 80vh;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 20px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 40%;
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
  priority,
}) {
  return (
    <>
      <Wrapper>
        <CardContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
          <StyledImage
            src={image}
            alt={title}
            width={width}
            height={height}
            priority={priority}
          />
          <StyledList>
            <h3>{title}</h3>
            <li>
              {category} - {genre}
            </li>
            <li>{date}</li>
            {time && <li>{time} Uhr</li>}
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
