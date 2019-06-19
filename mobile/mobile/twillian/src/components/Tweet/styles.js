import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 5px;
`;

export const Author = styled.Text`
  color: #14171a;
  margin-left: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const Username = styled.Text`
  color: #657786;
  margin-left: 5px;
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

export const ActionIcon = styled(Icon).attrs(props => ({
  name: props.name,
  size: 25,
  color: '#3d3d3d',
}))``;
