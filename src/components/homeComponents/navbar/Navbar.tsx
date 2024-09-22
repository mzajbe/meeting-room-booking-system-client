import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, useCurrentUser } from "../../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState("admin"); // Initially setting as "admin", can be changed dynamically based on authentication
  const navbarRef = useRef(null);
  const currentUser = useSelector(useCurrentUser); // Assuming this returns the logged-in user info

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleScroll = () => {
    if (navbarRef.current) {
      setIsSticky(window.scrollY > 0);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Dynamically render dropdown items based on user role
  const renderDropdownItems = () => {
    if (userRole === "admin") {
      return (
        <>
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
            Dashboard
          </Link>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
            Logout
          </button>
        </>
      );
    } else if (userRole === "user") {
      return (
        <>
          <Link to="/my-bookings" className="block px-4 py-2 hover:bg-gray-200">
            My Bookings
          </Link>
          <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
            Logout
          </button>
        </>
      );
    }
  };

  return (
    <header ref={navbarRef} className={`bg-customPrimary text-white ${isSticky ? "sticky top-0 z-50" : ""}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <a href="/">Meeting Room Booking</a>
        </div>

        <nav className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/rooms">Meeting Rooms</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        <div className="relative">
          <button className="flex items-center space-x-2" onClick={toggleDropdown}>
            <span>User Icon</span> {/* Replace with actual icon */}
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
              {currentUser ? renderDropdownItems() : (
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
