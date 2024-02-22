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
`;

export default function DeleteButton({ id, onDeleteEvent }) {
  const handleClick = () => {
    onDeleteEvent(id);
  };

  return <StyledDeleteButton onClick={handleClick}>Delete</StyledDeleteButton>;
}
