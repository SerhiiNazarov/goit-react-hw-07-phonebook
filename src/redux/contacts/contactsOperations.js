import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsShelfAPI from 'services/fetchAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsShelfAPI.getContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (values, { rejectWithValue }) => {
    try {
      const contacts = await contactsShelfAPI.addContact(values);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await contactsShelfAPI.removeContact(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
