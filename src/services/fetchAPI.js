import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://631e5ab49f946df7dc413d44.mockapi.io/contacts',
// });

axios.defaults.baseURL = 'https://63b8aeda6f4d5660c6dc8691.mockapi.io/contacts';

export const getContacts = async () => {
  const { data } = await axios.get('/');

  return data;
};

export const addContact = async data => {
  const { data: result } = await axios.post('/', data);

  return result;
};

export const removeContact = async id => {
  const { data: result } = await axios.delete(`/${id}`);

  return result;
};
