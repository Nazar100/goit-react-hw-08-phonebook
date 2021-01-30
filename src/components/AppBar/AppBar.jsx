import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from '../../redux/auth/selectors';
import React from 'react';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RingVolumeIcon from '@material-ui/icons/RingVolume';

export default function ButtonAppBar() {
  const classes = useStyles();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <RingVolumeIcon fontSize="large" />
          <Typography variant="h4" className={classes.title}>
            Contacts
          </Typography>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </div>
  );
}
