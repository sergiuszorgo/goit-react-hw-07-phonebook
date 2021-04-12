import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  // добавление значений в state
  inputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  //   очистка формы
  resetForm = () => {
    this.setState({ name: "", number: "" });
  };

  // отправка контакта

  // checkDublicat = (name) => {
  //   return this.props.contacts.some(
  //     (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  // };
  pushContact = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    // add new===
    // const { contacts } = this.props;
    // if (this.checkDublicat(this.state.name)) {
    //   alert(`${name} already present in contacts`);
    //   return;
    // }

    // const checkDublicat = contacts.filter(
    //   (value) => name.toLowerCace() === value
    // );
    // if (checkDublicat.length) {
    //   alert(`${name} already present in contacts`);
    //   this.resetForm();
    //   return;
    // }
    // add new===
    if (name && number) {
      this.props.addContact(this.state);
      this.resetForm();
      return;
    }
    alert("Please enter name and phone");
  };

  render() {
    return (
      <form className={s.formList}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>
        <button className={s.formBtn} onClick={this.pushContact}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addContact: ({ name, number }) =>
    dispatch(phonebookActions.addContact({ name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: propTypes.func,
};
