import styled from "styled-components";

const StyledDeleteButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function DeleteButton({ onClick, confirmMessage }) {
  const onDeleteEvent = (id) => {
    const isConfirmed = window.confirm(confirmMessage);
    if (isConfirmed) {
      onClick(id);
    }
  };
  return (
    <StyledDeleteButton onClick={onDeleteEvent}>Delete</StyledDeleteButton>
  );
}
