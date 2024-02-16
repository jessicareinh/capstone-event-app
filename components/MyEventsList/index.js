import styled from "styled-components";
import EditEvent from "../EditEvent";

const StyledList = styled.li`
  list-style: none;
  margin: 30px;
`;

const Title = styled.h2`
  font-weight: 600;
`;

export default function MyEventsList({ ownEvents, onSave }) {
  return (
    <StyledList>
      {ownEvents.length === 0 && <p>You have not added any events yet </p>}
      {ownEvents.map((event) => (
        <EditEvent key={event.id} event={event} onSave={onSave} />
      ))}
    </StyledList>
  );
}
