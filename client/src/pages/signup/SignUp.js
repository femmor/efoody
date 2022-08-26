import { useState, useRef, useEffect } from 'react';
import { isEmpty, isEmail, equals } from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import { Loader } from '../../components';
import { showErrorMsg, showSuccessMsg } from '../../helpers/message';
import { signup } from '../../api/auth';

import './SignUp.css';
import { isAuthenticated } from '../../helpers/auth';

const SignUp = () => {
  const usernameRef = useRef(null);
  const [showAlert, setShowAlert] = useState(false);

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: 'fegomson',
    email: 'fegomson@gmail.com',
    password: '123456',
    password2: '123456',
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setFormData({
      ...formData,
      loading: false,
    });

    // client-side validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: 'All fields are required',
      });
      setShowAlert(true);
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: 'Please enter a valid email',
      });
      setShowAlert(true);
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: 'Passwords do not match',
      });
      setShowAlert(true);
    } else {
      const { username, email, password } = formData;
      const userData = { username, email, password };
      setFormData({
        ...formData,
        loading: true,
      });
      signup(userData)
        .then(response => {
          setFormData({
            username: '',
            email: '',
            password: '',
            password2: '',
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch(error => {
          setFormData({
            loading: false,
            errorMsg: error.response.data.errorMessage,
          });
        });
      setShowAlert(true);
    }
  };

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      navigate('/admin/dashboard');
    } else if (isAuthenticated() && isAuthenticated().role === 0) {
      navigate('/user/dashboard');
    }
  }, [navigate]);

  const showSignUpForm = () => (
    <>
      <div className="col-md-10 mx-auto col-lg-6">
        <form
          className="p-4 p-md-5 border rounded-3 bg-light"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="text-center text-primary mb-4">Create an account</h2>
          <div className="form-floating mb-3">
            {/* username */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="fa fa-user"></i>
              </span>
              <input
                name="username"
                value={username}
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={handleInputChange}
                ref={usernameRef}
              />
            </div>
          </div>
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

            {/* confirm password */}
            <div className="form-floating mb-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
                <input
                  name="password2"
                  value={password2}
                  type="password"
                  className="form-control"
                  placeholder="Confirm Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* signup button */}
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Create Account
          </button>

          {/* Already have an account */}
          <hr className="my-4" />
          <div className="text-center">
            <small className="text-muted">
              <span className="me-1">Have an account?</span>
              <Link to="/signin" className="signup-link">
                <b>Sign in</b>
              </Link>
            </small>
          </div>
        </form>
      </div>
    </>
  );

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        {errorMsg && showErrorMsg(errorMsg, toggleAlert)}
        {successMsg && showSuccessMsg(successMsg, toggleAlert)}
        {loading && <Loader />}
        {showSignUpForm()}
      </div>
    </div>
  );
};
export default SignUp;
