import React, { useState } from "react";

import DefaultUser from "../../assets/defaultuser.jpg";
import AppStore from "../../assets/applestore.png";
import GooglePlay from "../../assets/googleplay.png";

import {
  Container,
  UsernameInput,
  EmailInput,
  PasswordInput,
  RegisterButton,
  RegisterForm,
  PageBox,
  DefaultUserImage,
  DownloadContainer,
  AppStoreImage,
  GooglePlayImage
} from "./styles";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = async event => {
    event.preventDefault();
    console.log(username, email, password);

    const user = {
      username,
      email,
      password,
      passwordConfirmation
    };
  };

  return (
    <PageBox>
      <Container>
        <DefaultUserImage src={DefaultUser} />
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
          <PasswordInput
            placeholder="Confirme sua senha"
            value={passwordConfirmation}
            onChange={event => setPasswordConfirmation(event.target.value)}
          />
          <RegisterButton>Registrar</RegisterButton>
        </RegisterForm>
      </Container>

      <DownloadContainer>
        <AppStoreImage src={AppStore} />
        <GooglePlayImage src={GooglePlay} />
      </DownloadContainer>
    </PageBox>
  );
}
