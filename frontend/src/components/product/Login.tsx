import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { FaEyeSlash, FaEye, FaApple, FaGoogle, FaFacebook } from "react-icons/fa6";
import Register from "../auth/Register";

function Login() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      username: credentials.email, // backend expects "username"
      password: credentials.password,
    };

    try {
      console.log("Payload:", payload);
      const response = await axios.post("http://127.0.0.1:8000/api/auth/login/", payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.access_token);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage("Login failed. " + JSON.stringify(error.response.data));
      } else {
        setMessage("Login failed. An unknown error occurred.");
      }
    }
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div>
      {isRegister ? (
        <Register />
      ) : (
        <Card className="w-[500px] h-[450px] mx-auto mt-10 p-4 border rounded shadow">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin}>
              <Label className="mt-4 mb-2 block">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                required
              />
              <Label className="mt-4 mb-2 block">Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="flex justify-end mt-2">
                <a href="#" className="text-primary text-sm font-semibold">
                  Forgot password?
                </a>
              </div>
              <div className="flex justify-center flex-col mt-4">
                <Button type="submit" className="mt-2 w-full max-w-xl">
                  Login
                </Button>
                <Button type="button" className="mt-2 w-full max-w-xl" onClick={toggleRegister}>
                  Register
                </Button>
              </div>
              <div className="flex justify-center mt-4">
                <span className="text-sm font-semibold">Or login with</span>
              </div>
              <div className="flex flex-row items-center justify-center mt-4 space-x-4">
                <FaApple size={'20px'} />
                <FaGoogle size={'20px'} />
                <FaFacebook size={'20px'} />
              </div>
            </form>
            {message && <p className="mt-4 text-center text-red-500">{message}</p>}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Login;
