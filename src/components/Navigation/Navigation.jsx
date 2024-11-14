import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../redux/auth/selectors';
import clsx from 'clsx';
import style from './Navigation.module.css'

const Navigation = () => {
    const isLoggedIn = useSelector(selectisLoggedIn);
    const buildCssClasses = ({ isActive }) => clsx(style.link, isActive && style.active);
    return (
        
        <>
                    <li>
                        <NavLink to="/" className={buildCssClasses}>Home</NavLink>
                    </li>
                    {isLoggedIn && (
                        <li>
                            <NavLink to="/contacts" className={buildCssClasses}>Contacts</NavLink>
                        </li>
                    )}
             </>
    );
};

export default Navigation;