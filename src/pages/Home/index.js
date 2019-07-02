import React, { useEffect } from 'react';

import api from '../../services/api';
import { authenticate, getUser } from '../../services/auth';

import * as Yup from 'yup';

import { Formik } from 'formik';

import {
  Container,
  Image,
  LoginContainer,
  LoginHeader,
  Form,
  LoginButton,
  Or,
  Line,
  OrText,
  RegisterButton
} from './styles';

import Logo from '../../components/Logo';
import Input from '../../components/Input';

import image from '../../assets/img/app.png';

function Home({ history }) {
  useEffect(() => {
    const user = getUser();
    if (!user) return;

    history.push('/timeline');
  });

  const initialValues = {
    username: '',
    password: ''
  };

  const schema = Yup.object().shape({
    username: Yup.string().required('Digite seu nome de usuário.'),
    password: Yup.string().required('Digite sua senha.')
  });

  const handleLogin = async (data, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);
      const response = await api.post('login', data);

      const { user, token } = response.data;

      authenticate(user, token);
      history.push('/timeline');
    } catch (error) {
      setErrors({ username: handleException(error.response) });
    } finally {
      setSubmitting(false);
    }
  };

  const handleException = ({ status }) => {
    switch (status) {
      case 400:
        return 'Usuário ou senha inválido.';
      default:
        return 'Algo deu errado, tente novamente mais tarde.';
    }
  };

  return (
    <Container>
      <Image src={image} />
      <LoginContainer>
        <LoginHeader>
          <Logo />
        </LoginHeader>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleLogin}
          validateOnBlur
          validateOnChange
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Usuário"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={errors.username}
                touched={touched.username}
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password}
                touched={touched.password}
              />
              <LoginButton
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                Entrar
              </LoginButton>
              <Or>
                <Line />
                <OrText>ou</OrText>
                <Line />
              </Or>
              <RegisterButton onClick={() => history.push('/register')}>
                Registrar-se
              </RegisterButton>
            </Form>
          )}
        </Formik>
      </LoginContainer>
    </Container>
  );
}

export default Home;
