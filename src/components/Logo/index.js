import React from 'react';

import source from '../../assets/img/logo.png';

function Logo({ size = 64 }) {
  return <img src={source} alt="Logo" width={size} />;
}

export default Logo;
