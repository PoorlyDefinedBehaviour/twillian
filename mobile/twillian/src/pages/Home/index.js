import React from 'react';

import {
  Container, Card, Input, Login, LoginText, Register, RegisterText,
} from './styles';

export default function Home() {
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
          <LoginText>Entrar</LoginText>
        </Login>
        <Register>
          <RegisterText>Registrar-se</RegisterText>
        </Register>
      </Card>
    </Container>
  );
}
