import { nanoid } from "nanoid";
import { createAction } from "@reduxjs/toolkit";
import axios from "axios"; // temp

//========TEST============
const addContact = ({ name, number }) => (dispatch) => {
  console.log(name, number);
  const contact = { id: nanoid(), name, number };
  dispatch({ type: "contact/addContactRequest" });
  axios
    .post("/contacts", contact)
    .then(({ data }) =>
      dispatch({ type: "contact/addContactSuccess", payload: data })
    )
    .catch((error) =>
      dispatch({ type: "contact/addContactError", payload: error })
    );
};
//========================

// const addContact = createAction("contact/add", ({ name, number }) => ({
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// }));

const deleteContact = createAction("contact/delete");

const changeFilter = createAction("contact/changeFilter");

export default { addContact, deleteContact, changeFilter };
