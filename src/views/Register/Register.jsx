import { useState } from 'react';
import operations from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import '../styles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.log('l');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Typography color="primary" variant="h4">
        Registration
      </Typography>

      <label>
        <TextField
          required
          className="input"
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          label="Name"
        />
      </label>
      <label>
        <TextField
          required
          className="input"
          type="text"
          name="email"
          value={email}
          onChange={handleInput}
          label="Email"
        />
      </label>
      <label>
        <TextField
          required
          className="input"
          type="text"
          name="password"
          value={password}
          onChange={handleInput}
          label="Password"
        />
      </label>
      <Button
        className="button"
        type="submit"
        variant="outlined"
        color="primary"
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
