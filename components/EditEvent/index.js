import { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-top: 10px;
`;

const Input = styled.input`
  font-family: sans-serif;
  outline: 3px;
  height: 40px;
  width: 45%;
  border: 0px;
  background-color: #f5f5f5;
  margin: 10px 5px;
  padding: 5px;
  font-style: italic;
  border-radius: 8px;

  &:focus {
    background-color: #bdbdbd;
  }
`;
const StyledEditButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border-radius: 8px;
  border: 5px;
  background-color: #f5f5f5;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  font-family: monospace;
  font-size: 1.1rem;
  padding: 10px;
  height: 40px;
  width: 90px;
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
  font-weight: 700;
  font-size: 1rem;
  width: 70px;
  height: 30px;
  margin: 5px;
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
    <>
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

          <ButtonContainer>
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
          </ButtonContainer>
        </Section>
      )}
      {!isEditing && (
        <StyledEditButton onClick={() => setIsEditing(true)}>
          Edit
        </StyledEditButton>
      )}
    </>
  );
}
