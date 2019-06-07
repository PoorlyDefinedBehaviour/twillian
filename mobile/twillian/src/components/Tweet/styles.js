import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  background-color: #f5f8fa;
  elevation: 10;
  box-shadow: 0px 10px 10px #000000;
  border-radius: 5px;

  margin: 15px;
  padding: 10px 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 5px;
`;

export const Author = styled.Text`
  color: #14171a;
  margin-left: 10px;
  font-weight: bold;
  font-size: 16px;
`;

export const Username = styled.Text`
  color: #aab8c2;
  margin-left: 10px;
`;

export const Body = styled.View``;

export const Content = styled.Text`
  color: #14171a;
`;

export const Actions = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const ActionIcon = styled(Icon).attrs({
  name: props => props.name,
  size: 25,
  color: '#3d3d3d',
})``;
