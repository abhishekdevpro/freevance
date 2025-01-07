import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { fb_icon, google_icon, ios_icon, logo } from "../imagepath";
const Register = () => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [password1, setPassword1] = useState('');

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });
  return (
    <>
      {/* Page Content */}
      <div className="login-wrapper">
        <div className="content w-100">
          {/* Login Content */}
          <div className="account-content">
            <div className="align-items-center justify-content-center">
              <div className="login-right">
                <div className="login-header text-center">
                  <Link to="/"><img src={logo} alt="logo" className="img-fluid" /></Link>
                  <h3>We love to see you joining our community</h3>
                </div>
                <nav className="user-tabs mb-4">
                  <ul role="tablist" className="nav nav-pills nav-justified">
                    <li className="nav-item">
                      <Link to="#developer" data-bs-toggle="tab" className="nav-link active">Freelancer</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="#company" data-bs-toggle="tab" className="nav-link">Company</Link>
                    </li>
                  </ul>
                </nav>
                <div className="tab-content pt-0">
                  <div role="tabpanel" id="developer" className="tab-pane fade active show">
                    <form action="/onboard-screen">
                      <div className="input-block ">
                        <label className="focus-label">User Name <span className="label-star"> *</span></label>
                        <input type="email" className="form-control floating" />
                      </div>
                      <div className="input-block ">
                        <label className="focus-label">Email Address<span className="label-star"> *</span></label>
                        <input type="email" className="form-control floating" />
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
                      <div className="input-block mb-0">
                        <label className="">Confirm Password <span className="label-star"> *</span></label>
                        <div className="position-relative">
                          <input
                            type={passwordVisible1 ? 'text' : 'password'}
                            className="form-control floating pass-input"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                          />
                          <div className="password-icon" onClick={togglePasswordVisibility1}>
                            <span className={`fas toggle-password ${passwordVisible1 ? 'fa-eye' : 'fa-eye-slash'}`} />
                          </div>
                        </div>
                      </div>
                      <div className="dont-have">
                        <label className="custom_check">
                          <input type="checkbox" name="rem_password" />
                          <span className="checkmark" /> I have read and agree to all <Link to="/privacy-policy">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                      <Link to="/onboard-screen" className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center">Sign In Now<i className="feather-arrow-right ms-2" /></Link>
                      <div className="login-or">
                        <p><span>Or</span></p>
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
                        <div className="col-sm-8 dont-have d-flex  align-items-center">Already have account  <Link to="/login" className="ms-2">Sign in?</Link></div>
                      </div>
                    </form>
                  </div>
                  <div role="tabpanel" id="company" className="tab-pane fade">
                    <form action="/onboard-screen">
                      <div className="input-block ">
                        <label className="focus-label">User Name <span className="label-star"> *</span></label>
                        <input type="email" className="form-control floating" />
                      </div>
                      <div className="input-block ">
                        <label className="focus-label">Email Address<span className="label-star"> *</span></label>
                        <input type="email" className="form-control floating" />
                      </div>
                      <div className="input-block ">
                        <label className="focus-label">Password <span className="label-star"> *</span></label>
                        <div className="position-relative">
                          <input type="password" className="form-control floating pass-input" />
                          <div className="password-icon ">
                            <span className="fas toggle-password fa-eye-slash" />
                          </div>
                        </div>
                      </div>
                      <div className="input-block  mb-0">
                        <label className="focus-label">Confirm Password <span className="label-star"> *</span></label>
                        <div className="position-relative">
                          <input type="password" className="form-control floating pass-inputs" />
                          <div className="password-icons">
                            <span className="fas toggle-passwords fa-eye-slash" />
                          </div>
                        </div>
                      </div>
                      <div className="dont-have">
                        <label className="custom_check">
                          <input type="checkbox" name="rem_password" />
                          <span className="checkmark" /> I have read and agree to all <Link to="/privacy-policy">Terms &amp; Conditions</Link>
                        </label>
                      </div>
                      <button className="btn btn-primary w-100 btn-lg login-btn d-flex align-items-center justify-content-center" type="submit">Sign In Now<i className="feather-arrow-right ms-2" /></button>
                      <div className="login-or">
                        <p><span>Or</span></p>
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
                        <div className="col-sm-8 dont-have d-flex  align-items-center">Already have account  <Link to="/login" className="ms-2">Sign in?</Link></div>
                      </div>
                    </form>
                  </div>
                </div>
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
export default Register;