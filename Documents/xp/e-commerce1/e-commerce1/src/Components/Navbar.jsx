import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 " to="/">
            Shoes Selector
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto ">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" aria-current="page">
                  Home
                  {/* <span className="sr-only">(current)</span> */}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in me-2 ">Login</i>
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark me-1 ">
                <i className="fa fa-user-plus me-2">Register</i>
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-2">
                  Cart ({state.length})
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
