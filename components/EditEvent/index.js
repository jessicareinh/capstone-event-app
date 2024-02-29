import { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-top: 10px;

const Input = styled.input`
  flex: 1 0 auto;
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
  height: 40px;
  margin: 0 15px 40px 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-family: monospace;
  font-size: 12px;
  color: #111;
  margin-bottom: 15px
`;

export default function EditEvent({ event, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableEvent, setEditableEvent] = useState({ ...event });

  return (
    <>
    <StyledFormList>

      {isEditing && (
        <Section>
          <label htmlFor="title">Title:</label>
          <Input
            id="title"
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

          <label htmlFor="date">Date:</label>
          <Input
            id="date"
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

          <label htmlFor="time">Time:</label>
          <Input
            id="time"
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

          <label htmlFor="location">Location:</label>
          <Input
            id="location"
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

          <label htmlFor="description">Description:</label>
          <Input
            id="description"
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

           Edit Event
        </StyledEditButton>
      )}
    </StyledFormList>
     </>
  );
}
