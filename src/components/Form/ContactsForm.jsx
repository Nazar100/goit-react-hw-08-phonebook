import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/contacts/operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContactsForm({ checkExistingContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isValidFrom = validateFrom();
    if (!isValidFrom) return;
    dispatch(operations.addContact({ name, number }));

    setNumber('');
    setName('');
  };

  const validateFrom = () => {
    if (!name || !number) {
      alert('Some input is empty');
      return false;
    }

    return checkExistingContacts(name);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label>
          <TextField
            className="input"
            type="text"
            value={name}
            name="name"
            onChange={handleInput}
            required
            id="outlined-basic"
            label="Enter the name"
          />
        </label>
        <label>
          <TextField
            className="input"
            type="tel"
            value={number}
            name="number"
            onChange={handleInput}
            required
            id="outlined-basic"
            label="Enter the number"
          />
        </label>
      </div>

      <Button
        type="submit"
        variant="outlined"
        color="primary"
        className="button"
      >
        Add contact
      </Button>
    </form>
  );
}

export default ContactsForm;
