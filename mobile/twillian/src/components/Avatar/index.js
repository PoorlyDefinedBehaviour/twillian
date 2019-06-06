import React from 'react';

import { Image } from './styles';

export default function Avatar({ source, small }) {
  return <Image source={{ uri: source }} />;
}
