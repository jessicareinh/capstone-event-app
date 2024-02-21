import EventForm from "@/components/EventForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 30px auto;
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <Wrapper>
        <PageTitle>Add your Events</PageTitle>
        <EventForm onAddEvent={onAddEvent} />
      </Wrapper>
    </>
  );
}
