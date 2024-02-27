import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 8px;
  border: 5px;
  background-color: #bdbdbd;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: monospace;
  padding: 50px;

  cursor: pointer;

  &:hover {
    background-color: #9e9e9e;
  }
`;

export default function DeleteButton({ id, onDeleteEvent }) {
  const handleClick = () => {
    onDeleteEvent(id);
  };

  return <StyledButton onClick={handleClick}>Delete</StyledButton>;
}
