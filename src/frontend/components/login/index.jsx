/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fb_icon, google_icon, ios_icon, logo } from "../imagepath";
const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">
        <div className="content">
          {/* Login Content */}
          <div className="account-content">
            <div className="align-items-center justify-content-center">
              <div className="login-right">
                <div className="login-header text-center">
                  <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                  <h3>Welcome! Nice to see you again</h3>
                </div>
                <form action="/dashboard">
                  <div className="input-block">
                    <label className="focus-label">Email Address <span className="label-star"> *</span></label>
                    <input type="text" className="form-control floating" />
                  </div>
                  <div className="input-block">
                    <label className="">Password <span className="label-star"> *</span></label>
                    <div className="position-relative">
                      <input
                        type={passwordVisible ? 'text' : 'password'}
                        className="form-control floating pass-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="password-icon" onClick={togglePasswordVisibility}>
                        <span className={`fas toggle-password ${passwordVisible ? 'fa-eye' : 'fa-eye-slash'}`} />
                      </div>
                    </div>
                  </div>
                  <Link to="/dashboard" className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">
                    Login Now
                    <i className="feather-arrow-right ms-2" />
                  </Link>
                  <div className="login-or">
                    <p><span>OR</span></p>
                  </div>
                  <div className="row social-login">
                    <div className="col-sm-4">
                      <Link to="#" className="btn btn-block"><img src={google_icon} alt="Google" />Google</Link>
                    </div>
                    <div className="col-sm-4">
                      <Link to="#" className="btn btn-block"><img src={fb_icon} alt="Fb" />Facebook</Link>
                    </div>
                    <div className="col-sm-4">
                      <Link to="#" className="btn btn-block"><img src={ios_icon} alt="Apple" />Apple</Link>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-8 dont-have d-flex  align-items-center">New to Kofejob <Link to="/register" className="ms-2">Signup?</Link></div>
                    <div className="col-sm-4 text-sm-end">
                      <Link className="forgot-link" to="/forgot-password">Lost Password?</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* /Login Content */}
        </div>
      </div>

      {/* /Page Content */}
    </>
  )
}
export default Login;