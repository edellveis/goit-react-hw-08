import style from "./SeatchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/useSelect";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <div className={style.search}>
      <label>
        <span className={style.title}>Find contact by name</span>
        <input
          className={style.input}
          type="text"
          name="search"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
