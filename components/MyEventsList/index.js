import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../ModalWindow";
import MyEventCard from "../MyEventCard";

const Info = styled.p`
  text-align: center;
  font-size: 1.3rem;
  margin: 20px;
`;
const AddEventButton = styled.button`
  margin-top: 20px;
  border-radius: 8px;
  border: 0;
  background-color: #bdbdbd;
  font-family: monospace;
  height: 40px;
  width: 160px;
  color: black;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    background-color: #9e9e9e;
  }
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
        <Info>You have not added any events yet... </Info>
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
