import { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 30px;
`;

const Section = styled.section`
  font-family: Inter, sans-serif;
  font-size: 12px;
  color: #111;
`;

const StyledEditButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
`;

export default function EditEvent({ event, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableEvent, setEditableEvent] = useState({ ...event });

  return (
    <StyledList>
      {isEditing && (
        <Section>
          <input
            type="text"
            defaultValue={event.title}
            onChange={(e) =>
              setEditableEvent({
                ...editableEvent,
                title: e.target.value,
              })
            }
            placeholder="Title"
            required
          />

          <input
            htmlFor="date"
            type="date"
            defaultValue={event.date}
            onChange={(e) =>
              setEditableEvent({
                ...editableEvent,
                date: e.target.value,
              })
            }
            placeholder="Date"
            required
          />

          <input
            htmlFor="time"
            type="time"
            defaultValue={event.time}
            onChange={(e) =>
              setEditableEvent({
                ...editableEvent,
                time: e.target.value,
              })
            }
            placeholder="Time"
            required
          />

          <input
            type="text"
            defaultValue={event.location}
            onChange={(e) =>
              setEditableEvent({
                ...editableEvent,
                location: e.target.value,
              })
            }
            placeholder="Location"
            required
          />
          <input
            type="text"
            defaultValue={event.description}
            onChange={(e) =>
              setEditableEvent({
                ...editableEvent,
                description: e.target.value,
              })
            }
            placeholder="Description"
          />
          <button
            onClick={() => {
              onSave(editableEvent);
              setIsEditing(false);
            }}
          >
            Save
          </button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </Section>
      )}
      {!isEditing && (
        <StyledEditButton onClick={() => setIsEditing(true)}>
          edit
        </StyledEditButton>
      )}
    </StyledList>
  );
}
