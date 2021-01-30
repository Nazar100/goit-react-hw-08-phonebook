import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const AuthNav = () => {
  const classes = useStyles();
  return (
    <ul>
      <Button
        to="/register"
        activeClassName={classes.active}
        className={classes.navBtns}
        component={NavLink}
      >
        Register
      </Button>
      <Button
        to="/login"
        activeClassName={classes.active}
        className={classes.navBtns}
        component={NavLink}
      >
        Login
      </Button>
    </ul>
  );
};
export default AuthNav;
