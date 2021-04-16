import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import SearchForm from './components/SearchForm';
import { phonebookOperations, phonebookSelectors } from './redux/phonebook';
// import { render } from '@testing-library/react';

class App extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm />
        {contacts.length > 1 && <SearchForm />}
        {this.props.isLoadingContacts ? (
          <h1 className="Load">LOADING ...</h1>
        ) : (
          <ContactList />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
  isLoadingContacts: phonebookSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(phonebookOperations.getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
