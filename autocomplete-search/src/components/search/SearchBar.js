// src/components/search/SearchBar.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from './SearchResult';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://cdn-api.co-vin.in/api/v2/admin/location/states'
        );

        const { states } = response.data;
        setResults(states);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    setSearchTerm(query);

    if (query === '') {
      setResults([]);
    } else {
      const filteredResults = results.filter((state) =>
        state.state_name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  };

  const handleSelect = (stateName) => {
    setSearchTerm(stateName);
    setResults([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <i className="search-icon fas fa-search"></i>
      {searchTerm !== '' && (
        <div className="search-results">
          <ul>
            {results.map((result) => (
              <SearchResult
                key={result.state_id}
                state={result}
                handleSelect={handleSelect}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
