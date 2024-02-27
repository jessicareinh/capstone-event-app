import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  border: 5px;
  background-color: #bdbdbd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: monospace;
  color: black;
  height: 25px;
  margin: 5px;
  padding: 3px;
  cursor: pointer;
  width: 66%;

  &:hover {
    background-color: #9e9e9e;
  }
`;

export default function DeleteButton({ id, onDeleteEvent }) {
  function handleClick() {
    onDeleteEvent(id);
  }

  return (
    <StyledButton onClick={handleClick} aria-label="Delete Event">
      Delete
    </StyledButton>
  );
}
