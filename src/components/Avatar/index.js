import React from 'react';

import { Touchable, Image } from './styles';

function Avatar({ size = 125, source, onClick, profile }) {
  if (onClick) {
    return (
      <Touchable onClick={onClick}>
        <Image src={source} size={size} profile={profile} />
      </Touchable>
    );
  }

  return <Image src={source} size={size} profile={profile} />;
}

export default Avatar;
