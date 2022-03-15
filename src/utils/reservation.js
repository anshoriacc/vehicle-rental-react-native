import axios from 'axios';

export const history = token => {
  const URL = `${process.env.API_HOST}/reservation`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};

export const historyAdmin = token => {
  const URL = `${process.env.API_HOST}/reservation/all`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};

export const makeReservation = (token, body) => {
  const URL = `${process.env.API_HOST}/reservation`;
  return axios.post(URL, body, {headers: {'x-access-token': token}});
};

export const deleteReservation = (token, body) => {
  const URL = `${process.env.API_HOST}/reservation/delete`;
  return axios.patch(URL, body, {headers: {'x-access-token': token}});
};
