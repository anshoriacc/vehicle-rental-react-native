import axios from 'axios';

export const detailProfile = token => {
  const URL = `${process.env.API_HOST}/users/detail`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};

export const editProfile = (token, body) => {
  const URL = `${process.env.API_HOST}/users/edit`;
  return axios.patch(URL, body, {headers: {'x-access-token': token}});
};
