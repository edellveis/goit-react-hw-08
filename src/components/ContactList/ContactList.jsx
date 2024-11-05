import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter, selectContacts } from "/src/redux/useSelect.js";
import { selectFilteredContacts } from "../../redux/contactSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={style.contactWaper}>
      <h3>ContactList</h3>
      <ul className={style.conatactList}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        ))}
      </ul>
    </div>
  );
}
