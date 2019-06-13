import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableWithoutFeedback } from 'react-native';
import { Container, Quantity } from './styles';

function Like({ liked, quantity, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        {liked && <Icon name="heart" color="#ff2d2d" size={18} solid />}
        {!liked && <Icon name="heart" color="#657786" size={18} />}
        <Quantity liked={liked}>{quantity}</Quantity>
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Like;
