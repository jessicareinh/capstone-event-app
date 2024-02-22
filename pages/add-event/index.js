import EventForm from "@/components/EventForm";
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H2 = styled.h2`
  font-family: monospace;
  margin-top: 30px;
  font-size: 32px;
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Wrapper>
        <H2> Add Your Own Event</H2>

        <EventForm onAddEvent={onAddEvent} />
      </Wrapper>
    </>
  );
}
