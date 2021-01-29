import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { changeFilter } from "../../redux/actions";
import operations from "../../redux/operations";

import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Filter
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => {
          return dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
}
