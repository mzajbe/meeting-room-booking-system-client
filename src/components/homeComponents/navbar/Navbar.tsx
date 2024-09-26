import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout, useCurrentUser } from "../../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUserByIdQuery } from "../../../redux/api/baseApi";



const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navbarRef = useRef(null);
  const currentUser = useSelector(useCurrentUser); // Assuming this returns the logged-in user info

  const authUser = useSelector((state) => state.auth.user);
  const { data:user} = useFetchUserByIdQuery(authUser?.userId);

  // console.log(authUser?.userId);
  // console.log(user?.data.name);
  

  

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
    if (currentUser?.role === "admin") {
      return (
        <>
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200">
            Dashboard
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Logout
          </button>
        </>
      );
    } else if (currentUser?.role === "user") {
      return (
        <>
          <Link to="/my-bookings" className="block px-4 py-2 hover:bg-gray-200">
            My Bookings
          </Link>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
          >
            Logout
          </button>
        </>
      );
    }
  };

  // console.log(currentUser);
  

  return (
    <header
      ref={navbarRef}
      className={`bg-customPrimary text-white ${isSticky ? "sticky top-0 z-50" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/">Meeting Nest</Link>
        </div>

        <nav className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/rooms">Meeting Rooms</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>

        <div className="relative z-10">
          {currentUser ? (
            // If user is logged in, show user's name or avatar and dropdown
            <button className="flex items-center space-x-2 border p-2" onClick={toggleDropdown}>
              {/* <span>{currentUser.role ? currentUser.role : "User Icon"}</span> */}
              {user?.data.name}
            </button>
          ) : (
            // If no user is logged in, show Login button
            <Link to="/login" className="text-white border p-2 rounded-lg">
              Login
            </Link>
          )}

          {isDropdownOpen && currentUser && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 text-gray-800">
              {renderDropdownItems()}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
