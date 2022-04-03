import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const cartList = useSelector((state) => state.cart);
  const cartListLen = cartList.length;
  return (
    <div className="fixed z-50 w-full bg-gray-200 border shadow-md border-b-slate-300">
      <nav className="flex items-center justify-between px-4 py-6 page-container ">
        <a
          href="https://github.com/khoabt94/"
          target="_blank"
          className="text-2xl font-extrabold"
        >
          KTB COLLECTION
        </a>
        <ul className="flex text-gray-400 gap-x-5">
          <li className="nav-link">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-black" : null)}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "text-black" : null)}
            >
              Products
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-black" : null)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-x-2">
          <button className="flex items-center px-2 py-2 border border-gray-800 rounded-md btn gap-x-2">
            <i className="fa-solid fa-right-to-bracket"></i>
            <p>Log In</p>
          </button>
          <Link
            to="/register"
            className="flex items-center px-2 py-2 border border-gray-800 rounded-md btn gap-x-2"
          >
            <i className="fa-solid fa-user"></i>
            <p>Register</p>
          </Link>
          <Link
            to="/cart"
            className="flex items-center px-2 py-2 border border-gray-800 rounded-md btn gap-x-2"
          >
            <i className="fa-solid fa-cart-arrow-down"></i>
            <p>Cart ({cartListLen})</p>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
