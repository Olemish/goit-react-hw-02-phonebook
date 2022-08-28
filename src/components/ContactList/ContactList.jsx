import React from 'react';
import '../phonebook/phonebook.css';

const ContactList = ({ filterContacts, handleDelete }) => (
  <ul className="listContacts">
    {filterContacts.map(contact => (
      <li key={contact.id}>
        {contact.name} {contact.number}
        <button onClick={() => handleDelete(contact.id)}>Delete</button>
      </li>
    ))}
  </ul>
);
export default ContactList;
