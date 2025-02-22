import { useState } from "react";
import { FaFacebook, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa6";

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-96 h-96  bg-secondary border-2 rounded-[10px]">
                <div className="font-bold text-left mt-4 ml-4">LOGO</div>
                <form className="flex flex-col space-y-2 p-4">
                    <div className="text-sm font-semibold">Email</div>
                    <input
                        placeholder="Email"
                        type="email"
                        className="pl-3 h-8 rounded-[8px]"
                    />
                    <div className="text-sm font-semibold">Password</div>
                    <div className="relative">
                        <input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            className="pl-3 h-8 rounded-[8px] w-full pr-10"
                        />
                        <div
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ?  <FaEye />: <FaEyeSlash />}
                        </div>
                    </div>
                    <a href="/" className="text-[12px] underline">
                        Forgot Password?
                    </a>

                    <button className="bg-primary h-8 rounded-[10px] text-white">
                        Login
                    </button>
                    <button className="bg-primary h-8 rounded-[10px] text-white">
                        Sign Up
                    </button>
                </form>
                <a href="/" className="flex justify-center items-center text-gray-400 text-sm mt-2">
                    Login with
                </a>
                <div className="flex justify-center items-center space-x-4 pt-2">
                    <FaFacebook size={"20px"} />
                    <FaGoogle size={"20px"} />
                </div>
            </div>
        </div>
    );
};
