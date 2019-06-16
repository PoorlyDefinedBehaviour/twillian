import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";
import { ErrorMessage, Form, Formik, Field } from "formik";
import * as Yup from "yup";

import "./styles.css";

import DefaultUser from "../../assets/img/defaultuser.jpg";
import AppStore from "../../assets/img/applestore.png";
import GooglePlay from "../../assets/img/googleplay.png";

import {
  Container,
  RegisterButton,
  PageBox,
  DefaultUserImage,
  DownloadContainer,
  AppStoreImage,
  GooglePlayImage
} from "./styles";

export default function Register() {
  const [isRegistered, setIsRegistered] = useState(false);
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: ""
  };

  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Digite um nome de usuário.")
      .min(5, "O nome de usuário deve ter no mínimo 5 caracteres.")
      .max(30, "O nome de usuário deve ter no máximo 5 caracteres."),
    email: Yup.string()
      .email("Digite um e-mail válido.")
      .required("Digite um e-mail válido."),
    password: Yup.string()
      .required("Sua senha não pode ficar vazia.")
      .min(5, "Sua senha deve ter no mínimo 5 caracteres.")
      .max(30, "Sua senha deve ter no máximo 5 caracteres."),
    confirm: Yup.string()
      .required("Confirme sua senha.")
      .oneOf([Yup.ref("password"), null], "As duas senhas devem ser iguais.")
  });

  const handleSubmit = async (data, { setSubmitting }) => {
    try {
      setSubmitting(true);

      const response = await api.post("signup", data);
      const { user, token } = response.data;
      localStorage.setItem(
        "@twillian:user",
        JSON.stringify({ ...user, token })
      );

      setIsRegistered(true);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return isRegistered ? (
    <Redirect to="timeline" />
  ) : (
    <PageBox>
      <Container>
        <DefaultUserImage src={DefaultUser} />
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={schema}
        >
          <Form className="register-form">
            <Field
              className="username"
              placeholder="Nome de usuário"
              type="text"
              name="username"
            />
            <ErrorMessage
              className="form-error"
              component="span"
              name="username"
            />
            <Field
              className="email"
              placeholder="Email"
              type="email"
              name="email"
            />
            <ErrorMessage
              className="form-error"
              component="span"
              name="email"
            />

            <Field
              className="password"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <ErrorMessage
              className="form-error"
              component="span"
              name="password"
            />

            <Field
              className="password"
              type="password"
              name="confirm"
              placeholder="Confirme sua senha"
            />
            <ErrorMessage
              className="form-error"
              component="span"
              name="confirm"
            />
            <RegisterButton type="submit">Registrar</RegisterButton>
          </Form>
        </Formik>
      </Container>

      <DownloadContainer>
        <AppStoreImage src={AppStore} />
        <GooglePlayImage src={GooglePlay} />
      </DownloadContainer>
    </PageBox>
  );
}
