import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  border: 5px;
  background-color: #bdbdbd;
  font-family: monospace;
  color: black;
  height: 25px;
  margin: 5px;
  padding: 3px;
  cursor: pointer;
  width: 70%;

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

  return <StyledButton onClick={confirmDelete}>delete</StyledButton>;
}
