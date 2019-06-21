import styled from 'styled-components/native';

import RawContainer from '~/components/Container';

export const Container = styled(RawContainer)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 10px;
`;

export const Message = styled.TextInput`
  margin-left: 10px;
  padding-right: 50px;

  color: #14171a;
  text-decoration: none;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const Characters = styled.Text`
  color: #aab8c2;
  margin-right: 15px;
`;

export const Send = styled.TouchableOpacity`
  background-color: #1da1f2;
  opacity: ${props => (props.disabled ? '0.7' : '1')};

  border-radius: 25px;
  padding: 5px 10px;
`;

export const SendText = styled.Text`
  color: #ffffff;
`;
