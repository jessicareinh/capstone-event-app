import styled from "styled-components";

const DeleteBtn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 8px;
  border: 5px;
  background-color: #756ab6;
  color: #fff;
  font-size: 1.1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: monospace;
  padding: 10px;
  height: 40px;
  width: 100px;

  cursor: pointer;

  &:hover {
    background-color: #9e9e9e;
  }
`;

export default function DeleteButton({ id, onDeleteEvent }) {
  function handleClick() {
    onDeleteEvent(id);
  }

  return <DeleteBtn onClick={handleClick}>Delete</DeleteBtn>;
}
