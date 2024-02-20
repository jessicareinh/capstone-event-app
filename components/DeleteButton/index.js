import styled from "styled-components";
import Modal from "../ModalWindow";
import React, { useState } from "react";

const StyledDeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 0.8rem;
  right: 0.8rem;
`;

export default function DeleteButton({ id, onDeleteEvent, confirmMessage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const confirmDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = () => {
    onDeleteEvent(id);
    setIsModalOpen(false);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledDeleteButton onClick={confirmDelete}>Delete</StyledDeleteButton>
      <Modal
        isOpen={isModalOpen}
        confirmMessage={confirmMessage}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </>
  );
}
