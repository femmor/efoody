import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

const UserRoutes = () => {
  let isAuth = isAuthenticated() && isAuthenticated().role === 0;

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};
export default UserRoutes;
