import React, { useState } from "react";
import EventList from "@/components/EventList";
import SearchForm from "@/components/SearchForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
font-size: 1.5rem;
  text-align: center;
  margin: 15px auto;

  @media (min-width: 501px) {
    font-size: 2rem;
    margin: 30px auto;
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

  return (
    <Wrapper>
      <PageTitle>Search</PageTitle>
      <SearchForm onSubmit={handleSubmit} />

      <ResultAmount>
        {query && (
          <h3>
            {searchData.length} results found for &ldquo;{query}&ldquo;
          </h3>
        )}
      </ResultAmount>

      {searchData.length > 0 && (
        <ul>
          <EventList
            DATA={searchData}
            onToggleFavorite={onToggleFavorite}
            favList={favList}
          />
        </ul>
      )}
    </Wrapper>
  );
}
