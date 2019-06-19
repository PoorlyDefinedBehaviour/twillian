import { AsyncStorage } from 'react-native';

export const APP_KEY = '@twillian';

export async function getUser() {
  return JSON.parse(await AsyncStorage.getItem(`${APP_KEY}:user`));
}

export async function isAuthenticated() {
  return !!(await getUser());
}

export async function getToken() {
  const user = await getUser();
  return user.token;
}

export async function authenticate(user, token) {
  await AsyncStorage.setItem(`${APP_KEY}:user`, JSON.stringify({ ...user, token }));
}
