import { useState } from 'react';
import { Link } from 'react-router-dom';
import signUp from '../../images/signup.png';

import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    successMessage: false,
    errorMessage: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMessage,
    errorMessage,
    loading,
  } = formData;

  const handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  const showSignUpForm = () => (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <img className="signup-img" src={signUp} alt="Signup" />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-light"
            onSubmit={handleSubmit}
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
      </div>
    </div>
  );

  return <div className="signup-container">{showSignUpForm()}</div>;
};
export default SignUp;
