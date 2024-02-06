import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ImageContainer = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
`;

const DetailsContainer = styled.div`
  width: 400px;
  height: 500px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const Name = styled.h3`
  margin: 15px 0;
`;

const PageTitle = styled.h1`
  text-align: center;
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
}) {
  return (
    <>
      <PageTitle>Details</PageTitle>
      <Link href="/">Back</Link>
      <DetailsContainer>
        <ImageContainer>
          <Image src={image} alt={title} fill objectFit="contain" />
        </ImageContainer>
        <StyledList>
          <Name>{title}</Name>
          <li>{category}</li>
          <li> {date}</li>
          <li>{time} Uhr</li>
          <li>{genre}</li>
          <li>{address}</li>
          <li>
            {postalCode} {location}
          </li>
        </StyledList>
      </DetailsContainer>
    </>
  );
}
