import operations from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/selectors';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const classes = useStyles();

  const logOut = () => {
    dispatch(operations.logOut());
  };

  return (
    <>
      <h1>Welcome, {name} !</h1>

      <Button
        variant="outlined"
        className={classes.navBtns}
        onClick={logOut}
        color="primary"
      >
        Log out
      </Button>
    </>
  );
};

export default UserMenu;
