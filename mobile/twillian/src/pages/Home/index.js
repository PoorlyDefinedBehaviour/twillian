import React, { useState } from 'react';

import {
  Container, Card, Input, Login, LoginText, Register, RegisterText,
} from './styles';

export default function Home({ navigation }) {
  const refs = {};

  return (
    <Container>
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
