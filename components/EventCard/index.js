import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  height: 295px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
  }
  @media (max-width: 480px) {
    width: 320px;
    height: 270px;
    margin: 20px 10px;
  }
  @media (481px <= width < 768px) {
    width: 380px;
    height: 295px;
    margin: 20px 10px;
  }

  @media (min-width: 768px) {
    width: 335px;
    margin: 20px 20px;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Title = styled.h3`
  margin: 10px 10px 0 10px;
  font-size: ${({ longtitle }) => (longtitle ? "1rem" : "1.2rem")};
`;

const DetailsContainer = styled.div`
  line-height: 1.4rem;
  margin: auto 10px 10px 10px;
`;

const DetailsRows = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Location = styled.p`
  font-size: 1.1rem;
`;

const Row2 = styled.div`
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
}) {
  return (
    <Wrapper>
      <CardContainer>
        <ImageContainer>
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
            />
          </Link>
        </ImageContainer>

        <Title>{title}</Title>
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
    </Wrapper>
  );
}
