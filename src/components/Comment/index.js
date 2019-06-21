import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Container, Quantity } from './styles';

function Comment({ commented, quantity, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Icon name="comment-alt" color="#657786" size={18} solid={commented} />
        <Quantity commented={commented}>{quantity}</Quantity>
      </Container>
    </TouchableOpacity>
  );
}

export default Comment;
