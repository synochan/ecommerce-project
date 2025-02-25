"use client";

import { useState } from "react";
import {
  FaMagnifyingGlass,
  FaCartShopping,
  FaUser,
  FaBars,
  FaXmark,
} from "react-icons/fa6";
import Login from "./Login";
import Register from "./Register";
import { ProfileModal } from "./ProfileModal";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

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

  return (
    <>
      <nav className="navbar bg-primary w-full h-12 py-7 relative">
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-32">
          <a
            href="/"
            className="text-[#CCC5B9] text-lg font-bold font-montserrat font-normal"
          >
            LOGO
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">
              MEN
            </a>
            <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">
              WOMEN
            </a>
            <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">
              KIDS
            </a>
            <a href="/" className="text-[#CCC5B9] text-sm font-normal font-montserrat">
              NEW & TRENDING
            </a>
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
