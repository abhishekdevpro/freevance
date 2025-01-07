import React, { useEffect, useState } from "react";
import StickyBox from "react-sticky-box";
import { Img_02 } from "../../imagepath";
import { Sidebar } from "../sidebar";
import Select from "react-select";
const Settings = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  const options = [
    { value: 1, label: "Select" },
    { value: 2, label: "UK" },
    { value: 3, label: "USA" },
  ];
  return (
    <>
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-lg-8">
              <div className="pro-pos">
                <div className="setting-content employee-profile-new">
                  <form>
                    <div className="card">
                      <div className="pro-head">
                        <h3>Profile Setting</h3>
                      </div>
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Personal Information</h4>
                                <label className="form-label">
                                  Profile Picture
                                </label>
                                <div className="d-flex align-items-center">
                                  <div className="upload-images">
                                    <img src={Img_02} alt="Image" id="blah" />
                                  </div>
                                  <div className="ms-3">
                                    <label className="file-upload image-upbtn ms-0">
                                      Upload Image{" "}
                                      <input type="file" id="imgInp" />
                                    </label>
                                    <p>Max Image size 300*300</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Phone Number</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Email Address
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Address</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Country</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">State</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">City</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Zipcode</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Details</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Company Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Tagline</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Established On
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Company Owner Name
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Industry</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Website</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="input-block">
                              <label className="form-label">Team Size</label>
                              <div className="check-radio">
                                <ul className="d-flex flex-wrap">
                                  <li>
                                    <label className="custom_radio me-4">
                                      <input
                                        type="radio"
                                        name="budget"
                                        defaultValue="Yes"
                                        defaultChecked
                                      />
                                      <span className="checkmark" /> It&apos;s
                                      just me
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_radio me-4">
                                      <input type="radio" name="budget" />
                                      <span className="checkmark" />
                                      2-9 employees
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_radio me-4">
                                      <input type="radio" name="budget" />
                                      <span className="checkmark" />
                                      10-99 employees
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_radio me-4">
                                      <input type="radio" name="budget" />
                                      <span className="checkmark" />
                                      100-1000 employees
                                    </label>
                                  </li>
                                  <li>
                                    <label className="custom_radio me-4">
                                      <input type="radio" name="budget" />
                                      <span className="checkmark" />
                                      More than 1000 employees
                                    </label>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <label className="form-label">About</label>
                            <textarea
                              rows={4}
                              className="form-control"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <h4 className="mb-3">Working Hours</h4>
                      </div>
                      <div className="col-md-6">
                        <div className="input-block d-flex">
                          <div className="form-check form-switch d-inline-block work-check position-relative">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="check_hour"
                              defaultChecked="true"
                              onClick={() => setIsShow(!isShow)}
                            />
                          </div>
                          <label className="form-label ms-2">
                            Same Every Day
                          </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div
                          className="checkout-hour"
                          style={{ display: isShow ? "none" : "block" }}
                        >
                          <div className="other-info-list">
                            <ul>
                              <li className="active-hour">Mon</li>
                              <li className="active-hour">Tue</li>
                              <li className="active-hour">Wed</li>
                              <li className="active-hour">Thr</li>
                              <li className="active-hour">Fri</li>
                              <li>Sat</li>
                              <li>Sun</li>
                            </ul>
                          </div>
                        </div>
                        <div
                          className="check-hour"
                          style={{ display: isShow ? "block" : "none" }}
                        >
                          <div className="col-md-12">
                            <h4>Select Days</h4>
                          </div>
                          <div className="row">
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="active-hour m-0">Mon</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="active-hour m-0">Tue</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="active-hour m-0">Wed</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="active-hour m-0">Thur</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="active-hour m-0">Fri</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="m-0">Fri</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row align-items-center">
                                <div className="col-md-1">
                                  <div className="other-info-list">
                                    <ul>
                                      <li className="m-0">Sun</li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      Start Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="8:00"
                                    />
                                  </div>
                                </div>
                                <div className="col-md-5">
                                  <div className="input-block">
                                    <label className="form-label">
                                      End Time
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue="20:00"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Social Media</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mb-3">
                              <label className="form-label">Facebook</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="mb-3">
                              <label className="form-label">Instagram </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">LinkedIn</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Behance</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Pinterest </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Twitter</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Location</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="mb-3">
                              <label className="form-label">Address</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">City </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                State / Province
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">
                                ZIP / Post Code{" "}
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-xl-3 col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Country</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card  border-0">
                      <div className="pro-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-row pro-pad pt-0 ps-0">
                              <div className="input-block col-md-6 pro-pic">
                                <h4 className="mb-3">Language</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Language</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label className="form-label">Fluency</label>
                              <Select
                                className="select"
                                options={options}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card text-end border-0">
                      <div className="pro-body">
                        <button className="btn btn-secondary click-btn btn-plan">
                          Cancel
                        </button>
                        <button
                          className="btn btn-primary click-btn btn-plan"
                          type="submit"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Settings;
