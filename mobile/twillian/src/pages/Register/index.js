import React from 'react';
import AsyncStorage from 'react-native';

import { withNavigation } from 'react-navigation';

import { Formik } from 'formik';
import * as Yup from 'yup';

import api from '~/services/api';

import {
  Card, Container, Logo, LogoContainer, Input, Error, Login, LoginText,
} from './styles';

import logo from '~/assets/images/logo.png';

function Register({ navigation }) {
  const refs = {};

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
  };

  const schema = Yup.object().shape({
    username: Yup.string()
      .required('Digite um nome de usuário.')
      .min(5, 'O nome de usuário deve ter no mínimo 5 caracteres.')
      .max(30, 'O nome de usuário deve ter no máximo 5 caracteres.'),
    email: Yup.string()
      .email('Digite um e-mail válido.')
      .required('Digite um e-mail válido.'),
    password: Yup.string()
      .required('Sua senha não pode ficar vazia.')
      .min(5, 'Sua senha deve ter no mínimo 5 caracteres.')
      .max(30, 'Sua senha deve ter no máximo 5 caracteres.'),
    confirm: Yup.string()
      .required('Confirme sua senha.')
      .oneOf([Yup.ref('password'), null], 'As duas senhas devem ser iguais.'),
  });

  const onSubmit = async (data, { setSubmitting, setErrors }) => {
    try {
      setSubmitting(true);

      const response = await api.post('signup', data);

      navigation.navigate('Timeline');

      const { user, token } = response.data;
      await AsyncStorage.setItem('@twillian:token', token);
      await AsyncStorage.setItem('@twillian:user', user);
    } catch (ex) {
      // TODO: Handle exceptions
      setErrors(ex.response.data);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={schema}
      validateOnBlur
      validateOnChange
    >
      {({ values, handleChange, handleBlur, touched, errors, handleSubmit }) => (
        <Container>
          <LogoContainer>
            <Logo source={logo} />
          </LogoContainer>
          <Card>
            <Input
              placeholder="Usuário"
              returnKeyType="next"
              onSubmitEditing={() => refs.email.focus()}
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              blurOnSubmit={false}
              error={touched.username && !!errors.username}
            />
            {touched.username && !!errors.username && <Error>{errors.username}</Error>}
            <Input
              ref={input => (refs.email = input)}
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
              onSubmitEditing={() => refs.confirm.focus()}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              blurOnSubmit={false}
              error={touched.password && !!errors.password}
            />
            {touched.password && !!errors.password && <Error>{errors.password}</Error>}
            <Input
              ref={input => (refs.confirm = input)}
              placeholder="Confirmar senha"
              secureTextEntry
              autoCompleteType="password"
              textContentType="password"
              value={values.confirm}
              onChangeText={handleChange('confirm')}
              onBlur={handleBlur('confirm')}
              error={touched.confirm && !!errors.confirm}
            />
            {touched.confirm && !!errors.confirm && <Error>{errors.confirm}</Error>}
            <Login
              disabled={Object.entries(errors).length > 0 || Object.entries(touched).length == 0}
              onPress={handleSubmit}
            >
              <LoginText>Registrar</LoginText>
            </Login>
          </Card>
        </Container>
      )}
    </Formik>
  );
}

export default {
  screen: withNavigation(Register),
  navigationOptions: {
    headerStyle: {
      elevation: 0,
      shadowOpacity: 0,
      backgroundColor: '#1da1f2',
    },
  },
};
