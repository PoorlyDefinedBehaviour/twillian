import styled from 'styled-components/native';

import RawContainer from '~/components/Container';

export const Container = styled(RawContainer)`
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled.Text`
  color: ${props => (props.retweeted ? '#2ecc71' : '#657786')};
  font-weight: ${props => (props.retweeted ? 'bold' : 'normal')};

  margin-left: 8px;
`;
