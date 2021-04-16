import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.items.loading;
const getAllContacts = state => state.items.contacts;
const getFilter = state => state.items.filter;

const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const lowerName = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerName),
    );
  },
);

export default {
  getLoading,
  getAllContacts,
  getFilter,
  getFilteredContacts,
};
