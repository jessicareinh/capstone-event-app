import EventForm from "@/components/EventForm";
import styled from "styled-components";

const PageTitle = styled.h1`
  text-align: center;
  margin: 30px auto 30px auto;
`;

export default function MyEvents({ onAddEvent }) {
  return (
    <>
      <PageTitle>Add your Events</PageTitle>
      <EventForm onAddEvent={onAddEvent} />
    </>
  );
}
