import { useEffect } from "react";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";

export default function ContactList() {
  const dispatch = useDispatch()
  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(()=>{
    dispatch(fetchContacts())
  },[dispatch])
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
