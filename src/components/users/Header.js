import React from "react";
import { NavLink } from "react-router-dom";
import "./../Styles/Header&Footer.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import {AiOutlineLogout} from "react-icons/ai";

const Header = () => {
  const id = localStorage.getItem("UserId");
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const onClickLogout = () => {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Email");
    window.location.href = "/";
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo d-flex">
            e-Medicines <FaHandHoldingMedical />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/products"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Products
              </NavLink>
            </li>

            {id ? (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/mycart"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Cart
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/orders"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Orders
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    exact
                    to="/blog"
                    activeClassName="active"
                    className="nav-links"
                    // onClick={click ? handleClick : null}
                    onClick={onClickLogout}
                  >
                    Log Out <AiOutlineLogout />
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}

            {id ? (
              <></>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/login"
                    activeClassName="active"
                    className="nav-links"
                    onClick={click ? handleClick : null}
                  >
                    Sign Up/ Sign In
                  </NavLink>
                </li>
              </>
            )}
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li> */}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
