import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    },
    [fetchContacts.pending]: state => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
    [addContact.pending]: state => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, payload],
        isLoading: false,
      };
    },
    [addContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    },
    [deleteContact.pending]: state => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [deleteContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
        isLoading: false,
      };
    },
    [deleteContact.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
