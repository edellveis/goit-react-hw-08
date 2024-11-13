import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList'
import style from './Contacts.module.css'

export default function Contacts() {
    

    return (
    <div className={style.container}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        </div>
        )  
}
