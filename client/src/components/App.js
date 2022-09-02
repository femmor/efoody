import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from '../redux/actions/categoriesActions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, AdminRoutes, UserRoutes } from '../components';
import {
  AdminDashboard,
  Home,
  NotFound,
  SignIn,
  SignUp,
  UserDashboard,
} from '../pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route element={<AdminRoutes />}>
            <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route element={<UserRoutes />}>
            <Route exact path="/user/dashboard" element={<UserDashboard />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
