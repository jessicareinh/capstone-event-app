import styled from "styled-components";
import { useState } from "react";
import EditEvent from "../EditEvent";

const StyledList = styled.li`
  list-style: none;
  margin: 30px;
`;

export default function MyEventsList({ ownEvents }) {
  const [editEvent, setEditEvent] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (eventId) => {
    setEditEvent(eventId);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setEditEvent(false);
    setIsEditing(false);
  };

  const handleSave = (event) => {
    setEditEvent(false);
    setIsEditing(false);
  };

  return (
    <StyledList>
      {ownEvents.length === 0 && <p>You have not added any events yet </p>}
      {ownEvents.map((event) => (
        <EditEvent keys={event.id} event={event} onSave={handleSave} />
      ))}
    </StyledList>
  );
}
