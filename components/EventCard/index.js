import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  width: 350px;
  height: 380px;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Title = styled.h2`
  margin-top: 10px;
`;

export default function EventCard({
  title,
  image,
  date,
  location,
  venue,
  width,
  height,
  id,
}) {
  return (
    <>
      <Wrapper>
        <Link href={`/details/${id}`}>
          <Image src={image} alt={title} width={width} height={height} />
          <Title>{title}</Title>
        </Link>
        <DetailsContainer>
          <div>
            <p>{date}</p>
          </div>
          <div>
            <p>{location}</p>
            <p>{venue}</p>
          </div>
        </DetailsContainer>
      </Wrapper>
    </>
  );
}
