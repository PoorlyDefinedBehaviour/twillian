import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Container, Quantity } from './styles';

function Like({ liked, quantity, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Icon name="heart" color={liked ? '#ff2d2d' : '#657786'} size={18} solid={liked} />
        <Quantity liked={liked}>{quantity}</Quantity>
      </Container>
    </TouchableOpacity>
  );
}

export default Like;
