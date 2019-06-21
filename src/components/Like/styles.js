import styled from 'styled-components/native';

import RawContainer from '~/components/Container';

export const Container = styled(RawContainer)`
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled.Text`
  color: ${props => (props.liked ? '#ff2d2d' : '#657786')};
  font-weight: ${props => (props.liked ? 'bold' : 'normal')};

  margin-left: 8px;
`;
