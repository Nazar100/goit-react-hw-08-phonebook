import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import operations from '../../redux/contacts/operations';
import { getVisibleContacts } from '../../redux/contacts/selectors';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import './styles.css';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);

  const deleteContact = id => dispatch(operations.deleteContact(id));

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <ul className="list">
      <div className="contacts">
        {contacts &&
          contacts.length > 0 &&
          contacts.map(({ name, number, id }) => {
            return (
              <li key={id} className="item">
                <div className="text">
                  <span className="name">Name: {name}</span>
                  <span className="number">Number: {number}</span>
                </div>
                <Button
                  className="delete-btn"
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  data-key={id}
                  onClick={() => {
                    return deleteContact(id);
                  }}
                >
                  Delete
                </Button>
              </li>
            );
          })}
        {contacts && contacts.length === 0 && (
          <li className="item ">List is Empty</li>
        )}
      </div>
    </ul>
  );
}
