import { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 30px;
  font-family: monospace;
  display: grid;
  padding: 5px;
  width: 240px;
`;

const Input = styled.input`
  font-family: sans-serif;
  outline: 3px;
  height: 35px;
  width: 100%;
  border: 0px;
  background-color: whitesmoke;
  padding: 5px;
  font-style: italic;
  border-radius: 12px;
  margin: 5px;

  &:focus {
    background-color: #bdbdbd;
  }
`;
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

const Section = styled.section`
  font-family: monospace;
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
          <Input
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

          <Input
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

          <Input
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

          <Input
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
          <Input
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
          <StyledButton
            onClick={() => {
              onSave(editableEvent);
              setIsEditing(false);
            }}
          >
            Save
          </StyledButton>
          <StyledButton onClick={() => setIsEditing(false)}>
            Cancel
          </StyledButton>
        </Section>
      )}
      {!isEditing && (
        <StyledButton onClick={() => setIsEditing(true)}>edit</StyledButton>
      )}
    </StyledList>
  );
}
