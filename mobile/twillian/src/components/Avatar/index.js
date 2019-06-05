import React from 'react';

import { Image } from './styles';

export default function Avatar({ small }) {
  return (
    <Image
      source={{
        uri: 'https://pbs.twimg.com/profile_images/1113436678050316289/t-Agpngx_400x400.jpg',
      }}
    />
  );
}
