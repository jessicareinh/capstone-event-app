import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";
<<<<<<< HEAD
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
=======
import React, { useState } from "react";
import Modal from "../ModalWindow";
>>>>>>> origin/modal-window

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const P = styled.p`
  margin-top: 40px;
  font-family: monospace;
`;

const EventCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #d1c4e9;
  margin: 20px;
  padding: 15px;
  width: 280px;
  min-height: 200px;
  border-radius: 10px;
  word-wrap: break-word;
`;

const AddEventLink = styled.a`
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  border: 2px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
  background-color: #bdbdbd;
  font-family: monospace;
  color: black;
  height: 25px;
  margin-top: 20px
  margin-bottom: 20px;
  padding: 6px;
  padding-left: 10px;
  cursor: pointer;
  width: 280px;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  margin: 25px;
  font-family: monospace;
  font-size: 32px;
  font-weight: bold;
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
<<<<<<< HEAD
      <Wrapper>
        <H1>My Events List</H1>
        {ownEvents.map((event) => (
          <EventCard key={event.id}>
            <Title>{event.title}</Title>
            <StyledList>
              <li>{event.date}</li>
              <li>{event.time}</li>
              <li>{event.location}</li>
              <li>{event.description}</li>
            </StyledList>
            <ButtonContainer>
              <EditEvent key={event.id} event={event} onSave={onSave} />
              <DeleteButton
                id={event.id}
                onDeleteEvent={() => onDeleteEvent(event.id)}
                confirmMessage="Are you sure you want to delete this event?"
              />
            </ButtonContainer>
          </EventCard>
        ))}
        <AddEventLink href="/add-event">Add your Event</AddEventLink>
      </Wrapper>
=======
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
>>>>>>> origin/modal-window
    </>
  );
}
