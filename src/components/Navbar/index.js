import React from 'react';

import { Container } from './styles';

import Logo from '../Logo';
import SearchBar from '../../components/SearchBar';

function Navbar() {
  return (
    <Container>
      <Logo size={38} />
      <SearchBar />
    </Container>
  );
}

export default Navbar;
