import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";
import React, { useState } from "react";
import Modal from "../ModalWindow";
import Link from "next/link";

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const P = styled.p`
  margin-top: 40px;
  font-family: monospace;
`;

const EventCard = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #d1c4e9;
  margin: 15px;
  padding: 15px;
  width: 90%;
  min-height: 200px;
  border-radius: 10px;
  word-wrap: break-word;
`;

const AddEventLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #bdbdbd;
  font-family: monospace;
  font-size: 20px;
  color: black;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 40px;
  padding-top: 12px;

  cursor: pointer;
  width: 80%;

  &:hover {
    background-color: #9e9e9e;
  }
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
    return (
      <>
        <P>You have not added any events yet... </P>

        <AddEventLink href="/add-event">Add your Event</AddEventLink>
      </>
    );
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
      <AddEventLink href="/add-event">Add your Event</AddEventLink>

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
