
import Layout from './components/Layout/Layout';
import Home from './pages/HomePage/Home';
import RegistrationPage from './pages/RegisterPage/Register';
import LoginPage from './pages/LoginPage/LogIn';
import ContactsPage from './pages/ContactsPage/Contacts';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { apiGetCurrentUser } from './redux/auth/operations';
import { selectisRefreshing } from './redux/auth/selectors';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing)
  useEffect(() => {
    
    dispatch(apiGetCurrentUser());
  }, [dispatch]);
  if (isRefreshing) {
    return <div>Refreshing...</div>;
  }
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;