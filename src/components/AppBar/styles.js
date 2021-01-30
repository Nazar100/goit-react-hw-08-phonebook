import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: 20,
    flexGrow: 1,
    margin: 10,
    fontSize: 30,
  },
  navBtns: {
    color: 'white',
    fontWeight: 700,
    fontSize: 20,
    backgroundColor: 'rgba(137, 196, 244, 0.3)',
    marginLeft: 15,
  },
  active: {
    color: 'rgba(153, 255, 235,0.8)',
    fontStyle: 'none',
    backgroundColor: 'rgba(137, 196, 244, 0.7)',
  },
}));
