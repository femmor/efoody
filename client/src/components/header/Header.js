import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../helpers/auth';
import { withRouter } from '../../helpers/withRouter';

const Header = () => {
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
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signin">
                      Sign In
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && isAuthenticated().role === 0 && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user/dashboard">
                      User Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && isAuthenticated().role === 1 && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/dashboard">
                      Admin Dashboard
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Logout
                    </Link>
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
