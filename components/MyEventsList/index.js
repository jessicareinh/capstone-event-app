import styled from "styled-components";
import DeleteButton from "../DeleteButton";

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const MyEventCard = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: #fda1de7a;
  margin: 15px;
  padding: 15px;
  width: 350px;
  height: 230px;
  border-radius: 10px;
  position: relative;
`;

const Title = styled.h3`
  font-weight: 600;
  text-decoration: dotted underline;
  margin-bottom: 10px;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent }) {
  if (!ownEvents || ownEvents.length === 0) {
    return <p>You have not added any events yet </p>;
  }
  return (
    <>
      {ownEvents.map((event) => (
        <MyEventCard key={event.id}>
          <Title>{event.title}</Title>
          <StyledList>
            <li>
              <b>Date:</b> {event.date}
            </li>
            <li>
              <b>Time:</b> {event.time}
            </li>
            <li>
              <b>Where:</b> {event.location}
            </li>
            <li>
              <b>Info: </b>
              {event.description}
            </li>
          </StyledList>

          <DeleteButton
            id={event.id}
            onDeleteEvent={() => onDeleteEvent(event.id)}
            confirmMessage="Are you sure you want to delete this event?"
          />
        </MyEventCard>
      ))}
    </>
  );
}
