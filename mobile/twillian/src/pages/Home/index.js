import React from 'react';
import logo from '~/assets/images/logo.png';
import {
  Card,
  Container,
  Logo,
  LogoContainer,
  Input,
  Login,
  LoginText,
  OrContainer,
  OrText,
  Register,
  RegisterText,
} from './styles';

function Home({ navigation }) {
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
        <Login onPress={() => navigation.navigate('Timeline')}>
          <LoginText>Entrar</LoginText>
        </Login>
        <OrContainer>
          <OrText>ou</OrText>
        </OrContainer>
        <Register onPress={() => navigation.push('Register')}>
          <RegisterText>Registrar-se</RegisterText>
        </Register>
      </Card>
    </Container>
  );
}

export default {
  screen: Home,
  navigationOptions: {
    header: null,
  },
};
