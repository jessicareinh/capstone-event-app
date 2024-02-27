import { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 30px;
  font-family: monospace;
  display: grid;
  padding: 3px;
  width: 70%;
`;

const Input = styled.input`
  font-family: sans-serif;
  outline: 3px;
  height: 40px;
  width: 240px;
  border: 0px;
  background-color: #f5f5f5;
  padding: 5px;
  font-style: italic;
  border-radius: 8px;
  margin: 20px;

  &:focus {
    background-color: #bdbdbd;
  }
`;
const StyledEditButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 5px;
  border-radius: 8px;
  border: 5px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: monospace;
  padding: 10px;
  height: 40px;
  width: 150px;

  cursor: pointer;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const StyledButton = styled.button`
  border-radius: 8px;
  border: 5px;
  background-color: #bdbdbd;
  font-family: monospace;
  padding: 10px 15px;
  margin: 18px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const Section = styled.section`
  font-family: monospace;
  font-size: 12px;
  color: #111;
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
        <StyledEditButton onClick={() => setIsEditing(true)}>
          Edit
        </StyledEditButton>
      )}
    </StyledList>
  );
}
