import React, { useEffect } from 'react';
import { Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';

import api from '~/services/api';
import { getUser, authenticate } from '~/services/auth';

import { Formik } from 'formik';
import * as Yup from 'yup';

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
  const dispatch = useDispatch();

  useEffect(() => {
    async function refresh() {
      const user = await getUser();
      if (!user) return;

      try {
        const response = await api.get(`user/${user._id}`);

        dispatch({ type: 'SET_USER', user: response.data, token: user.token });

        navigation.navigate('Timeline');
      } catch (ex) {
        console.log(ex);
      }
    }

    refresh();
  }, []);

  const refs = {};

  const initialValues = {
    username: '',
    password: '',
  };

  const schema = Yup.object().shape({
    username: Yup.string().required('Digite seu usuário.'),
    password: Yup.string().required('Digite sua senha.'),
  });

  const onSubmit = async (data, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);

      const response = await api.post('login', data);

      const { user, token } = response.data;
      dispatch({ type: 'SET_USER', user, token: user.token });

      navigation.navigate('Timeline');

      await authenticate(user, token);
    } catch (ex) {
      setErrors({ username: handleException(ex.response) });
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
              placeholder="Usuário"
              returnKeyType="next"
              onSubmitEditing={() => refs.password.focus()}
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              blurOnSubmit={false}
              error={touched.username && !!errors.username}
            />
            {touched.username && !!errors.username && <Error>{errors.username}</Error>}
            <Input
              ref={input => (refs.password = input)}
              placeholder="Senha"
              secureTextEntry
              autoCompleteType="password"
              textContentType="password"
              onSubmitEditing={() => {
                Keyboard.dismiss();
                handleSubmit();
              }}
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
