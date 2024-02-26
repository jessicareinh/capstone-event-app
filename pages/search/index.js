import React, { useState } from "react";
import EventList from "@/components/EventList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  margin: 20px;
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

const ResultAmount = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

export default function Search({
  searchData,
  onToggleFavorite,
  favList,
  onSubmit,
}) {
  const [query, setQuery] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.searchTerm.value;
    setQuery(query);
    onSubmit(query);
    e.target.reset();
  }

  console.log("searchdata FROM Search.js: ", searchData);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="searchTerm"
          placeholder="Search for events"
          autoComplete="off"
        />
        <Button type="submit">Submit</Button>
      </Form>

      <ResultAmount>
        {query && (
          <h3>
            Results for {query} : {searchData.length}
          </h3>
        )}
      </ResultAmount>

      {searchData.length > 0 && (
        <EventList
          DATA={searchData}
          onToggleFavorite={onToggleFavorite}
          favList={favList}
        />
      )}
    </Wrapper>
  );
}
