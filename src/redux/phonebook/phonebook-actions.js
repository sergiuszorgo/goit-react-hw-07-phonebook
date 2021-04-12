import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios"; // temp
//========TEST============
// axios.defaults.baseURL = "http://localhost:4040";

// const addContact = ({ name, number }) => (dispatch) => {
//   const contact = { id: nanoid(), name, number };
//   dispatch({ type: "contact/addContactRequest" });
//   axios
//     .post("/contacts", contact)
//     .then(({ data }) =>
//       dispatch({ type: "contact/addContactSuccess", payload: data })
//     )
//     .catch((error) =>
//       dispatch({ type: "contact/addContactError", payload: error })
//     );
// };
//========================
const addContact = createAction("contact/add", ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/changeFilter");

export default { addContact, deleteContact, changeFilter };
//================
// import { createAction } from "@reduxjs/toolkit";

// export const getContactsRequest = createAction("contact/getContactsRequest");
// export const getContactsSuccess = createAction("contact/getContactsSuccess");
// export const getContactsError = createAction("contact/getContactsError");

// export const addContactRequest = createAction("contact/addContactRequest");
// export const addContactSuccess = createAction("contact/addContactSuccess");
// export const addContactError = createAction("contact/addContactError");

// export const deleteContactRequest = createAction(
//   "contact/deleteContactRequest"
// );
// export const deleteContactSuccess = createAction(
//   "contact/deleteContactSuccess"
// );
// export const deleteContactError = createAction("contact/deleteContactError");

// export const changeFilter = createAction("contact/changeFilter");
