import React, { useState } from "react";
import EventList from "@/components/EventList";
import { Wrapper, Form, Input, Button, ResultAmount } from "./styles";

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
