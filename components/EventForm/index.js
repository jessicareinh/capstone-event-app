import styled from "styled-components";
import { useRouter } from "next/router";

const H2 = styled.h2`
  font-family: monospace;
  margin-top: 30px;
  font-size: 32px;
`;
const Paragraph = styled.p`
  font-size: small;
  color: gray;
  margin: 10px;
`;

const Input = styled.input`
  font-family: monospace;
  border-radius: 6px;
  outline: 3px;
  height: 35px;
  width: 300px;
  border: 0px;
  background-color: #d1c4e9;
  padding: 15px;
  margin-bottom: 20px;

  &:focus {
    background-color: whitesmoke;
  }
`;

const Textarea = styled.textarea`
  font-family: monospace;
  border-radius: 8px;
  background-color: #d1c4e9;
  border: 0;
  padding: 5px;

  &:focus {
    background-color: whitesmoke;
  }
`;
const Submit = styled.button`
  border-radius: 12px;
  border: 0;
  background-color: #bdbdbd;
  font-family: monospace;
  height: 40px;
  &:hover {
    background-color: #9e9e9e;
  }
`;

const Form = styled.form`
  display: grid;
  border-radius: 20px;
  box-sizing: border-box;
  height: 500px;
  padding: 20px;
  width: 320px;
  font-family: monospace;
`;

export default function EventForm({ onAddEvent }) {
  const router = useRouter();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEvent(data);
    alert("🎉You have added your Event successfully!");
    router.push("/my-events");
  }

  return (
    <>
      <H2> Add Your Own Event</H2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*</label>
        <Input type="text" id="title" name="title" required />

        <label htmlFor="date">Date*</label>
        <Input type="date" id="date" name="date" required />
        <label htmlFor="time">Time*</label>
        <Input type="time" id="time" name="time" required />

        <label htmlFor="location">Location*</label>
        <Input type="text" id="location" name="location" required />

        <label htmlFor="description">Description</label>

        <Textarea id="description" name="description" rows="8"></Textarea>

        <Paragraph>*: Required</Paragraph>

        <Submit type="submit">Submit</Submit>
      </Form>
    </>
  );
}
