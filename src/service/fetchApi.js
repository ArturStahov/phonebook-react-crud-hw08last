import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const fetchLogIn = ({ email, password }) => {
  return axios.post('/users/login', {
    email: email,
    password: password,
  });
};

export const fetchSignUp = ({ email, password, name }) => {
  return axios.post('/users/signup', {
    name: name,
    email: email,
    password: password,
  });
};

export const fetchGetCurrentUser = () => {
  return axios.get('/users/current');
};

export const fetchLogOut = () => {
  return axios.post('/users/logout');
};

export const fetchAddItem = item => {
  return axios.post(`/contacts`, item);
};

export const fetchGetItem = () => {
  return axios.get('/contacts');
};

export const fetchDeleteItem = id => {
  return axios.delete(`/contacts/${id}`);
};

export const fetchEditItem = ({ name, number, id }) => {
  const update = {
    name,
    number,
  };
  return axios.patch(`/contacts/${id}`, update);
};

export const fetchImage = query => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '18487031-50da0da9ba31764b7f32dc2fc';

  return fetch(
    `${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&page=1&orientation=horizontal&per_page=12`,
  ).then(response => response.json());
};
