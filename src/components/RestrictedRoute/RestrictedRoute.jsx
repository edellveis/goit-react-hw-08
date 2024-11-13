import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ component, redirectTo = '/'}) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;