import React from 'react';

import { Touchable, Image } from './styles';

export default function Avatar({ source, large, onPress }) {
  return (
    <Touchable onPress={onPress} large={large}>
      <Image source={{ uri: source }} large={large} />
    </Touchable>
  );
}
