import styled from "styled-components";
import { useRouter } from "next/router";

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border: 2px solid #fda1de;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:focus {
    border: 2px solid #fda1de;
    outline: none;
  }
`;

const Paragraph = styled.p`
  font-size: 0.8rem;
  color: gray;
`;

const SubmitButton = styled.button`
  width: 180px;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 6px;
  margin: 20px auto;
  background-color: #fda1de;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #fd3a95;
  }
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
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="title">Title*</Label>
          <Input type="text" id="title" name="title" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="date">Date*</Label>
          <Input type="date" id="date" name="date" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="time">Time*</Label>
          <Input type="time" id="time" name="time" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="location">Location*</Label>
          <Input type="text" id="location" name="location" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" name="description" rows="8"></TextArea>
        </FormGroup>
        <Paragraph>*: Required</Paragraph>
        <SubmitButton type="submit">Submit Event</SubmitButton>
      </form>
    </FormContainer>
  );
}
