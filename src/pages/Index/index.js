import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import "./styles.css";

import api from "../../services/api";

import {
  PageBox,
  AppImagem,
  Container,
  ContainerSignIn,
  Logo,
  SubTitle,
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasTriedToLogin, setHasTriedToLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@twillian:user")) setIsLoggedIn(true);
  }, []);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: ""
  };

  const schema = Yup.object().shape({
    username: Yup.string().required("Digite seu nome de usuário."),
    password: Yup.string().required("Digite sua senha.")
  });

  const handleSubmit = async (data, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const response = await api.post("login", data);

      const { user, token } = response.data;
      if (user) {
        localStorage.setItem(
          "@twillian:user",
          JSON.stringify({ ...user, token })
        );

        setIsLoggedIn(true);
      }
    } catch (error) {
      setHasTriedToLogin(true);
      setErrors({ email: handleException(error.response) });
    } finally {
      setSubmitting(false);
    }
  };

  const handleException = ({ status }) => {
    // eslint-disable-next-line
    switch (status) {
      case 400:
        return "Usuário ou senha inválido.";
    }

    return "Algo deu errado, tente novamente mais tarde.";
  };

  return isLoggedIn ? (
    <Redirect to="timeline" />
  ) : (
    <PageBox>
      <Container>
        <AppImagem src={PhoneImagem} />
        <ContainerSignIn>
          <SignIn>
            <Logo src={LogoImagem} />
            <SubTitle>
              Entre e compartilhe seus pensamentos com seus amigos!
            </SubTitle>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <Form className="signin-form">
                <Field
                  className="username-input"
                  type="text"
                  name="username"
                  placeholder="Nome de usuário"
                />
                <ErrorMessage
                  className="login-form-error"
                  component="span"
                  name="username"
                />
                <Field
                  className="password-input"
                  type="password"
                  name="password"
                  placeholder="Senha"
                />
                <ErrorMessage
                  className="login-form-error"
                  component="span"
                  name="password"
                />
                <SignInButton type="submit">Entrar</SignInButton>
                {hasTriedToLogin && (
                  <span className="form-error">
                    Nome de usuário ou senha invalida
                  </span>
                )}
                <LineWrap>
                  <Line />
                  <LineCenter>ou</LineCenter>
                  <Line />
                </LineWrap>
                <Link to="/register">
                  <SignUpButton>Registrar</SignUpButton>
                </Link>
              </Form>
            </Formik>
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
