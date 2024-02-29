import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/router";
import Modal from "../ModalWindow";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  padding: 20px;
  width: 80vw;
  font-family: monospace;
`;

const Paragraph = styled.p`
  font-size: small;
  color: gray;
  margin: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 5px;
  align-self: flex-start;
  @media (min-width: 501px) {
    font-size: 1.2rem;
    align-self: center;
  }
`;

const Input = styled.input`
  font-family: monospace;
  border-radius: 8px;
  outline: 3px;
  height: 40px;
  width: 100%;
  border: 0px;
  background-color: #d1c4e9;
  padding: 15px;
  margin: 0px auto 20px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:focus {
    background-color: whitesmoke;
  }
  @media (min-width: 501px) {
    max-width: 400px;
    height: 45px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  font-family: monospace;
  border-radius: 8px;
  background-color: #d1c4e9;
  border: 0;
  padding: 5px;
  height: 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:focus {
    background-color: #f5f5f5;
  }
  @media (min-width: 501px) {
    max-width: 400px;
    height: 45px;
  }
`;
const Submit = styled.button`
  margin-top: 10px;
  border-radius: 8px;
  border: 0;
  background-color: #bdbdbd;
  font-family: monospace;
  height: 40px;
  width: 160px;
  color: black;
  font-weight: 700;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  &:hover {
    background-color: #9e9e9e;
  }
`;

export default function EventForm({ onAddEvent }) {
  const router = useRouter();

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddEvent(data);
    setIsSuccessModalOpen(true);
  }
  const handleModalConfirm = () => {
    setIsSuccessModalOpen(false);
    router.push("/my-events");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="title">Title*</Label>
        <Input type="text" id="title" name="title" required />

        <Label htmlFor="date">Date*</Label>
        <Input type="date" id="date" name="date" required />
        <Label htmlFor="time">Time*</Label>
        <Input type="time" id="time" name="time" required />

        <Label htmlFor="location">Location*</Label>
        <Input type="text" id="location" name="location" required />

        <Label htmlFor="description">Description</Label>

        <Textarea id="description" name="description" rows="8"></Textarea>

        <Paragraph>* Required</Paragraph>

        <Submit type="submit">Submit Event</Submit>
      </Form>
      <Modal
        isOpen={isSuccessModalOpen}
        modalType="success"
        confirmMessage=" You have added your Event successfully  🎉  "
        onConfirm={handleModalConfirm}
      />
    </>
  );
}
