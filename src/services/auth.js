export const APP_KEY = "@twillian";

export function getUser() {
  return JSON.parse(localStorage.getItem(`${APP_KEY}:user`));
}

export function isAuthenticated() {
  return !!getUser();
}

export function getToken() {
  const user = getUser();
  return user.token;
}

export function authenticate(user, token) {
  localStorage.setItem(`${APP_KEY}:user`, JSON.stringify({ ...user, token }));
}
