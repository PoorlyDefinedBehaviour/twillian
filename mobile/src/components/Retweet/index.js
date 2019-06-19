import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native';
import { Container, Quantity } from './styles';

function Retweet({ retweeted, quantity, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Icon
          name="retweet"
          color={retweeted ? '#2ecc71' : '#657786'}
          size={18}
          solid={retweeted}
        />
        <Quantity retweeted={retweeted}>{quantity}</Quantity>
      </Container>
    </TouchableOpacity>
  );
}

export default Retweet;
