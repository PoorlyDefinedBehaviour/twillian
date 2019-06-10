import React from 'react';

import {
  Container, Card, Input, Login, LoginText, Register, RegisterText,
} from './styles';

export default function Home({ navigation }) {
  return (
    <Container>
      <Card>
        <Input placeholder="Usuário" />
        <Input
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
