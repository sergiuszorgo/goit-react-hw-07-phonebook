import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const checkDublicat = state.filter(
      (contact) => payload.name === contact.name
    );
    if (checkDublicat.length) {
      alert(`${payload.name} - present in contacts`);
      return state;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
// ======NEW======
// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import {
//   getContactsRequest,
//   getContactsSuccess,
//   getContactsError,
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   changeFilter,
// } from "./phonebook-actions";

// const contactReducer = createReducer([], {
//   [getContactsSuccess]: (_, { payload }) => payload,
//   [addContactSuccess]: (state, { payload }) => [...state, payload],
//   [deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const filterReduser = createReducer("", {
//   [changeFilter]: (_, { payload }) => payload,
// });

// const error = createReducer(null, {});

// const contactsReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReduser,
//   error,
// });

// export default contactsReducer;
