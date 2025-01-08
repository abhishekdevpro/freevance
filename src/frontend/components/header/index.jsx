import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Avatar_1,
  Logo_img,
  messagechat,
  notificationbell,
  avatar2,
  avatar3,
  avatar4,
  users,
  lock,
} from "../imagepath";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");

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

  // eslint-disable-next-line react/prop-types
  const pathname = props.location.pathname.split("/")[1];

  const location = useLocation();
  console.log(location.pathname, "location");

  // const exclusionArray = [
  //   "/onboard-screen",
  //   "/onboard-screen-employer"
  // ];

  // if (exclusionArray.indexOf(props.location.pathname) >= 0) {
  //   return "";
  // }
  // console.log(props.location, "location")

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
  const Reload = () => {
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
      {/* eslint-disable-next-line react/prop-types */}
      {!location.pathname.includes("onboard-screen") &&
        !location.pathname.includes("onboard-screen-employer") &&
        !location.pathname.includes("/index-two") &&
        !location.pathname.includes("/index-three") &&
        !location.pathname.includes("/index-four") &&
        !location.pathname.includes("/index-five") && (
          <header className={`header ${navbar ? "sticky" : ""} `}>
            <div className="container">
              <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                  <Link
                    id="mobile_btn"
                    to="#"
                    onClick={() => onHandleMobileMenu()}
                  >
                    <span className="bar-icon">
                      <span />
                      <span />
                      <span />
                    </span>
                  </Link>
                  <Link to="/index" className="navbar-brand logo">
                    <img src={Logo_img} className="img-fluid" alt="Logo" />
                  </Link>
                </div>
                <div className="main-menu-wrapper">
                  <div className="menu-header">
                    <Link to="/" className="menu-logo">
                      <img src={Logo_img} className="img-fluid" alt="Logo" />
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
                  <ul className="main-nav">
                    <li
                      className={` has-submenu ${
                        location.pathname == "/" ||
                        pathname.includes("index-two") ||
                        pathname.includes("index-three") ||
                        pathname.includes("index-four") ||
                        pathname.includes("index-five")
                          ? "active"
                          : ""
                      }`}
                      onClick={Reload}
                    >
                      <Link
                        to="#"
                        className={`hoverdrop ${
                          isSideMenu === "home" ? "subdrop" : ""
                        }`}
                        onClick={() =>
                          toggleSidebar(isSideMenu === "home" ? "" : "home")
                        }
                        onMouseEnter={() => setSideMenu("home")}
                      >
                        Home{" "}
                        <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                      </Link>
                      {isSideMenu === "home" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "home" ? "block" : "none",
                          }}
                        >
                          <li className="active">
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/index-two">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/index-three">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/index-four">Home 4</Link>
                          </li>
                          <li>
                            <Link to="/index-five">Home 5</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>

                    <li
                      className={`has-submenu ${
                        pathname === "developer" ||
                        pathname === "company-profile" ||
                        pathname === "developer-details" ||
                        pathname === "company-project" ||
                        pathname === "company-gallery" ||
                        pathname === "company-review" ||
                        pathname === "company-details" ||
                        pathname === "dashboard" ||
                        pathname === "manage-projects" ||
                        pathname === "favourites" ||
                        pathname === "invited-freelancer" ||
                        pathname === "membership-plans" ||
                        pathname === "milestones" ||
                        pathname === "chats" ||
                        pathname === "review" ||
                        pathname === "deposit-funds" ||
                        pathname === "withdraw-money" ||
                        pathname === "transaction-history" ||
                        pathname === "verify-identity" ||
                        pathname === "profile-settings" ||
                        pathname === "tasks" ||
                        pathname === "files" ||
                        pathname === "view-project-detail" ||
                        pathname === "project-payment"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className={
                          isSideMenu === "foremployers" ? "subdrop" : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu === "foremployers" ? "" : "foremployers"
                          )
                        }
                        onMouseEnter={() => setSideMenu("foremployers")}
                      >
                        {" "}
                        For Employers
                        <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                      </Link>
                      {isSideMenu === "foremployers" ? (
                        <ul
                          className="submenu"
                          style={{
                            display:
                              isSideMenu === "foremployers" ? "block" : "none",
                          }}
                        >
                          <li
                            className={`has-submenu ${
                              pathname === "developer" ||
                              pathname === "developer-details"
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link
                              to="#"
                              onClick={() =>
                                toggleSidebar1(
                                  isSideMenu1 === "freelancer"
                                    ? ""
                                    : "freelancer"
                                )
                              }
                            >
                              Freelancer
                            </Link>
                            <ul className="submenu">
                              <li
                                className={
                                  pathname === "developer" ? "active" : ""
                                }
                                onClick={Reload}
                              >
                                <Link to="/developer">Freelancer</Link>
                              </li>
                              <li
                                className={
                                  pathname === "developer-details"
                                    ? "active"
                                    : ""
                                }
                                onClick={Reload}
                              >
                                <Link to="/developer-details">
                                  Freelancer Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className={pathname === "dashboard" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/dashboard">Dashboard</Link>
                          </li>
                          <li
                            className={
                              pathname === "company-profile" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/company-profile">My Profile</Link>
                          </li>
                          {/* <li className={pathname === "company-details" ? "active" : ""} onClick={Reload}>
                        <Link to="/company-details">Company Details</Link>
                      </li> */}
                          <li
                            className={
                              pathname === "manage-projects" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/manage-projects">Projects</Link>
                          </li>
                          <li
                            className={
                              pathname === "favourites" ||
                              pathname === "invited-freelancer"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/favourites">Favourites</Link>
                          </li>
                          <li
                            className={
                              pathname === "membership-plans" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/membership-plans">Membership</Link>
                          </li>
                          <li
                            className={
                              pathname === "view-project-detail" ||
                              pathname === "milestones" ||
                              pathname === "tasks" ||
                              pathname === "files" ||
                              pathname === "project-payment"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/milestones">Milestones</Link>
                          </li>
                          <li
                            className={pathname === "chats" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/chats">Chats</Link>
                          </li>
                          <li
                            className={pathname === "review" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/review">Review</Link>
                          </li>
                          <li
                            className={
                              pathname === "deposit-funds" ||
                              pathname === "withdraw-money" ||
                              pathname === "transaction-history"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/deposit-funds">Payments</Link>
                          </li>
                          <li
                            className={
                              pathname === "verify-identity" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/verify-identity">Verify Identity</Link>
                          </li>
                          <li
                            className={
                              pathname === "profile-settings" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/profile-settings">Settings</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li
                      className={`has-submenu ${
                        pathname === "project" ||
                        pathname === "developer-profile" ||
                        pathname === "project-details" ||
                        pathname === "freelancer-dashboard" ||
                        pathname === "freelancer-details" ||
                        pathname === "company-profile" ||
                        pathname === "freelancer-project-proposals" ||
                        pathname === "freelancer-favourites" ||
                        pathname === "freelancer-invitations" ||
                        pathname === "freelancer-membership" ||
                        pathname === "freelancer-change-password" ||
                        pathname === "freelancer-chats" ||
                        pathname === "freelancer-review" ||
                        pathname === "freelancer-completed-projects" ||
                        pathname === "freelancer-cancelled-projects" ||
                        pathname === "freelancer-withdraw-money" ||
                        pathname === "freelancer-verify-identity" ||
                        pathname === "freelancer-ongoing-projects" ||
                        pathname === "freelancer-profile-settings" ||
                        pathname === "freelancer-transaction-history" ||
                        pathname === "freelancer-project-proposals" ||
                        pathname === "freelancer-view-project-detail" ||
                        pathname === "freelancer-milestones" ||
                        pathname === "freelancer-task" ||
                        pathname === "freelancer-files" ||
                        pathname === "freelancer-payment"
                          ? "active"
                          : ""
                      }`}
                    >
                      <Link
                        to="#"
                        className={
                          isSideMenu === "forfreelancer" ? "subdrop" : ""
                        }
                        onClick={() =>
                          toggleSidebar(
                            isSideMenu === "forfreelancer"
                              ? ""
                              : "forfreelancer"
                          )
                        }
                        onMouseEnter={() => setSideMenu("forfreelancer")}
                      >
                        {" "}
                        For Freelancer{" "}
                        <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                      </Link>
                      {isSideMenu === "forfreelancer" ? (
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
                                className={
                                  pathname === "project" ? "active" : ""
                                }
                                onClick={Reload}
                              >
                                <Link to="/project">Projects</Link>
                              </li>
                              <li
                                className={
                                  pathname === "project-details" ? "active" : ""
                                }
                                onClick={Reload}
                              >
                                <Link to="/project-details">
                                  Project Details
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-dashboard"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/freelancer-dashboard">Dashboard</Link>
                          </li>
                          <li
                            className={
                              pathname === "developer-profile" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/developer-profile">My Profile</Link>
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
                            onClick={Reload}
                          >
                            <Link to="/freelancer-project-proposals">
                              Projects
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-favourites" ||
                              pathname === "freelancer-invitations"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/freelancer-favourites">Favourites</Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-membership"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/freelancer-membership">Membership</Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-change-password"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
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
                            onClick={Reload}
                          >
                            <Link to="/freelancer-review">Review</Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-portfolio"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/freelancer-portfolio">Portfolio</Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-withdraw-money" ||
                              pathname === "freelancer-transaction-history"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/freelancer-withdraw-money">
                              Payments
                            </Link>
                          </li>
                          <li
                            className={
                              pathname === "freelancer-verify-identity"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
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
                            onClick={Reload}
                          >
                            <Link to="/freelancer-profile-settings">
                              Settings
                            </Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
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
                        pathname === "view-invoice" ||
                        location.pathname == "/change-passwords"
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
                        Pages
                        <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                      </Link>
                      {isSideMenu === "pages" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "pages" ? "block" : "none",
                          }}
                        >
                          <li
                            className={pathname === "about" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/about">About us</Link>
                          </li>
                          <li
                            className={
                              pathname === "blank-page" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/blank-page">Starter Page</Link>
                          </li>
                          <li
                            className={pathname === "404-page" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/404-page">404 Page</Link>
                          </li>
                          <li
                            className={pathname === "login" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/login">Login</Link>
                          </li>
                          <li
                            className={pathname === "register" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/register">Register</Link>
                          </li>
                          <li
                            className={
                              pathname === "onboard-screen" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/onboard-screen">Onboard Screen</Link>
                          </li>
                          <li
                            className={
                              pathname === "forgot-password" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/forgot-password">Forgot Password</Link>
                          </li>
                          <li
                            className={
                              location.pathname == "/change-passwords"
                                ? "active"
                                : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/change-passwords">Change Password</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
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
                        Blog{" "}
                        <i>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </i>
                      </Link>
                      {isSideMenu === "blog" ? (
                        <ul
                          className="submenu"
                          style={{
                            display: isSideMenu === "blog" ? "block" : "none",
                          }}
                        >
                          <li
                            className={pathname === "blog-list" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/blog-list">Blog List</Link>
                          </li>
                          <li
                            className={pathname === "blog-grid" ? "active" : ""}
                            onClick={Reload}
                          >
                            <Link to="/blog-grid">Blog Grid</Link>
                          </li>
                          <li
                            className={
                              pathname === "blog-details" ? "active" : ""
                            }
                            onClick={Reload}
                          >
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                    <li>
                      <Link to="/admin/login" target="_blank">
                        Admin
                      </Link>
                    </li>
                  </ul>
                </div>
                {pathname === "user-account-details" ||
                pathname === "dashboard" ||
                pathname === "manage-projects" ||
                pathname === "pending-projects" ||
                pathname === "ongoing-projects" ||
                pathname === "completed-projects" ||
                pathname === "cancelled-projects" ||
                pathname === "favourites" ||
                pathname === "invited-favourites" ||
                pathname === "favourites-list" ||
                pathname === "membership-plans" ||
                pathname === "review" ||
                pathname === "deposit-funds" ||
                pathname === "profile-settings" ||
                pathname === "change-password" ||
                pathname === "delete-account" ||
                pathname === "milestones" ||
                pathname === "view-project-detail" ||
                pathname === "tasks" ||
                pathname === "files" ||
                pathname === "project-payment" ||
                pathname === "developer-details" ||
                pathname === "developer" ? (
                  <ul className="nav header-navbar-rht">
                    <ul className="nav header-navbar-rht reg-head">
                      <li>
                        <Link to="/register" className="reg-btn">
                          <img src={users} className="me-1" alt="img" />
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="log-btn">
                          <img src={lock} className="me-1" alt="img" /> Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/post-project" className="login-btn">
                          <i className="feather-plus me-1" />
                          Post a Project{" "}
                        </Link>
                      </li>
                    </ul>
                  </ul>
                ) : pathname === "freelancer-invoices" ||
                  pathname === "project" ||
                  pathname === "view-invoice" ||
                  pathname.includes("freelancer-") ? (
                  <ul className="nav header-navbar-rht">
                    <li>
                      <Link to="/freelancer-chats">
                        <img src={messagechat} alt="Img" />
                      </Link>
                    </li>
                    <li className="dropdown">
                      <Link data-bs-toggle="dropdown" to="javascript:void(0);">
                        <img src={notificationbell} alt="Img" />
                      </Link>
                      <div className="dropdown-menu notifications">
                        <div className="topnav-dropdown-header">
                          <div className="notification-title">
                            Notifications
                            <span className="msg-count-badge">2</span>
                          </div>
                          <Link
                            to="javascript:void(0)"
                            className="clear-noti d-flex align-items-center"
                          >
                            Mark all as read{" "}
                            <i className="fe fe-check-circle" />
                          </Link>
                        </div>
                        <div className="noti-content">
                          <ul className="notification-list">
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md active">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar2}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Edward Curr
                                    </span>
                                    <p className="noti-details">
                                      Notifications inform you when someone
                                      likes, reacts
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Yesterday at 11:42 PM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md active">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar4}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Maria Hill
                                    </span>
                                    <p className="noti-details">
                                      {" "}
                                      Notifications alert you to new messages in
                                      your Freevance inbox.
                                    </p>
                                    <div className="notification-btn">
                                      <span className="btn btn-primary">
                                        Accept
                                      </span>
                                      <span className="btn btn-outline-primary">
                                        Reject
                                      </span>
                                    </div>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Today at 9:42 AM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt=""
                                      src={avatar2}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Maria Hill
                                    </span>
                                    <p className="noti-details">
                                      {" "}
                                      Notifications alert you to new messages in
                                      your Freevance inbox.
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Yesterday at 5:42 PM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li className="notification-message">
                              <Link to="/freelancer-chats">
                                <div className="d-flex">
                                  <span className="avatar avatar-md">
                                    <img
                                      className="avatar-img rounded-circle"
                                      alt="avatar-img"
                                      src={avatar3}
                                    />
                                  </span>
                                  <div className="media-body">
                                    <span className="noti-title">
                                      Edward Curr
                                    </span>
                                    <p className="noti-details">
                                      Notifications inform you when someone
                                      likes, reacts
                                    </p>
                                    <p className="noti-time">
                                      <span className="notification-time">
                                        Last Wednesday at 11:15 AM
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="topnav-dropdown-footer text-center">
                          <Link to="/freelancer-chats">
                            View All Notification
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li className={pathname === "post-project" ? "active" : ""}>
                      <Link to="/post-project" className="login-btn">
                        Post a Project{" "}
                      </Link>
                    </li>
                    <li className="nav-item dropdown has-arrow account-item">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span className="user-img">
                          <img src={Avatar_1} alt="" />
                        </span>
                        <span>Bruce Bush</span>
                      </Link>
                      <div className="dropdown-menu emp">
                        <div className="drop-head">Account Details</div>
                        <Link
                          className="dropdown-item"
                          to="/user-account-details"
                        >
                          <i className="material-icons">verified_user</i> View
                          profile
                        </Link>
                        <div className="drop-head">Projects Settings</div>
                        <Link className="dropdown-item" to="/manage-projects">
                          <i className="material-icons">business_center</i>{" "}
                          Projects
                        </Link>
                        <Link className="dropdown-item" to="/favourites">
                          <i className="material-icons">local_play</i>{" "}
                          Favourites
                        </Link>
                        <Link className="dropdown-item" to="/review">
                          <i className="material-icons">pie_chart</i> Reviews
                        </Link>
                        <div className="drop-head">Account Details</div>
                        <Link className="dropdown-item" to="/profile-settings">
                          {" "}
                          <i className="material-icons">settings</i> Profile
                          Settings
                        </Link>
                        <Link className="dropdown-item" to="/">
                          <i className="material-icons">power_settings_new</i>{" "}
                          Logout
                        </Link>
                      </div>
                    </li>
                  </ul>
                ) : pathname === "chats" ||
                  pathname === "verify-identity" ||
                  pathname === "post-project" ? (
                  <ul className="nav header-navbar-rht">
                    <li className="nav-item dropdown has-arrow account-item">
                      <Link
                        to="#"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      >
                        <span>MY ACCOUNT</span>
                      </Link>
                      <div className="dropdown-menu emp">
                        <div className="drop-head">Account Details</div>
                        <Link
                          className="dropdown-item"
                          to="/user-account-details"
                        >
                          <i className="material-icons">verified_user</i> View
                          profile
                        </Link>
                        <div className="drop-head">Projects Settings</div>
                        <Link className="dropdown-item" to="/manage-projects">
                          <i className="material-icons">business_center</i>{" "}
                          Projects
                        </Link>
                        <Link className="dropdown-item" to="/favourites">
                          <i className="material-icons">local_play</i>{" "}
                          Favourites
                        </Link>
                        <Link className="dropdown-item" to="/review">
                          <i className="material-icons">pie_chart</i> Reviews
                        </Link>
                        <div className="drop-head">Account Details</div>
                        <Link className="dropdown-item" to="/profile-settings">
                          {" "}
                          <i className="material-icons">settings</i> Profile
                          Settings
                        </Link>
                        <Link className="dropdown-item" to="/">
                          <i className="material-icons">power_settings_new</i>{" "}
                          Logout
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link to="/post-project" className="login-btn">
                        Post a Project{" "}
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul className="nav header-navbar-rht reg-head">
                    <li className="nav-item dropdown account-item">
                      <Link
                        to="javascript:void(0);"
                        className="dropdown-toggle nav-link"
                        data-bs-toggle="dropdown"
                      ></Link>
                      <div className="dropdown-menu emp">
                        <div className="drop-head">Account Details</div>
                        <Link
                          className="dropdown-item"
                          to="/freelancer-profile"
                        >
                          <i className="material-icons">verified_user</i> View
                          profile
                        </Link>
                        <div className="drop-head">Projects Settings</div>
                        <Link
                          className="dropdown-item"
                          to="/freelancer-project-proposals"
                        >
                          <i className="material-icons">business_center</i>{" "}
                          Projects
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/freelancer-bookmarks"
                        >
                          <i className="material-icons">local_play</i> Bookmarks
                        </Link>
                        <Link className="dropdown-item" to="/freelancer-review">
                          <i className="material-icons">pie_chart</i> Reviews
                        </Link>
                        <div className="drop-head">Financial Settings</div>
                        <Link className="dropdown-item bal" to="#">
                          Balance <span className="amt">₹0.00 INR</span>
                        </Link>
                        <Link
                          className="dropdown-item"
                          to="/freelancer-withdraw-money"
                        >
                          <i className="material-icons">wifi_tethering</i>{" "}
                          Withdraw funds
                        </Link>
                        <div className="drop-head">Account Details</div>
                        <Link
                          className="dropdown-item"
                          to="/freelancer-profile-settings"
                        >
                          {" "}
                          <i className="material-icons">settings</i> Profile
                          Settings
                        </Link>
                        <Link className="dropdown-item" to="/index">
                          <i className="material-icons">power_settings_new</i>{" "}
                          Logout
                        </Link>
                      </div>
                    </li>
                    <ul className="nav header-navbar-rht reg-head">
                      <li>
                        <Link to="/register" className="reg-btn">
                          <img src={users} className="me-1" alt="img" />
                          Register
                        </Link>
                      </li>
                      <li>
                        <Link to="/login" className="log-btn">
                          <img src={lock} className="me-1" alt="img" /> Login
                        </Link>
                      </li>
                      <li>
                        <Link to="/post-project" className="login-btn">
                          <i className="feather-plus me-1" />
                          Post a Project{" "}
                        </Link>
                      </li>
                    </ul>
                  </ul>
                )}
              </nav>
            </div>
          </header>
        )}
      {/* /Header */}
    </>
  );
};

export default Header;
