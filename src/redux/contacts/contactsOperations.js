import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken } from 'services/authApi';
import {
  getAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      return await getAllContacts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      return await addContact(contact);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteContact(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      return await updateContact(id, data);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
