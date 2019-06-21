import React from 'react';

import { Container, Touchable, Image } from './styles';

export default function Avatar({ source, large, onPress }) {
  if (onPress) {
    return (
      <Touchable onPress={onPress} large={large}>
        <Image source={{ uri: source }} large={large} />
      </Touchable>
    );
  }

  return (
    <Container>
      <Image source={{ uri: source }} large={large} />
    </Container>
  );
}
