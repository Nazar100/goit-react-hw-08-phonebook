import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/operations";
import { getVisibleContacts } from "../../redux/selectors";

import s from "./Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const deleteContact = (id) => dispatch(operations.deleteContact(id));

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <ul>
      {contacts &&
        contacts.length > 0 &&
        contacts.map(({ name, number, id }) => {
          return (
            <li key={id}>
              <span className={s.name}>Name: {name}</span>
              <span className={s.number}>Number: {number}</span>
              <button
                className={s.button}
                data-key={id}
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      {contacts && contacts.length === 0 && (
        <li className={s.empty}>List is Empty</li>
      )}
    </ul>
  );
}
