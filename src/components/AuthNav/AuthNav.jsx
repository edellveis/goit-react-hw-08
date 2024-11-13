
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Reger</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;