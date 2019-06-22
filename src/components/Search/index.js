import React, { useState } from 'react';
import { Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CloseButton,
  Input,
  IconWrapper,
  SubmitButton,
  ExpandWrapper,
  ExpandButton,
} from './styles';

function Search() {
  const [expanded, setExpanded] = useState(false);

  const opacity = new Animated.Value(0);

  Animated.timing(opacity, { toValue: 1, duration: 300 }).start();

  if (expanded) {
    return (
      <Container style={{ opacity }}>
        <CloseButton onPress={() => setExpanded(false)}>
          <Icon name="close" size={16} color="#14171a" />
        </CloseButton>
        <Input placeholder="Buscar..." />
        <IconWrapper>
          <SubmitButton onPress={() => {}}>
            <Icon name="search" size={25} color="#1da1f2" />
          </SubmitButton>
        </IconWrapper>
      </Container>
    );
  }

  return (
    <ExpandWrapper style={{ opacity }}>
      <ExpandButton onPress={() => setExpanded(true)}>
        <Icon style={{ marginRight: 20 }} name="search" size={24} color="#fff" />
      </ExpandButton>
    </ExpandWrapper>
  );
}

export default Search;
