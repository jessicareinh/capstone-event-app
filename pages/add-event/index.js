import EventForm from "@/components/EventForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: monospace;
  margin-top: 30px;
  font-size: 32px;
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Wrapper>
        <H1> Add Your Own Event</H1>

        <label htmlFor="event-title" />
        <EventForm id="event-title" onAddEvent={onAddEvent} />
      </Wrapper>
    </>
  );
}
