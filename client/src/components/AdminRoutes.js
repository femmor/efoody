import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth';

const AdminRoutes = () => {
  let isAuth = isAuthenticated() && isAuthenticated().role === 1;

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};
export default AdminRoutes;
