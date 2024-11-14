import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav'; 
import UserMenu from '../UserMenu/UserMenu'; 
import { selectisLoggedIn } from '../../redux/auth/selectors';

const AppBar = () => {

  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <header>
      <nav>   
        <ul> <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}</ul>   
       
      </nav>

    </header>
  );
};

export default AppBar;