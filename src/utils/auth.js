import axios from 'axios';

export const login = body => {
  const URL = `${process.env.API_HOST}/auth`;
  return axios.post(URL, body);
};

export const register = body => {
  const URL = `${process.env.API_HOST}/auth/register`;
  return axios.post(URL, body);
};
