import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 380px;
  margin: 20px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 360px) {
    max-width: 250px;
    background-color: antiquewhite;
  }

  @media (360px <= width <= 411px) {
    max-width: 335px;
  }

  @media (412px <= width <= 500px) {
    max-width: 380px;
  }

  @media (501px <= width <= 767px) {
    max-width: 335px;
  }

  @media (min-width: 768px) {
    max-width: 335px;
  }
`;

const Title = styled.h3`
  margin: 10px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.1s ease;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
}) {
  return (
    <Wrapper>
      <ImageContainer>
        <FavoriteButton
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
        />
        <CardContainer>
          <Link href={`/details/${id}`}>
            <StyledImage
              src={image}
              alt={title}
              width={width}
              height={height}
            />
          </Link>

          <Title>{title}</Title>

          <DetailsRow>
            <p>{location}</p>
            <p>{date}</p>
          </DetailsRow>
          <p>{venue}</p>
        </CardContainer>
      </ImageContainer>
    </Wrapper>
  );
}
