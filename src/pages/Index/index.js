import React from "react";
import {
  Container,
  SigUpForm,
  UsernameInput,
  PasswordInput,
  SigUpButton
} from "./styles";

export default function Index() {
  return (
    <Container>
      <SigUpForm>
        <UsernameInput placeholder="Nome de usuário" />
        <PasswordInput placeholder="Senha" />
        <SigUpButton>Entrar</SigUpButton>
      </SigUpForm>
    </Container>
  );
}
