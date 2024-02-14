import styled from "styled-components";
import DeleteButton from "../DeleteButton";

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const EventCard = styled.li`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: lightgray;
  margin: 30px;
  padding: 15px;
  width: 300px;
  height: 230px;
  border-radius: 10px;
  position: relative;
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
          <li>{event.date}</li>
          <li>{event.time}</li>
          <li>{event.location}</li>
          <li>{event.description}</li>

          <DeleteButton
            id={event.id}
            onDeleteEvent={() => onDeleteEvent(event.id)}
            confirmMessage="Are you sure you want to delete this event?"
          />
        </EventCard>
      ))}
    </StyledList>
  );
}
