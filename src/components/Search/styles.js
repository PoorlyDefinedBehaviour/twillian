import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  flex-direction: row;
  align-items: center;

  margin-right: 20px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #fff;

  border-radius: 50px;

  margin-right: 5px;
  padding: 2px;
`;

export const Input = styled.TextInput`
  background-color: #fff;

  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 5px 30px 5px 15px;
`;

export const IconWrapper = styled.View`
  background-color: #fff;

  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 6px;
`;

export const SubmitButton = styled.TouchableOpacity``;

export const ExpandWrapper = styled(Animated.View)``;

export const ExpandButton = styled.TouchableOpacity``;
