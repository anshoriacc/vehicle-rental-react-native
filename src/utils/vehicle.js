import axios from 'axios';

export const getVehicle4 = category => {
  const URL = `${process.env.API_HOST}/vehicles/${category}/?limit=4&page=1`;
  return axios.get(URL);
};

export const getVehicle16 = (category, page) => {
  const URL = `${process.env.API_HOST}/vehicles/${category}/?limit=16&page=${
    page || 1
  }`;
  return axios.get(URL);
};

export const getVehicleDetail = vehicleId => {
  const URL = `${process.env.API_HOST}/vehicles/detail/${vehicleId}`;
  return axios.get(URL);
};

export const searchVehicle = search => {
  const URL = `${process.env.API_HOST}/vehicles/search?keyword=${search}`;
  return axios.get(URL);
};

export const addVehicle = (token, body) => {
  const URL = `${process.env.API_HOST}/vehicles`;
  return axios.post(URL, body, {
    headers: {'x-access-token': token},
  });
};

export const editVehicle = (token, body, vehicleId) => {
  const URL = `${process.env.API_HOST}/vehicles/${vehicleId}`;
  return axios.patch(URL, body, {headers: {'x-access-token': token}});
};

export const deleteVehicle = (token, vehicleId) => {
  const URL = `${process.env.API_HOST}/vehicles/${vehicleId}`;
  return axios.delete(URL, {headers: {'x-access-token': token}});
};
