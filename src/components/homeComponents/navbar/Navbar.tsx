// import { Link } from "react-router-dom";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (navbarRef.current) {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      className={`bg-customPrimary text-white ${isSticky ? "sticky top-0 z-50" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo/System Name */}
        <div className="text-xl font-bold">
          <a href="">Meeting Room Booking</a>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/rooms">Meeting Rooms</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
          <Link to="/login">Login</Link>
          {/* <Link to="/contact-us">SignUp</Link> */}
        </nav>

        {/* User Icon/Dropdown */}
        <div className="relative">
          <button className="flex items-center space-x-2">
            <span>User Icon</span> {/* Replace with actual icon */}
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
            {/* Conditional rendering based on user role */}
            {/* <Link
            to="/my-bookings"
            className="block px-4 py-2 hover:bg-gray-200"
          >
            My Bookings
          </Link> */}
            {/* <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
            Dashboard
          </Link> */}
            {/* <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
            Logout
          </button> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
