import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component, redirectTo = '/login',}) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;