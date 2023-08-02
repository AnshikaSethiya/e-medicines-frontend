import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles/Header&Footer.css";
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const Header = () => {
  const id = localStorage.getItem("UserId");
  const type = localStorage.getItem("Type");
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const onClickLogout = () => {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Email");
    localStorage.removeItem("Type");
    window.location.href = "/";
  };

  console.log();

  return (
    // <div>
    //   <div className={click ? "main-container" : ""} onClick={() => Close()} />
    //   <nav className="navbar" onClick={(e) => e.stopPropagation()}>
    //     <div className="nav-container">
    //       <NavLink exact to="/" className="nav-logo d-flex">
    //         e-Medicines <FaHandHoldingMedical />
    //       </NavLink>

    //       {type === "Admin " ? (
    //         <ul className={click ? "nav-menu active" : "nav-menu"}>
    //           <li className="nav-item">
    //             <NavLink
    //               exact
    //               to="/admindashboard"
    //               activeClassName="active"
    //               className="nav-links"
    //               onClick={click ? handleClick : null}
    //             >
    //               Dashboard
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink
    //               exact
    //               to="/addMedicine"
    //               activeClassName="active"
    //               className="nav-links"
    //               onClick={click ? handleClick : null}
    //             >
    //               Add Product
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink
    //               exact
    //               to="/customer"
    //               activeClassName="active"
    //               className="nav-links"
    //               onClick={click ? handleClick : null}
    //             >
    //               User List
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink
    //               exact
    //               to="/orderList"
    //               activeClassName="active"
    //               className="nav-links"
    //               onClick={click ? handleClick : null}
    //             >
    //               Orders
    //             </NavLink>
    //           </li>
    //           {
    //             id ?
    //             (
    //               <li className="nav-item">
    //               <NavLink
    //                 exact
    //                 to="/blog"
    //                 activeClassName="active"
    //                 className="nav-links"
    //                 // onClick={click ? handleClick : null}
    //                 onClick={onClickLogout}
    //               >
    //                 Log Out <AiOutlineLogout />
    //               </NavLink>
    //             </li>
    //             ) : (<></>)
    //           }
    //         </ul>
    //       ) : (
    //         <ul className={click ? "nav-menu active" : "nav-menu"}>
    //           <li className="nav-item">
    //             <NavLink
    //               exact
    //               to="/products"
    //               activeClassName="active"
    //               className="nav-links"
    //               onClick={click ? handleClick : null}
    //             >
    //               Products
    //             </NavLink>
    //           </li>

    //           {id ? (
    //             <>
    //               <li className="nav-item">
    //                 <NavLink
    //                   exact
    //                   to="/mycart"
    //                   activeClassName="active"
    //                   className="nav-links"
    //                   onClick={click ? handleClick : null}
    //                 >
    //                   Cart
    //                 </NavLink>
    //               </li>

    //               <li className="nav-item">
    //                 <NavLink
    //                   exact
    //                   to="/orders"
    //                   activeClassName="active"
    //                   className="nav-links"
    //                   onClick={click ? handleClick : null}
    //                 >
    //                   Orders
    //                 </NavLink>
    //               </li>

    //               <li className="nav-item">
    //                 <NavLink
    //                   exact
    //                   to="/blog"
    //                   activeClassName="active"
    //                   className="nav-links"
    //                   // onClick={click ? handleClick : null}
    //                   onClick={onClickLogout}
    //                 >
    //                   Log Out <AiOutlineLogout />
    //                 </NavLink>
    //               </li>
    //             </>
    //           ) : (
    //             <></>
    //           )}

    //           {id ? (
    //             <></>
    //           ) : (
    //             <>
    //               <li className="nav-item">
    //                 <NavLink
    //                   exact
    //                   to="/login"
    //                   activeClassName="active"
    //                   className="nav-links"
    //                   onClick={click ? handleClick : null}
    //                 >
    //                   Sign Up/ Sign In
    //                 </NavLink>
    //               </li>
    //             </>
    //           )}
    //         </ul>
    //       )}
    //       <div className="nav-icon" onClick={handleClick}>
    //         <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <nav className="navbar navbar-expand-lg navbar-light py-3 sticky-top linear-bg">
      <div className="container">
        {/* <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> React Ecommerce</NavLink> */}
        <NavLink exact to="/" className="nav-logo d-flex">
          e-Medicines <FaHandHoldingMedical />
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            {
              id ? (<></>) : (<>
                 <li className="nav-item text-center">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
              </>)
            }
            {type === "Admin " ? (
              <>
                <li className="nav-item text-center">
                  <NavLink className="nav-link" to="/admindashboard">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item text-center">
                  <NavLink className="nav-link" to="/addMedicine">
                    Add
                  </NavLink>
                </li>

                <li className="nav-item text-center">
                  <NavLink className="nav-link" to="orderList">
                    Orders
                  </NavLink>
                </li>

                <li className="nav-item text-center">
                  <NavLink className="nav-link" to="/customer">
                    Users
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"></NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li> */}
          </ul>
          <div className=" buttons text-center">
            {id ? (
              <>
                <NavLink
                  to="/"
                  onClick={onClickLogout}
                  className="btn-hover btn btn-outline-dark m-2"
                >
                  <AiOutlineLogout />
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn-hover btn btn-outline-dark m-2"
                >
                  <i className="fa fa-sign-in-alt mr-1"></i> Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn-hover btn btn-outline-dark m-2"
                >
                  <i className="fa fa-user-plus mr-1"></i> Register
                </NavLink>
              </>
            )}
            {id && type !== "Admin " ? (
              <NavLink to="/mycart" className="btn btn-outline-dark m-2">
                <i className="fa fa-cart-shopping mr-1"></i> Cart{" "}
              </NavLink>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
