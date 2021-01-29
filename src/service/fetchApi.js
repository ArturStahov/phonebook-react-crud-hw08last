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
