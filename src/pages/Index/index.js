import React from "react";
import { Link } from "react-router-dom";
import {
  PageBox,
  AppImagem,
  Container,
  ContainerSignIn,
  Logo,
  SubTitle,
  SignInForm,
  UsernameInput,
  PasswordInput,
  SignInButton,
  LineWrap,
  LineCenter,
  Line,
  SignUpButton,
  SignIn,
  DownloadContainer,
  AppStoreImage,
  GooglePlayImage
} from "./styles";
import PhoneImagem from "../../assets/img/app.png";
import LogoImagem from "../../assets/img/logo.png";
import AppStore from "../../assets/img/applestore.png";
import GooglePlay from "../../assets/img/googleplay.png";

export default function Index() {
  return (
    <PageBox>
      <Container>
        <AppImagem src={PhoneImagem} />
        <ContainerSignIn>
          <SignIn>
            <Logo src={LogoImagem} />
            <SubTitle>
              Entre e compartilhe seus pensamentos com seus amigos!
            </SubTitle>
            <SignInForm>
              <UsernameInput placeholder="Nome de usuário" />
              <PasswordInput placeholder="Senha" />
              <SignInButton>Entrar</SignInButton>
              <LineWrap>
                <Line />
                <LineCenter>ou</LineCenter>
                <Line />
              </LineWrap>

              <Link to="/register">
                <SignUpButton>Registrar</SignUpButton>
              </Link>
            </SignInForm>
          </SignIn>
          <DownloadContainer>
            <AppStoreImage src={AppStore} />
            <GooglePlayImage src={GooglePlay} />
          </DownloadContainer>
        </ContainerSignIn>
      </Container>
    </PageBox>
  );
}
