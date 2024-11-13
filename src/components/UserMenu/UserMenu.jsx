import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


const UserMenu = () => {
  const isName = useSelector(selectUserName);
  const dispatch = useDispatch()
  const handleLogout = () => {

   dispatch(logout())
  }
  return (
  <>
      <span>Welcome, {isName}!</span>
      <button onClick={handleLogout} type="button">Exit</button>
      </>
  )
};

export default UserMenu;