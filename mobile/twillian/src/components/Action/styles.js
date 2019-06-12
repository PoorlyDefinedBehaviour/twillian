import styled from 'styled-components/native';

import RawContainer from '~/components/Container';
import RawIcon from 'react-native-vector-icons/FontAwesome5';

export const Container = styled(RawContainer)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(RawIcon).attrs(props => ({
  name: props.name,
  size: 18,
  color: props.color,
  solid: props.solid,
}))``;

export const Quantity = styled.Text`
  color: #14171a;
  margin-left: 8px;
`;
