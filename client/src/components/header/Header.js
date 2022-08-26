import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../../helpers/auth';
import { withRouter } from '../../helpers/withRouter';
import { FaHome, FaUserLock, FaUserPlus } from 'react-icons/fa';
import { GoDashboard } from 'react-icons/go';
import { MdLogout } from 'react-icons/md';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    logout(() => {
      navigate('/signin');
    });
  };

  // views
  const showNavigation = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isAuthenticated() && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-1"
                      to="/"
                    >
                      <FaHome size={15} />
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-1"
                      to="/signup"
                    >
                      <FaUserPlus size={15} />
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-1"
                      to="/signin"
                    >
                      <FaUserLock size={15} />
                      Sign In
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && isAuthenticated().role === 0 && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-1"
                      to="/user/dashboard"
                    >
                      <GoDashboard size={15} />
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && isAuthenticated().role === 1 && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link d-flex align-items-center gap-1"
                      to="/admin/dashboard"
                    >
                      <GoDashboard size={15} />
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && (
                <>
                  <li className="nav-item" onClick={handleLogout}>
                    <button className="btn btn-link text-secondary text-decoration-none px-0 d-flex align-items-center gap-1">
                      <MdLogout />
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  return <header className="header">{showNavigation()}</header>;
};
export default withRouter(Header);
