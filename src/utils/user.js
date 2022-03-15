import axios from 'axios';

export const detailProfile = token => {
  const URL = `${process.env.API_HOST}/users/detail`;
  return axios.get(URL, {headers: {'x-access-token': token}});
};

// export const editProfile = (token, body) => {
//   const URL = `${process.env.API_HOST}/users/edit`;
//   return axios.patch(URL, body, {headers: {'x-access-token': token}});
// };
export const editProfile = async (token, body) => {
  const URL = `${process.env.API_HOST}/users/edit`;
  const res = await fetch(URL, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'multipart/form-data',
      'x-access-token': token,
    },
    body: body,
  });
  return res;
};
