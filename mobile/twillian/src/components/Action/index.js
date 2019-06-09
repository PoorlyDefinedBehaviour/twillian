import React from 'react';

import { Container, Icon, Quantity } from './styles';

export default function Action({ name, color, quantity }) {
  return (
    <Container>
      <Icon name={name} color={color} />
      <Quantity>{quantity}</Quantity>
    </Container>
  );
}
