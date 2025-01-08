import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import {
  Flags_de,
  Flags_es,
  Flags_fr,
  Flags_us,
  // Logo_img,
} from "../imagepath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import logo from '../home/logo2.png'

// eslint-disable-next-line no-unused-vars
const HeaderTwo = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");

  const options = [
    { value: "", label: "Categories" },
    { value: "video_animation", label: "Video & Animation" },
    { value: "music_audio", label: "Music & Audio" },
    { value: "writing_translation", label: "Writing & Translation" },
    { value: "digital_marketing", label: "Digital Marketing" },
    { value: "design_creative", label: "Design & Creative" },
    { value: "development_it", label: "Development & IT" },
  ];

  const toggleSidebar = (value) => {
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    setSideMenu1(value);
  };
  const toggleSidebar2 = (value) => {
    setSideMenu2(value);
  };

  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  let pathname = window.location.pathname;

  //nav transparent

  // eslint-disable-next-line no-unused-vars
  const [click, setClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const Reload2 = () => {
    window.location.reload(false);
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      {/* Header */}
      <header className={`header header-two ${navbar ? "sticky" : ""}`}>
      {/* <div className="top-header">
          <div className="container">
            <div className="top-head-items">
              <ul className="nav user-menu">
                {/* Flag 
                <li className="nav-item dropdown has-arrow flag-nav">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                  >
                    <img
                      src={Flags_us}
                      className="me-1"
                      alt="Flag"
                      height={20}
                    />{" "}
                    <span>English</span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      <img src={Flags_us} alt="Flag" height={16} /> English
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={Flags_fr} alt="Flag" height={16} /> French
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={Flags_es} alt="Flag" height={16} /> Spanish
                    </Link>
                    <Link to="#" className="dropdown-item">
                      <img src={Flags_de} alt="Flag" height={16} /> German
                    </Link>
                  </div>
                </li>
                {/* /Flag
                <li className="nav-item dropdown has-arrow flag-nav">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    to="#"
                    role="button"
                  >
                    <span>USD</span>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link to="#" className="dropdown-item">
                      USD
                    </Link>
                    <Link to="#" className="dropdown-item">
                      French
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="top-header-links">
                <li>
                  <ul>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa-regular fa-bell" />
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/register">
                    <i className="feather feather-lock" />
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <i className="feather feather-user" />
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/admin/login" target="_blank">
                    <i className="feather feather-user" />
                    Admin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg header-nav p-0">
            <div className="navbar-header header-select">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
              <div className="input-group me-5">
                <Select
                  className="ms-4"
                  options={options}
                  placeholder="Categories"
                />
              </div>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="#"
                  onClick={() => onhandleCloseMenu()}
                >
                  <i>
                    <FontAwesomeIcon icon={faTimes} />
                  </i>
                </Link>
              </div>
              <ul className="main-nav main-two">
                <li
                  className={`active has-submenu ${
                    pathname === "index-two" ||
                    pathname === "index-three" ||
                    pathname === "index-four"
                      ? "active"
                      : ""
                  }`}
                >
                  {/* <li className={`has-submenu ${pathname.includes("index") || pathname.includes("index-two") || pathname.includes("index-three") || pathname.includes("index-four") || pathname.includes("index-five") ? "active" : ""}`}> */}
                  <Link
                    to="/find-talent"
                    // className={isSideMenu === "home" ? "subdrop" : ""}
                    // onClick={() =>
                    //   toggleSidebar(isSideMenu === "home" ? "" : "home")
                    // }
                    onMouseEnter={() => setSideMenu("home")}
                  >
                    Find Talent <i className="fas fa-chevron-down" />
                  </Link>
                 
                </li>

               
                <li
                 
                >
                  <Link
                    to="/find-work"
                    className={isSideMenu === "forfreelancer" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(
                        isSideMenu === "forfreelancer" ? "" : "forfreelancer"
                      )
                    }
                    onMouseEnter={() => setSideMenu("forfreelancer")}
                  >
                    {" "}
                    Find Work
                    <i className="fas fa-chevron-down" />
                  </Link>
                  {/* {isSideMenu === "forfreelancer" ? (
                    <ul
                      className="submenu"
                      style={{
                        display:
                          isSideMenu === "forfreelancer" ? "block" : "none",
                      }}
                    >
                      <li
                        className={`has-submenu ${
                          pathname === "project" ||
                          pathname === "project-details"
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link
                          to="#"
                          className={
                            isSideMenu2 === "projects" ? "subdrop" : ""
                          }
                          onClick={() =>
                            toggleSidebar2(
                              isSideMenu2 === "projects" ? "" : "projects"
                            )
                          }
                        >
                          Projects
                        </Link>
                        <ul className="submenu">
                          <li
                            className={pathname === "project" ? "active" : ""}
                          >
                            <Link to="/project">Projects</Link>
                          </li>
                          <li
                            className={
                              pathname === "project-details" ? "active" : ""
                            }
                          >
                            <Link to="/project-details">Project Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-dashboard" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-dashboard">Dashboard</Link>
                      </li>
                      <li>
                        <Link to="/developer-profile">My Profile</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-details" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-details">Freelancer Details</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-project-proposals" ||
                          pathname === "freelancer-ongoing-projects" ||
                          pathname === "freelancer-completed-projects" ||
                          pathname === "freelancer-cancelled-projects" ||
                          pathname === "freelancer-project-proposals" ||
                          pathname === "freelancer-view-project-detail" ||
                          pathname === "freelancer-milestones" ||
                          pathname === "freelancer-task" ||
                          pathname === "freelancer-files" ||
                          pathname === "freelancer-payment"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-project-proposals">Projects</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-favourites" ||
                          pathname === "freelancer-invitations"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-favourites">Favourites</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-membership" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-membership">Membership</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-change-password"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-change-password">
                          Change Password
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-chats" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-chats">Chats</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-review" ? "active" : ""
                        }
                      >
                        <Link to="/freelancer-review">Review</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-withdraw-money" ||
                          pathname === "freelancer-transaction-history"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-withdraw-money">Payments</Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-verify-identity"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-verify-identity">
                          Verify Identity
                        </Link>
                      </li>
                      <li
                        className={
                          pathname === "freelancer-profile-settings"
                            ? "active"
                            : ""
                        }
                      >
                        <Link to="/freelancer-profile-settings">Settings</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )} */}
                </li>
                <li
                  className={`has-submenu ${
                    pathname === "about" ||
                    pathname === "blank-page" ||
                    pathname === "404-page" ||
                    pathname === "user-account-details" ||
                    pathname === "login" ||
                    pathname === "register" ||
                    pathname === "forgot-password" ||
                    pathname === "change-password" ||
                    pathname === "freelancer-invoices" ||
                    pathname === "view-invoice"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "pages" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu === "pages" ? "" : "pages")
                    }
                    onMouseEnter={() => setSideMenu("pages")}
                  >
                    About Freevance <i className="fas fa-chevron-down" />
                  </Link>
                  {/* {isSideMenu === "pages" ? (
                    <ul
                      className="submenu"
                      style={{
                        display: isSideMenu === "pages" ? "block" : "none",
                      }}
                    >
                      <li className={pathname === "about" ? "active" : ""}>
                        <Link to="/about">About us</Link>
                      </li>
                      <li className={pathname === "blank-page" ? "active" : ""}>
                        <Link to="/blank-page">Starter Page</Link>
                      </li>
                      <li className={pathname === "404-page" ? "active" : ""}>
                        <Link to="/404-page">404 Page</Link>
                      </li>
                      <li
                        className={
                          pathname === "user-account-details" ? "active" : ""
                        }
                      >
                        <Link to="/user-account-details">User Details</Link>
                      </li>
                      <li className={pathname === "login" ? "active" : ""}>
                        <Link to="/login">Login</Link>
                      </li>
                      <li className={pathname === "register" ? "active" : ""}>
                        <Link to="/register">Register</Link>
                      </li>
                      <li
                        className={
                          pathname === "onboard-screen" ? "active" : ""
                        }
                        onClick={Reload2}
                      >
                        <Link to="/onboard-screen">Onboard Screen</Link>
                      </li>
                      <li
                        className={
                          pathname === "forgot-password" ? "active" : ""
                        }
                      >
                        <Link to="/forgot-password">Forgot Password</Link>
                      </li>
                      <li
                        className={
                          pathname === "change-password" ? "active" : ""
                        }
                      >
                        <Link to="/change-password">Change Password</Link>
                      </li>
                    </ul>
                  ) : (
                    ""
                  )} */}
                </li>
                <li
                  className={`has-submenu ${
                    pathname === "blog-list" ||
                    pathname === "blog-grid" ||
                    pathname === "blog-details"
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    to="#"
                    className={isSideMenu === "blog" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu === "blog" ? "" : "blog")
                    }
                    onMouseEnter={() => setSideMenu("blog")}
                  >
                    Resourses <i className="fas fa-chevron-down" />
                  </Link>
                  {isSideMenu === "blog" ? (
                    <ul
                      className="submenu"
                      style={{
                        display: isSideMenu === "blog" ? "block" : "none",
                      }}
                    >
                      <li className={pathname === "blog-list" ? "active" : ""}>
                        <Link to="/blog-list">For Freelancers</Link>
                      </li>
                      <li className={pathname === "blog-grid" ? "active" : ""}>
                        <Link to="/blog-grid">For Company</Link>
                      </li>
                      
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
                {/* <li>
                  <Link to="/admin/login" target="_blank">
                    Admin
                  </Link>
                </li> */}
                <li>
                
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li>
                <ul className="nav header-navbar-rht">
                  <li>
                    <Link to="/login" className="login-btn">
                      Login{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" className="login-btn">
                      Register{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* /Header */}
    </>
  );
};

export default HeaderTwo;
