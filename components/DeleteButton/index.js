import styled from "styled-components";

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
  &:hover {
    background-color: #ff6bd0;
    color: black;
    font-weight: 600;
  }
`;

export default function DeleteButton({ id, onDeleteEvent, confirmMessage }) {
  const confirmDelete = () => {
    const isConfirmed = window.confirm(confirmMessage);
    if (isConfirmed) {
      onDeleteEvent(id);
    }
  };

  return (
    <StyledDeleteButton onClick={confirmDelete}>Delete</StyledDeleteButton>
  );
}
