// src/App.jsx
import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import style from "./App.module.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  deleteContact,
  selectContacts,
} from "./redux/contactSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";

export default function App() {
  const dispatch = useDispatch();
  const dataContact = useSelector(selectContacts) || [];
  const filter = useSelector(selectNameFilter);

  const handleSubmit = (values, action) => {
    const newContact = { id: nanoid(), ...values };
    dispatch(addContact(newContact));
    action.resetForm();
  };

  const onDelete = (idcontact) => {
    dispatch(deleteContact(idcontact));
  };

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.toLowerCase()));
  };

  const filterContact = dataContact.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox filter={filter} setFilter={handleFilterChange} />
      <ContactList filterContact={filterContact} onDelete={onDelete} />
    </div>
  );
}
