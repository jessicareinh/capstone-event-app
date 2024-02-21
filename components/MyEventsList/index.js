import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";
import Link from "next/link";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

const P = styled.p`
  margin-top: 40px;
  font-family: monospace;
`;

const EventCard = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: #d1c4e9;
  margin: 50px;
  padding: 15px;
  width: 250px;
  min-height: 200px;
  border-radius: 10px;
`;

const AddEventButton = styled.button`
  border-radius: 8px;
  border: 5px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.7);
  background-color: #bdbdbd;
  font-family: monospace;
  color: black;
  height: 25px;
  margin: 15px;
  padding: 3px;
  cursor: poninter;
  width: 250px;

  &:hover {
    background-color: #9e9e9e;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;
const H1 = styled.h1`
  margin-top: 30px;
  font-family: monospace;
  font-size: 32px;
  font-weight: bold;
`;
const Title = styled.h2`
  font-weight: 600;
`;

export default function MyEventsList({ ownEvents, onDeleteEvent, onSave }) {
  if (!ownEvents || ownEvents.length === 0) {
    return (
      <>
        <P>You have not added any events yet... </P>
        <Link href="/add-event">
          <AddEventButton>Add your Event</AddEventButton>
        </Link>
      </>
    );
  }
  return (
    <>
      <Wrapper>
        <H1>My Events List</H1>
        {ownEvents.map((event) => (
          <EventCard key={event.id}>
            <Title>{event.title}</Title>
            <StyledList>
              <li>{event.date}</li>
              <li>{event.time}</li>
              <li>{event.location}</li>
              <li>{event.description}</li>
            </StyledList>
            <ButtonContainer>
              <EditEvent key={event.id} event={event} onSave={onSave} />
              <DeleteButton
                id={event.id}
                onDeleteEvent={() => onDeleteEvent(event.id)}
                confirmMessage="Are you sure you want to delete this event?"
              />
            </ButtonContainer>
          </EventCard>
        ))}
        <Link href="/add-event">
          <AddEventButton>Add your Event</AddEventButton>
        </Link>
      </Wrapper>
    </>
  );
}
