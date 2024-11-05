import { deleteContact } from "../../redux/contactsOps";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <li className={style.ContactItem}>
      <p>{name}</p>
      <p>{number}</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
