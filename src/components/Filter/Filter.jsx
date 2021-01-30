import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/selectors';
import { changeFilter } from '../../redux/contacts/actions';
import TextField from '@material-ui/core/TextField';

import './styles.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      <TextField
        className="filter"
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        type="text"
        value={value}
        onChange={e => {
          return dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
}
