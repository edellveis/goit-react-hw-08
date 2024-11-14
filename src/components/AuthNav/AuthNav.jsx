import { Link, useMatch } from 'react-router-dom';
import style from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const loginMatch = useMatch("/login");
  const registerMatch = useMatch("/register");

  const buildCssClasses = (isActive) => clsx(style.link, isActive && style.active);

  return (
    <>
      <li>
        <Link to="/login" className={buildCssClasses(loginMatch)}>Login</Link>
      </li>
      <li>
        <Link to="/register" className={buildCssClasses(registerMatch)}>Register</Link>
      </li>
    </>
  );
};

export default AuthNav;