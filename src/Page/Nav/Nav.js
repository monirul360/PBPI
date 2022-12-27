import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../Image/Logo.png";
const Nav = () => {
  return (
    <div>
      <section className="top-section">
        <div className="link">
          <Link to="#">
            <i className="fa fa-home"></i>
          </Link>
          <Link to="#">About</Link>
          <Link to="#">Blog</Link>
        </div>
        <div className="socail">
          <Link to="#">
            <i className="fa fa-facebook"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-youtube"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fa fa-search"></i>
          </Link>
        </div>
      </section>
      <section>
        <nav>
          <div>
            <img src={logo} alt="" />
          </div>
          <div className="items">
            <Link to="/">Home</Link>
            <Link to="/">Events</Link>
            <Link to="/">Department</Link>
            <Link to="/">Result</Link>
            <Link to="/">Admission</Link>
            <Link to="/">Login</Link>
          </div>
          <div class="dropdown smail-nav">
            <button
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div></div>
              <div></div>
              <div></div>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link class="dropdown-item" to="#">
                  Events
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="#">
                  Department
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="#">
                  Result
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="#">
                  Admission
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Nav;
