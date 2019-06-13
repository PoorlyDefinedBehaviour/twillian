import React from 'react';

import {
  Card, Container, Logo, LogoContainer, Input, Login, LoginText,
} from './styles';

import logo from '~/assets/images/logo.png';

function Register({ navigation }) {
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
          onSubmitEditing={() => refs.email.focus()}
          blurOnSubmit={false}
        />
        <Input
          ref={input => (refs.email = input)}
          placeholder="E-mail"
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
          onSubmitEditing={() => refs.confirm.focus()}
          blurOnSubmit={false}
        />
        <Input
          ref={input => (refs.confirm = input)}
          placeholder="Senha"
          secureTextEntry
          autoCompleteType="password"
          textContentType="password"
        />
        <Login onPress={() => navigation.navigate('Timeline')}>
          <LoginText>Registrar</LoginText>
        </Login>
      </Card>
    </Container>
  );
}

export default {
  screen: Register,
  navigationOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#1da1f2',
    },
  },
};
