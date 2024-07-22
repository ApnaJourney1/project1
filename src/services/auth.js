import { apiRequest } from './api';

export async function register(name, email, password) {
  const data = await apiRequest('/register', 'POST', { name, email, password });
  // No need to set user or token as email is not verified
  return data;
}

export async function verifyEmail(token) {
  const data = await apiRequest('/verify-email', 'POST', { token });
  localStorage.setItem('token', data.token);
  return data.user;
}





