import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

export default function EventForm({ onAddEvent }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddEvent(data);
    console.log(data);
    event.target.reset();
  }

  const Paragraph = styled.p`
    font-size: small;
    color: gray;
  `;

  return (
    <>
      <h2> Add your Own Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*</label>
        <input type="text" id="title" name="title" required />
        <br></br>
        <label htmlFor="date">Date*</label>
        <input type="date" id="date" name="date" required />
        <label htmlFor="time">Time*</label>
        <input type="time" id="time" name="time" required />
        <br></br>
        <label htmlFor="location">Location*</label>
        <input type="text" id="location" name="location" required />
        <br></br>
        <label htmlFor="description">Description</label>
        <br></br>
        <textarea id="description" name="description" rows="8"></textarea>
        <br></br>
        <Paragraph>*: Required</Paragraph>
        <br></br>

        <button type="submit">Add Your Own Event</button>
      </form>
    </>
  );
}
