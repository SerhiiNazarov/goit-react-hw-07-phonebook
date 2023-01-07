import axios from 'axios';

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
