import React, { useEffect } from 'react';
import { AsyncStorage } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import api from '~/services/api';

import logo from '~/assets/images/logo.png';

import {
  Card,
  Container,
  Error,
  Input,
  Login,
  LoginText,
  Logo,
  LogoContainer,
  OrContainer,
  OrText,
  Register,
  RegisterText,
} from './styles';

function Home({ navigation }) {
  useEffect(() => {
    AsyncStorage.getItem('@twillian:user').then((user) => {
      if (user) navigation.navigate('Timeline');
    });
  }, []);

  const refs = {};

  const initialValues = {
    username: '',
    email: '',
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Digite seu e-mail.')
      .email('Insira um e-mail válido.'),
    password: Yup.string().required('Digite sua senha.'),
  });

  const onSubmit = async (data, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);

      const response = await api.post('login', data);

      const { user, token } = response.data;
      await AsyncStorage.setItem('@twillian:user', JSON.stringify({ ...user, token }));

      navigation.navigate('Timeline');
    } catch (ex) {
      setErrors({ email: handleException(ex.response) });
    } finally {
      setSubmitting(false);
    }
  };

  const handleException = ({ status }) => {
    switch (status) {
      case 400:
        return 'Usuário ou senha inválido.';
    }

    return 'Algo deu errado, tente novamente mais tarde.';
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
    >
      {({
        values, handleChange, handleBlur, touched, errors, handleSubmit, isSubmitting,
      }) => (
        <Container>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
          <Card>
            <Input
              placeholder="E-mail"
              returnKeyType="next"
              autoCompleteType="email"
              textContentType="emailAddress"
              keyboardType="email-address"
              onSubmitEditing={() => refs.password.focus()}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              blurOnSubmit={false}
              error={touched.email && !!errors.email}
            />
            {touched.email && !!errors.email && <Error>{errors.email}</Error>}
            <Input
              ref={input => (refs.password = input)}
              placeholder="Senha"
              secureTextEntry
              autoCompleteType="password"
              textContentType="password"
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              blurOnSubmit={false}
              error={touched.password && !!errors.password}
            />
            {touched.password && !!errors.password && <Error>{errors.password}</Error>}
            <Login
              disabled={
                Object.entries(errors).length > 0
                || Object.entries(touched).length == 0
                || isSubmitting
              }
              onPress={handleSubmit}
            >
              <LoginText>Entrar</LoginText>
            </Login>
            <OrContainer>
              <OrText>ou</OrText>
            </OrContainer>
            <Register onPress={() => navigation.navigate('Register')}>
              <RegisterText>Registrar-se</RegisterText>
            </Register>
          </Card>
        </Container>
      )}
    </Formik>
  );
}

export default {
  screen: Home,
  navigationOptions: {
    header: null,
  },
};
