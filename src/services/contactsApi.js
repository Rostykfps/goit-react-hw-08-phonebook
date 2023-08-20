import axios from 'axios';

export const getAllContacts = async () => {
  const { data } = await axios.get('contacts');
  return data;
};

export const addContact = async body => {
  const { data } = await axios.post('contacts', body);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};

export const updateContact = async (id, body) => {
  const { data } = await axios.patch(`contacts/${id}`, body);
  return data;
};
