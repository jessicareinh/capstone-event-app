import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";
import React, { useState } from "react";
import Modal from "../ModalWindow";

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const EventCard = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: lightgray;
  margin: 30px;
  padding: 15px;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h2`
  font-weight: 600;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const handleDelete = (event) => {
    setEventToDelete(event);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteEvent(eventToDelete.id);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  if (!ownEvents || ownEvents.length === 0) {
    return <p>You have not added any events yet </p>;
  }

  return (
    <>
      {ownEvents.map((event) => (
        <EventCard key={event.id}>
          <Title>{event.title}</Title>
          <StyledList>
            <li>{event.date}</li>
            <li>{event.time}</li>
            <li>{event.location}</li>
            <li>{event.description}</li>
          </StyledList>
          <EditEvent key={event.id} event={event} onSave={onSave} />
          <DeleteButton
            id={event.id}
            onDeleteEvent={() => handleDelete(event)}
            confirmMessage="Are you sure you want to delete this event?"
          />
        </EventCard>
      ))}
      <Modal
        isOpen={isModalOpen}
        modalType="delete"
        confirmMessage={
          eventToDelete ? `Are you sure you want to delete this Event?` : ""
        }
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}
