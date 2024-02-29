import EventForm from "@/components/EventForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  margin: 20px auto 0;
  font-size: 1.5rem;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto 10px;
  }
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Wrapper>
        <PageTitle> Add Your Own Event</PageTitle>

        <EventForm onAddEvent={onAddEvent} />
      </Wrapper>
    </>
  );
}
