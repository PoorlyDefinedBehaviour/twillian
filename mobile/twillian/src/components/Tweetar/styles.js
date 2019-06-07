import styled from 'styled-components/native';

import RawContainer from '~/components/Container';

export const Container = styled(RawContainer)`
  flex-direction: row;
  align-items: flex-start;
  height: 125px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Message = styled.TextInput`
  margin-left: 10px;
  padding-right: 50px;

  color: #14171a;
  text-decoration: none;
`;
