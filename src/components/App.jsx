import React from 'react';

import Filter from './Contacts/filter';
import ContactForm from './contactForm/ContactForm';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  chahgeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };

  handelSubmit = e => {
    e.preventDefault();

    this.addContact(
      this.creatContact(e.target.name.value, e.target.number.value)
    );
    console.log(e.target.number.value);
    e.target.name.value = '';
    e.target.number.value = '';
  };

  handleDelete = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  creatContact(name, number) {
    return { name: name, number: number, id: nanoid() };
  }
  addContact = newContact => {
    if (
      this.state.contacts.find(item => {
        return item.name.includes(newContact.name);
      })
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
    }
  };

  render() {
    const { filter } = this.state;

    const normalizeFilter = this.state.filter.toLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizeFilter)
    );

    return (
      <div className="Phonebook">
        <h1 className="text">Phonebook</h1>
        <ContactForm
          onSubmit={this.handelSubmit}
          onChange={this.handleChange}
        />

        <h2 className="text">Contacts</h2>
        <Filter value={filter} onChange={this.chahgeFilter} />
        <ContactList
          filterContacts={filterContacts}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
export default App;
