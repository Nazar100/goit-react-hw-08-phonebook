import { useSelector } from "react-redux";
import React from "react";
import "./App.css";
import ContactsForm from "./components/Form/ContactsForm";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";
import { getVisibleContacts } from "./redux/selectors";

function App() {
  const contacts = useSelector(getVisibleContacts);

  const checkExistingContacts = (name) => {
    const isExistingContact =
      contacts &&
      !!contacts.find((contact) => {
        return contact.name === name;
      });

    isExistingContact && alert(`${name} is already in your contacts`);

    return !isExistingContact;
  };

  return (
    <div className="container">
      <div>
        <h1>Phonebook</h1>
        <ContactsForm checkExistingContacts={checkExistingContacts} />
        <Filter />
      </div>
      <div>
        <h2>Contacts</h2>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
