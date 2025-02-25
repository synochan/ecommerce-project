import { useState } from "react";
import { FaMagnifyingGlass, FaCartShopping, FaUser, FaBars, FaXmark } from "react-icons/fa6";
import Login from "./Login";
import Register from "./Register";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleLogin = () => {
    setLoginOpen(!loginOpen);
  };

  const toggleRegister = () => {
    setRegisterOpen(!registerOpen);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  };

  const closeRegister = () => {
    setRegisterOpen(false);
  };

  return (
    <>
      <nav className="navbar bg-primary w-full h-12">
        <div className="flex justify-between items-center h-full px-4 sm:px-8 md:px-32">
          <a href="/" className="text-white text-lg font-bold">LOGO</a>
          <div className="hidden md:flex space-x-4">
            <ul className="flex flex-row space-x-4 md:space-x-20">
              <li className="text-white text-sm font-semibold">MEN</li>
              <li className="text-white text-sm font-semibold">WOMEN</li>
              <li className="text-white text-sm font-semibold">KIDS</li>
              <li className="text-white text-sm font-semibold">NEW & TRENDING</li>
            </ul>
          </div>
          <div className="flex space-x-2 sm:space-x-4 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"  
                className="text-primary text-sm font-semibold bg-white rounded-[10px] h-8 border-white pl-4 w-24 sm:w-40"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary">
                <FaMagnifyingGlass size={'20px'} />
              </button>
            </div>
            <button className="text-white text-sm font-semibold">
              <FaCartShopping size={'20px'} />
            </button>
            <button className="text-white text-sm font-semibold" onClick={toggleLogin}>
              <FaUser size={'20px'} />
            </button>
            <button className="md:hidden text-white text-sm font-semibold" onClick={toggleMenu}>
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
      </nav> 
      {loginOpen && (
        <div className="bg-gray-500 bg-opacity-50 flex justify-center items-center" onClick={closeLogin}>
          <div onClick={(e) => e.stopPropagation()}>
            <Login />
            <p className="text-white text-sm font-semibold mt-2">
              Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={toggleRegister}>Sign Up</span>
            </p>
          </div>
        </div>
      )}
      {registerOpen && (
        <div className="bg-gray-500 bg-opacity-50 flex justify-center items-center" onClick={closeRegister}>
          <div onClick={(e) => e.stopPropagation()}>
            <Register />
          </div>
        </div>
      )}
    </>
  );
};
