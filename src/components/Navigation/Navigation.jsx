
import { Link } from 'react-router-dom';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../redux/auth/selectors';


const Navigation = () => {
    const isLoggedIn = useSelector(selectisLoggedIn)
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to='/contacts'>contacts</Link>
          </li>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <AuthNav />
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;