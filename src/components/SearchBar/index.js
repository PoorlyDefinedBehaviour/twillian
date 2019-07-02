import React, { useState } from 'react';

import api from '../../services/api';

import { Container, Input, SearchWrapper, SearchIcon } from './styles';

function SearchBar() {
  const [keyword, setKeyword] = useState('');
  const [searching, setSearching] = useState(false);

  async function handleSearch(event) {
    event.preventDefault();

    if (!keyword || searching) return;

    try {
      setSearching(true);

      const response = await api.get(`search/${keyword}`);
    } catch (error) {
      console.log(error);
    } finally {
      setSearching(false);
    }
  }

  return (
    <Container onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Buscar"
        value={keyword}
        onChange={event => setKeyword(event.target.value)}
      />
      <SearchWrapper type="submit">
        <SearchIcon size={22} />
      </SearchWrapper>
    </Container>
  );
}

export default SearchBar;
