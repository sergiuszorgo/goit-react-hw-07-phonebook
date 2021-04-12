import React from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import phonebookActions from "../../redux/phonebook-actions";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => (
  <div className={s.ContactBox}>
    <h2>Contacts: {contacts.length}</h2>
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.ContactListItem}>
          <p className={s.ContactListName}>
            {name}: {number}
          </p>
          <div>
            <button className={s.contBtn} onClick={() => deleteContact(id)}>
              <span class="material-icons md-light">close</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

// рендер списка
const renderContacts = (contacts, filter) => {
  const lowerName = filter.toLowerCase();
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(lowerName)
  );
};
const mapStateToProps = (state) => {
  const { filter, contacts } = state.items;
  const visibleContacts = renderContacts(contacts, filter);
  return {
    contacts: visibleContacts,
  };
};

// const mapStateToProps = ({ items: { contacts, filter } }) => ({
//   items: renderContacts(contacts, filter),
// });

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  deleteContact: propTypes.func.isRequired,
};
