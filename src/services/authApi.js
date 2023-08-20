import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const deleteToken = () => {
  axios.defaults.headers.common['Authorization'] = '';
};

export const signUp = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setToken(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setToken(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  deleteToken();
  return data;
};

export const refreshUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
