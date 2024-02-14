import styled from "styled-components";
import DeleteButton from "../DeleteButton";

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
  background-color: lightgray;
  margin-top: 30px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent }) {
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
          <DeleteButton
            onClick={() => onDeleteEvent(event.id)}
            confirmMessage="Are you sure you want to delete this event?"
          >
            Delete
          </DeleteButton>
        </EventCard>
      ))}
    </StyledList>
  );
}
