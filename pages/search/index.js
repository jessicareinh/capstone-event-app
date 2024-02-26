import React, { useState } from "react";
import EventList from "@/components/EventList";
import SearchForm from "@/components/SearchForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h3`
  text-align: center;
  margin: 20px auto 0;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto 10px;
  }
`;

const ResultAmount = styled.div`
  text-align: center;
  margin: 10px;
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
      <PageTitle>Search</PageTitle>
      <SearchForm onSubmit={handleSubmit} />

      <ResultAmount>
        {query && (
          <h3>
             {searchData.length} results found for "{query}"
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
