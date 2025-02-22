import { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-auto bg-secondary border-2 rounded-[10px] shadow-lg">
        <div className="font-bold text-left mt-4 ml-4">LOGO</div>
        <form className="flex flex-col space-y-2 p-4">
          <div className="text-sm font-semibold">Email</div>
          <input
            placeholder="Email"
            type="email"
            className="pl-3 h-8 rounded-[8px] border-2 shadow-sm"
          />
          <div className="text-sm font-semibold">Password</div>
          <div className="relative">
            <input
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              className="pl-3 h-8 rounded-[8px] w-full pr-10 border-2 shadow-sm"
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="text-sm font-semibold">Confirm Password</div>
          <div className="relative">
            <input
              placeholder="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              className="pl-3 h-8 rounded-[8px] w-full pr-10 border-2 shadow-sm"
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
            <button className="bg-primary h-8 rounded-[10px] text-white mt-5">
            Register
            </button>
        </form>
        <a href="/" className="flex justify-center items-center text-gray-400 text-sm mt-2">
          Register with
        </a>
        <div className="flex justify-center items-center space-x-4 pt-2 pb-4">
          <FaFacebook size={"20px"} />
          <FaGoogle size={"20px"} />
        </div>
      </div>
    </div>
  );
};
