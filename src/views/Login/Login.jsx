import { useState } from 'react';
import operations from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles.css';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;
    switch (name) {
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
    dispatch(operations.logIn({ email, password }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Typography color="primary" variant="h4">
        Login
      </Typography>
      <label>
        <TextField
          className="input"
          type="text"
          required
          name="email"
          value={email}
          onChange={handleInput}
          id="outlined-basic"
          label="Email"
        />
      </label>
      <label>
        <TextField
          className="input"
          type="text"
          name="password"
          value={password}
          onChange={handleInput}
          id="outlined-basic"
          required
          label="Password"
        />
      </label>
      <Button
        variant="outlined"
        color="primary"
        type="submit"
        className="button"
      >
        Login
      </Button>
      <Typography color="primary" variant="h6">
        Are you not registrated yet? Go
        <Link to="register"> Here</Link> to create account
      </Typography>
    </form>
  );
};

export default Login;
