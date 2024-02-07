import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 375px;
  height: 380px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
  }
`;

const Title = styled.h3`
  margin: 10px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export default function EventCard({
  title,
  image,
  date,
  location,
  width,
  height,
  id,
}) {
  return (
    <Wrapper>
      <CardContainer>
        <Link href={`/details/${id}`}>
          <StyledImage src={image} alt={title} width={width} height={height} />
        </Link>

        <Title>{title}</Title>

        <DetailsRow>
          <p>{location}</p>
          <p>{date}</p>
        </DetailsRow>
      </CardContainer>
    </Wrapper>
  );
}
