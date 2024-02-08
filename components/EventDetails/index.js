import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  height: 450px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  @media (max-width: 767px) {
    max-width: 444px;
    margin: 20px 10px;
  }
  @media (min-width: 768px) {
    max-width: 300px;
    margin: 20px 10px;
  }
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
}) {
  return (
    <>
      <Link href="/">Back</Link>
      <PageTitle>Details</PageTitle>

      <Wrapper>
        <CardContainer>
          <StyledImage src={image} alt={title} width={width} height={height} />

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
        </CardContainer>
      </Wrapper>
    </>
  );
}
