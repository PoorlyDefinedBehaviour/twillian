import styled from 'styled-components/native';

import RawContainer from '~/components/Container';

export const Container = styled(RawContainer)`
  flex-direction: row;
  align-items: center;
`;

export const Quantity = styled.Text`
  color: #657786;
  font-weight: ${props => (props.commented ? 'bold' : 'normal')};

  margin-left: 8px;
`;
