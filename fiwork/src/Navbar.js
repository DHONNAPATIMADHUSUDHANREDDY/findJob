import React, { useEffect, useState } from "react";
import JobProvider from "./JobProvider";
import JobNeeded from "./JobNeeded";
import Signin from "./Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Navbar() {
  const [username, setusername] = useState("");

  const User = () => {
    fetch("http://localhost:8080/log/currentUser")
      .then((res) => res.text())
      .then((result) => {
        setusername(result);
      });
  };
  useEffect(() => {
    User();
  }, []);
  console.log("username is: " + username);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Find Work
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/JobNeeded">
                  JobNeeded
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/JobProvider">
                  JobProvider
                </Link>
              </li>

              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link" to="/Signin">
                    Sign In
                  </Link>
                </li>
              </ul>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <p>User Name : </p>
                      {username}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
