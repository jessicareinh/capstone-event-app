import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../ModalWindow";
import MyEventCard from "../MyEventCard";

const P = styled.p`
  margin-top: 40px;
  font-family: monospace;
`;
const AddEventButton = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  border: none;
  background-color: #868686;
  color: #fff;
  font-size: 1.2rem;
  margin: 20px auto;
  font-family: monospace;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent, onSave }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  const router = useRouter();

  const handleDelete = (event) => {
    setIsModalOpen(true);
    setEventToDelete(event);
  };

  const handleConfirmDelete = () => {
    onDeleteEvent(eventToDelete);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  if (!ownEvents || ownEvents.length === 0) {
    return (
      <>
        <P>You have not added any events yet... </P>
        <AddEventButton onClick={() => router.push("/add-event")}>
          Add Event
        </AddEventButton>
      </>
    );
  }

  return (
    <>
      {ownEvents.map((event) => (
        <MyEventCard
          key={event.id}
          event={event}
          onDeleteEvent={handleDelete}
          onSave={onSave}
        />
      ))}
      <AddEventButton onClick={() => router.push("/add-event")}>
        Add Event
      </AddEventButton>

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
