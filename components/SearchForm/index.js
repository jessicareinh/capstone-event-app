import styled from "styled-components";

const Form = styled.form`
  display: flex;
  margin: 10px;
`;

const Info = styled.p`
  font-style: italic;
  margin: 20px 20px;
  word-wrap: break-word;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex-grow: 1;
  margin-right: 1rem;

  &:focus {
    outline: none;
    border-color: #999;
  }
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
`;

export default function SearchForm({ onSubmit }) {
  return (
    <>
      <Info>
        Enter events, cities, venues or genres like pop, rap etc. Combinations
        are possible.{" "}
      </Info>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          id="seatchInput"
          name="searchTerm"
          placeholder='"Adele", "Berlin", "Comedy"...'
          autoComplete="off"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}