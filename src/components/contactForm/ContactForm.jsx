import React from 'react';

import '../phonebook/phonebook.css';

const ContactForm = ({ onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className="Form__block">
    <label className="Form__name">
      Name
      <input
        className="Form__nameInput"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </label>
    <label className="Form__number">
      Number
      <input
        className="form__numberInput"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
    </label>
    <button className="FormName__btn" type="submit">
      Add contact
    </button>
  </form>
);
export default ContactForm;
