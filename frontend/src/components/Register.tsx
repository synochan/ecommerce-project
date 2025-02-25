import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FaEyeSlash, FaEye, FaApple, FaGoogle, FaFacebook, FaArrowLeft } from "react-icons/fa6";
import Login from "./Login";

function Register() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data.message);
      setMessage("Registration successful!");
      // Optionally store token if your backend returns one:
      if(response.data.access_token) {
        localStorage.setItem("token", response.data.access_token);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage("Registration failed. " + JSON.stringify(error.response.data));
      } else {
        setMessage("Registration failed. An unknown error occurred.");
      }
    } 
  };

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login />
      ) : (
        <Card className="w-[500px] h-[450px] mx-auto mt-10 p-4 border rounded shadow">
          <CardHeader>
            <button className="text-black mb-2 text-sm font-semibold" onClick={toggleLogin}>
              <FaArrowLeft size={'20px'} />
            </button>
            <CardTitle>Register</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister}>
              <Label>Email</Label>
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
              <Label className="mt-3 mb-2 block">Confirm Password</Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password2"
                  placeholder="Confirm Password"
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
              <div className="flex justify-center mt-4">
                <Button type="submit" className="w-full max-w-xl">Register</Button>
              </div>
              <div className="flex justify-center mt-2">
                <span className="text-sm font-semibold">Or register with</span>
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

export default Register;
