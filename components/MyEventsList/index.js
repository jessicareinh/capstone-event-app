import styled from "styled-components";
import { useState } from "react";

const StyledList = styled.li`
  list-style: none;
  margin: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
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

const Title = styled.h2`
  font-weight: 600;
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
        <EventCard key={event.id}>
          <Title>{event.title}</Title>
          <Paragraph>{event.date}</Paragraph>
          <Paragraph>{event.time}</Paragraph>
          <Paragraph>{event.location}</Paragraph>
          <Paragraph>{event.description}</Paragraph>
          {isEditing && editEvent === event.id && (
            <Section>
              <input
                type="text"
                defaultValue={event.title}
                onChange={(e) => (event.title = e.target.value)}
                placeholder="Title*"
                required
              />

              <input
                htmlFor="date"
                defaultValue={event.date}
                onChange={(e) => (event.date = e.target.value)}
                placeholder="Date"
                required
              />

              <input
                htmlFor="time"
                defaultValue={event.time}
                onChange={(e) => (event.time = e.target.value)}
                placeholder="Time"
                required
              />

              <input
                type="text"
                defaultValue={event.location}
                onChange={(e) => (event.location = e.target.value)}
                placeholder="Location"
                required
              />
              <input
                type="text"
                defaultValue={event.description}
                onChange={(e) => (event.description = e.target.value)}
                placeholder="Description"
              />
              <button onClick={() => handleSave(event.id)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </Section>
          )}
          {!isEditing && (
            <StyledEditButton onClick={() => handleEdit(event.id)}>
              edit
            </StyledEditButton>
          )}
        </EventCard>
      ))}
    </StyledList>
  );
}
