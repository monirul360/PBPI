import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../Image/Logo.png";
import auth from "./../../firebas";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Nav = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const [profile, setprofile] = useState(true);
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
            {user ? (
              <img
                onClick={() => setprofile(!profile)}
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <Link to="/Login">Log In</Link>
            )}
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
      {user ? (
        <>
          <div className={`nav-profile ${profile ? "nav-profile-hide" : ""}`}>
            <div className="d-flex align-items-center bottom-border">
              <div>
                <img src={user?.photoURL} alt="" />
              </div>
              <div>
                <h4 className="mb-0">{user?.displayName}</h4>
              </div>
            </div>
            <ul>
              <li>
                <Link to="/">Profile</Link>
              </li>
              <li>
                <Link to="/">Admission</Link>
              </li>
              <li>
                <Link to="/">Notice</Link>
              </li>
              <li>
                <Link onClick={logout} to="/#">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Nav;
