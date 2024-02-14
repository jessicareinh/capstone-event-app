import styled from "styled-components";
import { useState } from "react";

const StyledList = styled.li`
  list-style: none;
  margin: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
`;

const Paragraph = styled.p`
  margin: 10px;
`;

const EventCard = styled.li`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: lightgray;
  margin-top: 30px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
`;

const DeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function MyEventsList({ ownEvents, onDelete }) {
  const handleDeleteEvent = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this event?"
    );
    if (isConfirmed) {
      onDelete(id);
    }
  };
  return (
    <StyledList>
      {ownEvents.length === 0 && <p>You have not added any events yet </p>}
      {ownEvents.map((event) => (
        <EventCard key={event.id}>
          <Title>{event.title}</Title>
          <Paragraph>{event.date}</Paragraph>
          <Paragraph>{event.time}</Paragraph>
          <Paragraph>{event.location}</Paragraph>
          <Paragraph>{event.description}</Paragraph>
          <DeleteButton onClick={() => handleDeleteEvent(event.id)}>
            Delete
          </DeleteButton>
        </EventCard>
      ))}
    </StyledList>
  );
}
