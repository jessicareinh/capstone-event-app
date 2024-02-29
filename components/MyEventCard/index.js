import styled from "styled-components";
import DeleteButton from "../DeleteButton";
import EditEvent from "../EditEvent";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #d1c4e9;
  margin: 15px;
  padding: 15px;
  width: 85%;
  max-width: 480px;
  min-height: 300px;
  border-radius: 10px;
  word-wrap: break-word;
  @media (min-width: 500px) {
    padding: 20px;
  }
`;

const UL = styled.ul`
  list-style: none;
  line-height: 2rem;
`;

export default function MyEventCard({ event, onDeleteEvent, onSave }) {
  return (
    <CardContainer>
      <UL>
        <h2>{event.title}</h2>
        <li>📅 {event.date}</li>
        <li>🕘 {event.time}</li>
        <li>📍 {event.location}</li>
        <li>✍🏻 {event.description}</li>
      </UL>

      <EditEvent event={event} onSave={onSave} />
      <DeleteButton
        id={event.id}
        onDeleteEvent={onDeleteEvent}
        confirmMessage="Are you sure you want to delete this event?"
      />
    </CardContainer>
  );
}
