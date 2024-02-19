import { useState } from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  margin: 30px;
`;
const Paragraph = styled.p`
  margin: 10px;
`;

const EventCard = styled.li`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  background-color: lightpink;
  margin-top: 40px;
  border-radius: 10px;
`;

const Section = styled.section`
  font-family: Inter, sans-serif;
  font-size: 12px;
  color: #111;
`;

const StyledEditButton = styled.button`
  align-items: center;
  background-color: #fffbf5;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter, sans-serif;
  font-size: 16px;
  height: 30px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 10px;
  text-align: center;
  text-decoration: none;
`;

export default function EditEvent({ event, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableEvent, setEditableEvent] = useState({ ...event });

  return (
    <StyledList>
      <EventCard key={event.id}>
        <Paragraph>{event.title}</Paragraph>
        <Paragraph>{event.date}</Paragraph>
        <Paragraph>{event.time}</Paragraph>
        <Paragraph>{event.location}</Paragraph>
        <Paragraph>{event.description}</Paragraph>
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
      </EventCard>
    </StyledList>
  );
}
