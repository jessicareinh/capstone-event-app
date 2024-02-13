import Image from "next/image";
import styled from "styled-components";
import Map from "../LocationMap";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  height: 800px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 767px) {
    max-width: 444px;
    margin: 20px 10px;
  }
  @media (min-width: 768px) {
    max-width: 700px;
    margin: 20px 10px;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 20px;
`;

const PageTitle = styled.h1`
  text-align: center;
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
}) {
  return (
    <>
      <PageTitle>Details</PageTitle>
      <Wrapper>
        <CardContainer>
          <StyledImage src={image} alt={title} width={width} height={height} />
          <StyledList>
            <h3>{title}</h3>
            <li>{category} - {genre}</li>
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
