import { useState, useRef, useEffect } from 'react';
import { isEmpty, isEmail, equals } from 'validator';
import { Link } from 'react-router-dom';
import signUp from '../../images/signup.png';
import { Alert, Loader } from '../../components';
import { signup } from '../../api/auth';

import './SignUp.css';

const SignUp = () => {
  const usernameRef = useRef();

  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    username: 'fegomson',
    email: 'fegomson@gmail.com',
    password: '123456',
    password2: '123456',
    isError: false,
    successMsg: '',
    errorMsg: '',
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    isError,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const toggleAlert = () => {
    setShowAlert(!showAlert);
  };

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
    setShowAlert(false);
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
        isError: true,
        errorMsg: 'All fields are required',
      });
      toggleAlert();
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        isError: true,
        errorMsg: 'Please enter a valid email',
      });
      toggleAlert();
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        isError: true,
        errorMsg: 'Passwords do not match',
      });
      toggleAlert();
    } else {
      const { username, email, password } = formData;
      const userData = { username, email, password };
      setFormData({
        ...formData,
        loading: true,
      });
      signup(userData)
        .then(response => {
          console.log(response);
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
          setShowAlert(true);
          setFormData({
            loading: false,
            isError: true,
            errorMsg: error.response.data.errorMessage,
          });
        });
    }
  };

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, [usernameRef]);

  const showSignUpForm = () => (
    <>
      <div className="col-lg-7 text-center text-lg-start">
        <img className="signup-img" src={signUp} alt="Signup" />
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form
          className="p-4 p-md-5 border rounded-3 bg-light"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="text-center text-primary mb-4">Sign In</h2>
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
        {showAlert && (
          <Alert
            type={isError ? 'danger' : 'success'}
            title={isError ? 'Error' : 'Success'}
            msg={isError ? errorMsg : successMsg}
            onClick={toggleAlert}
          />
        )}
        {loading && <Loader />}
        {showSignUpForm()}
      </div>
    </div>
  );
};
export default SignUp;
