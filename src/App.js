import React from "react";
import { connect } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchForm from "./components/SearchForm/SearchForm";

const App = ({ contacts }) => {
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 1 && <SearchForm />}
      <ContactList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.items.contacts,
});

export default connect(mapStateToProps)(App);
