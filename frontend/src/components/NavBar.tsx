import { useState } from "react";
import { 
  FaMagnifyingGlass, 
  FaCartShopping, 
  FaUser, 
  FaBars, 
  FaXmark 
} from "react-icons/fa6";
import Login from "./Login";
import Register from "./Register";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if user is logged in by checking for a token in localStorage.
  const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
  };

  // When the profile icon is clicked:
  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Profile clicked. Logged in?", isLoggedIn());
    if (isLoggedIn()) {
      // If logged in, toggle dropdown
      setProfileDropdownOpen((prev) => !prev);
      // Ensure modals are closed
      setLoginOpen(false);
      setRegisterOpen(false);
    } else {
      // If not logged in, open login modal
      setLoginOpen(true);
    }
  };

  // Close login modal
  const closeLogin = () => {
    setLoginOpen(false);
  };

  // Close register modal
  const closeRegister = () => {
    setRegisterOpen(false);
  };

  // Close profile dropdown when clicking outside
  const handleNavClick = () => {
    if (profileDropdownOpen) {
      setProfileDropdownOpen(false);
    }
  };

  return (
    <>
      <nav 
        className="navbar bg-primary w-full h-12 py-7 relative" 
        onClick={handleNavClick}
      >
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-32">
          <a href="/" className="text-[#CCC5B9] text-lg font-bold font-montserrat font-normal">
            LOGO
          </a>
          <div className="hidden md:flex space-x-4">
            <ul className="flex flex-row space-x-4 md:space-x-20">
              <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">MEN</a>
              <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">WOMEN</a>
              <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">KIDS</a>
              <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">NEW & TRENDING</a>
            </ul>
          </div>
          <div className="flex space-x-2 sm:space-x-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="text-primary text-sm font-semibold bg-white rounded-[20px] h-8 border-white pl-4 w-24 sm:w-40"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary">
                <FaMagnifyingGlass size={'20px'} />
              </button>
            </div>
            <button className="text-white text-sm font-semibold">
              <FaCartShopping size={'20px'} />
            </button>
            <button 
              className="text-white text-sm font-semibold" 
              onClick={handleProfileClick}
            >
              <FaUser size={'20px'} color={isLoggedIn() ? 'green' : 'white'} />
            </button>
            <button 
              className="md:hidden text-white text-sm font-semibold" 
              onClick={toggleMenu}
            >
              {menuOpen ? <FaXmark size={'20px'} /> : <FaBars size={'20px'} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-primary w-full">
            <ul className="flex flex-col space-y-2 p-4 items-center">
              <li className="text-white text-sm font-semibold">MEN</li>
              <li className="text-white text-sm font-semibold">WOMEN</li>
              <li className="text-white text-sm font-semibold">KIDS</li>
              <li className="text-white text-sm font-semibold">NEW & TRENDING</li>
            </ul>
          </div>
        )}

        {/* Profile Dropdown (only for logged in users) */}
        {profileDropdownOpen && isLoggedIn() && (
          <div 
            className="absolute top-16 right-4 bg-white shadow rounded p-4 z-50" 
            onClick={(e) => e.stopPropagation()}
          >
            <ul>
              <li className="cursor-pointer hover:bg-gray-100 p-2">Profile</li>
              <li className="cursor-pointer hover:bg-gray-100 p-2">Cart</li>
              <li className="cursor-pointer hover:bg-gray-100 p-2">Settings</li>
              <li 
                className="cursor-pointer hover:bg-gray-100 p-2"
                onClick={() => {
                  localStorage.removeItem("token");
                  setProfileDropdownOpen(false);
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        )}

        {/* Login Modal (only shows when not logged in) */}
        {loginOpen && !isLoggedIn() && (
          <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50" 
            onClick={closeLogin}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Login />
            </div>
          </div>
        )}

        {/* Register Modal */}
        {registerOpen && (
          <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50" 
            onClick={closeRegister}
          >
            <div onClick={(e) => e.stopPropagation()}>
              <Register />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
