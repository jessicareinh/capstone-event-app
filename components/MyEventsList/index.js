import styled from "styled-components";

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
  margin-top: 30px;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-weight: 600;
`;

const EditButton = styled.button`
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
  position: absulute;
  text-align: center;
  text-decoration: none;
`;

export default function MyEventsList({ ownEvents }) {
  const [editEvent, setEditEvent] = useState([]);
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
          <EditButton onClick={() => handleEdit(event.id)}>edit</EditButton>
        </EventCard>
      ))}
    </StyledList>
  );
}
