import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';
import { Loader } from '../../components/index';
import { showErrorMsg } from '../../helpers/message';

const SignIn = () => {
  const emailRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  const [formData, setFormData] = useState({
    email: 'fegomson@gmail.com',
    password: '123456',
    errorMsg: false,
    loading: false,
    redirectToDashboard: false,
  });

  const { email, password, errorMsg, redirectToDashboard, loading } = formData;

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  const showSignInForm = () => (
    <div>
      <div className="col-md-10 mx-auto col-lg-6">
        <form
          className="p-4 p-md-5 border rounded-3 bg-light"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="text-center text-primary mb-4">Sign In</h2>
          <div className="form-floating mb-3">
            {/* email */}
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fa fa-envelope"></i>
              </span>
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={handleInputChange}
                ref={emailRef}
              />
            </div>

            {/* password */}
            <div className="form-floating mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  name="password"
                  value={password}
                  type="password"
                  className="form-control"
                  placeholder="Create Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* signup button */}
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign In
          </button>

          {/* Already have an account */}
          <hr className="my-4" />
          <div className="text-center">
            <small className="text-muted">
              <span className="me-1">Don't have an account?</span>
              <Link to="/signup" className="signin-link">
                <b>Register</b>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        {errorMsg && showErrorMsg(errorMsg, toggleAlert)}
        {loading && <Loader />}
        {showSignInForm()}
      </div>
    </div>
  );
};
export default SignIn;
