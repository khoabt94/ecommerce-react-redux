import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const cartList = useSelector((state) => state.cart);
  const cartListLen = cartList.length;
  const [navbarActive, setNavbarActive] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [screenSize, setScreenSize] = useState(0)

  const handleNavBarOpen = (e) => {
    const target = e.target.closest('.nav-component')
    if (!target) return
    setNavbarOpen(false)
  }

  useEffect(() => {
    const handleSize = () => setScreenSize(window.innerWidth)
    handleSize()
    window.addEventListener('resize', handleSize)

    return () => window.removeEventListener('resize', handleSize)
  }, [])

  useEffect(() => {
    if (screenSize < 968) setNavbarActive(true)
    else setNavbarActive(false)
  }, [screenSize])

  
  return (
    <div className="fixed z-50 w-full bg-gray-200 border shadow-md border-b-slate-300">
      <nav className="flex items-center justify-between px-4 py-4 lg:px-6 page-container relative ">
        <a
          href="https://github.com/khoabt94/"
          target="_blank"
          className="text-2xl font-extrabold" rel="noreferrer"
        >
          KTB COLLECTION
        </a>
        {!navbarActive 
          ? <NavBarFull cartListLen={cartListLen} /> 
          : (
            <div className="flex flex-col">
              <button  
                onClick={() => setNavbarOpen(!navbarOpen)} 
                className="flex items-center px-4 py-2 border border-gray-800 rounded-md btn gap-x-2"
              >
              <i className="fa-solid fa-bars"></i>
              </button>
              <NavBarMobile cartListLen={cartListLen} isOpen={navbarOpen} onClick={handleNavBarOpen} />
            </div>
          )}
      </nav>
    </div>
  );
};

const NavBarFull = ({cartListLen}) => {
  return (
    <>
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
</>
)
}

const NavBarMobile = ({cartListLen, isOpen, onClick}) => {
  return (
    <div onClick={onClick} className={`flex flex-col gap-y-8 rounded transition-all absolute top-full translate-y-2 bg-gray-200 p-5 right-0 ${isOpen ? "visible opacity-100" : "hidden opacity-0"}`}>
      
  <ul className="flex text-gray-400 gap-x-5 flex-col gap-y-2 nav-component">
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
<div className="flex gap-x-2 flex-col gap-y-3 nav-component">
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
</div>
)
}

export default NavBar;
