// src/components/search/SearchResult.js
import React from 'react';

const SearchResult = ({ state, handleSelect }) => {
  const handleClick = () => {
    handleSelect(state.state_name);
  };

  return <li onClick={handleClick}>{state.state_name}</li>;
};

export default SearchResult;
