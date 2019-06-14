import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background-color: #1da1f2;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 100px;
`;

export const Card = styled.View`
  background-color: #ffffff;
  elevation: 5;

  border-radius: 5px;
  margin: 25px;
  padding: 40px;
`;

export const Input = styled.TextInput`
  border-color: ${props => (props.error ? '#ff2d2d' : '#1da1f2')};
  border-width: 1px;
  border-radius: 5px;

  color: #14171a;

  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Error = styled.Text`
  color: #ff2d2d;
  font-weight: bold;
`;

export const Login = styled.TouchableOpacity`
  background-color: #1da1f2;
  opacity: ${props => (props.disabled ? '0.7' : '1')};

  border-radius: 5px;
  padding: 10px;
  margin-top: 15px;
`;

export const LoginText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #ffffff;
`;

export const OrContainer = styled.View`
  align-items: center;

  margin-top: 10px;
`;

export const OrText = styled.Text`
  color: #aab8c2;
`;

export const Register = styled.TouchableOpacity`
  border-radius: 5px;
  border-width: 1px;
  border-color: #1da1f2;
  background-color: transparent;

  margin-top: 15px;
  padding: 10px;
`;

export const RegisterText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #1da1f2;
`;
