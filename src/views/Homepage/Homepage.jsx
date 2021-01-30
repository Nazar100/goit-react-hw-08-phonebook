import { useSelector } from 'react-redux';
import React from 'react';
import ContactsForm from '../../components/Form/ContactsForm';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import { Typography } from '@material-ui/core';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Homepage() {
  const contacts = useSelector(getVisibleContacts);

  const checkExistingContacts = name => {
    const isExistingContact =
      contacts &&
      !!contacts.find(contact => {
        return contact.name === name;
      });

    isExistingContact && toast(`${name} is already in your contacts`);
    return !isExistingContact;
  };

  return (
    <div className="container">
      <div>
        <Typography variant="h2" color="primary">
          Phonebook
        </Typography>
        <ContactsForm checkExistingContacts={checkExistingContacts} />
      </div>
      <div>
        <Typography variant="h2" color="primary">
          Contacts
        </Typography>
        <Filter />
        <Contacts />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default Homepage;
