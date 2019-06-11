import React from 'react';

import { Touchable, Image } from './styles';

export default function Avatar({ source, small, onPress }) {
  return (
    <Touchable onPress={onPress}>
      <Image source={{ uri: source }} />
    </Touchable>
  );
}
