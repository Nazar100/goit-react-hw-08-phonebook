import React, { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
// import contactsActions from "../../redux/actions";

import s from "./ContactsForm.module.css";

function ContactsForm({ checkExistingContacts }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    if (name === "name") {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidFrom = validateFrom();
    if (!isValidFrom) return;

    dispatch(operations.addContact(name, number));

    setNumber("");
    setName("");
  };

  const validateFrom = () => {
    if (!name || !number) {
      alert("Some input is empty");
      return false;
    }

    return checkExistingContacts(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={s.container}>
        <label>
          Enter the name
          <input type="text" value={name} name="name" onChange={handleInput} />
        </label>
        <label>
          Enter the number
          <input
            type="tel"
            value={number}
            name="number"
            onChange={handleInput}
          />
        </label>
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactsForm;
