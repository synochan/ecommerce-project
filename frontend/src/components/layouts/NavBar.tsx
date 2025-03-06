"use client";

import { useState } from "react";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaUser,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import Login from "../product/Login";
import Register from "../auth/Register";
import { ProfileModal } from "../auth/ProfileModal";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if user is logged in
  const isLoggedIn = () => localStorage.getItem("token") !== null;

  // Profile icon click
  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLoggedIn()) {
      setProfileModalOpen(true);
      setLoginOpen(false);
      setRegisterOpen(false);
    } else {
      setLoginOpen(true);
    }
  };

  const closeLogin = () => setLoginOpen(false);
  const closeRegister = () => setRegisterOpen(false);
  const closeProfileModal = () => setProfileModalOpen(false);

  // If your backend uses the email as username, store it as "userEmail" in localStorage
  const userEmail = localStorage.getItem("username") || "john.doe@example.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setProfileModalOpen(false);
  };

  // Dropdown Menu Items
  const menuItems = [
    { name: "MEN", options: ["Shirts", "Pants", "Shoes"] },
    { name: "WOMEN", options: ["Dresses", "Tops", "Footwear"] },
    { name: "KIDS", options: ["Toys", "Clothing", "Shoes"] },
    { name: "NEW & TRENDING", options: ["Latest Arrivals", "Bestsellers"] },
  ];

  return (
    <>
      <nav className="navbar bg-primary w-full h-12 py-7 relative">
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-32">
          <a
            href="/"
            className="text-[#CCC5B9] text-lg font-bold font-montserrat"
          >
            LOGO
          </a>

          {/* Desktop Navigation with Dropdown */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">
                  {item.name}
                </a>
                {dropdownOpen === item.name && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg p-2">
                    <ul className="text-black text-sm">
                      {item.options.map((option, i) => (
                        <li key={i} className="py-1 hover:bg-gray-200 px-2 rounded">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex space-x-2 sm:space-x-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="text-primary text-sm font-semibold bg-white rounded-[20px] h-8 border-white pl-4 w-24 sm:w-40"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary">
                <FaMagnifyingGlass size={"20px"} />
              </button>
            </div>
            <button className="text-white text-sm font-semibold">
              <FaCartShopping size={"20px"} />
            </button>
            <button
              className="text-white text-sm font-semibold"
              onClick={handleProfileClick}
            >
              <FaUser size={"20px"} color={isLoggedIn() ? "green" : "white"} />
            </button>
            <button
              className="md:hidden text-white text-sm font-semibold"
              onClick={toggleMenu}
            >
              {menuOpen ? <FaXmark size={"20px"} /> : <FaBars size={"20px"} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-primary w-full">
            <ul className="flex flex-col space-y-2 p-4 items-center">
              {menuItems.map((item, index) => (
                <li key={index} className="text-white text-sm font-semibold">
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modals */}
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

      {profileModalOpen && isLoggedIn() && (
        <ProfileModal
          username={userEmail}
          onLogout={handleLogout}
          onClose={closeProfileModal}
        />
      )}
    </>
  );
};
