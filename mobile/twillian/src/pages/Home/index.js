import React from 'react';
import logo from '~/assets/images/logo.png';
import {
  Card,
  Container,
  Input,
  Login,
  LoginText,
  Logo,
  LogoContainer,
  Register,
  RegisterText,
} from './styles';

export default function Home({ navigation }) {
  const refs = {};

  return (
    <Container>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <Card>
        <Input
          placeholder="Usuário"
          returnKeyType="next"
          onSubmitEditing={() => refs.password.focus()}
          blurOnSubmit={false}
        />
        <Input
          ref={input => (refs.password = input)}
          placeholder="Senha"
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
        />
        <Login>
          <LoginText onPress={() => navigation.navigate('Main')}>Entrar</LoginText>
        </Login>
        <Register>
          <RegisterText>Registrar-se</RegisterText>
        </Register>
      </Card>
    </Container>
  );
}
