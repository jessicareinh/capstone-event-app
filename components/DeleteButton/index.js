import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  border: 5px;
  background-color: #bdbdbd;
  font-family: monospace;
  height: 25px;
  margin: 5px;
  padding: 5px;

  &:hover {
    background-color: #9e9e9e;
  }
`;

export default function DeleteButton({ id, onDeleteEvent, confirmMessage }) {
  const confirmDelete = () => {
    const isConfirmed = window.confirm(confirmMessage);
    if (isConfirmed) {
      onDeleteEvent(id);
    }
  };

  return <StyledButton onClick={confirmDelete}>Delete</StyledButton>;
}
