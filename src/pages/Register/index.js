import React, { useState } from "react";

import {
  Container,
  UsernameInput,
  EmailInput,
  PasswordInput,
  RegisterButton,
  RegisterForm,
  PageBox
} from "./styles";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(username, email, password);
  };

  return (
    <PageBox>
      <Container>
        <RegisterForm onSubmit={handleSubmit}>
          <UsernameInput
            placeholder="Nome de usuário"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <EmailInput
            placeholder="Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <PasswordInput
            placeholder="Senha"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <RegisterButton>Registrar</RegisterButton>
        </RegisterForm>
      </Container>
    </PageBox>
  );
}
