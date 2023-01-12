/* eslint-disable react/jsx-no-duplicate-props */
import { useState } from "react";

const Navigation = () => {
  // script for hamburger menu
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <div>
      <div className="menu-btn">
        <i
          className="fas fa-bars fa-2x hamburger-menu"
          onClick={toggleClass}
        ></i>
      </div>

      <nav className="main-nav ">
        <div className="logo">
          <img src="./images/logo.png" alt="" />
        </div>
        <div className="nav-menu-center ">
          <ul className="main-menu" className={isActive ? "show" : ""}>
            <li>
              <a href="/">
                Microsoft 365 <i className="fas fa-chevron-down"></i>{" "}
              </a>
            </li>
            <li>
              <a href="/">Teams</a>
            </li>
            <li>
              <a href="/">Windows</a>
            </li>
            <li>
              <a href="/">Surface</a>
            </li>
            <li>
              {" "}
              <a href="/">Xbox</a>
            </li>
            <li>
              <a href="/">Deals</a>
            </li>
            <li>
              <a href="/">Small Business</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="nav-menu-right main-nav">
          <ul>
            <li>
              <a href="/" className="all-microsoft">
                All Microsoft <i className="fas fa-chevron-down "></i>
              </a>
            </li>

            <li>
              <a href="/">
                {" "}
                Search <i class="fa-thin fa-magnifying-glass fa"></i>
              </a>
            </li>

            <li>
              <a href="/">
                {" "}
                Cart <i class="fa-regular fa-cart-shopping fa"></i>
              </a>
            </li>
            <li>
              <a href="/">
                Sign in <i class="fa-thin fa-user-plus fa"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
