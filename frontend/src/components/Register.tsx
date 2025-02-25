import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FaEyeSlash, FaEye, FaApple, FaGoogle, FaFacebook } from "react-icons/fa6";


function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register/", formData);
      setMessage(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage("Registration failed. " + JSON.stringify(error.response.data));
      } else {
        setMessage("Registration failed. An unknown error occurred.");
      }
    } 
  };

  const [showPassword, setShowPassword] = useState(false);  

  return (
    <div>
      <Card className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
        <CardHeader>
          <CardTitle>Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleRegister}>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <Label>Password</Label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <Label>Confirm Password</Label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} name="password2" placeholder="Confirm Password" onChange={handleChange} required />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <Button type="submit">Register</Button>
            </div>
            <div className="flex flex-row items-center justify-center mt-4 space-x-4">
              <FaApple size={'20px'} />
              <FaGoogle size={'20px'} />
              <FaFacebook size={'20px'} />
            </div>
          </form>
        </CardContent>
      </Card>
      {/*  <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password2" placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
      */}
    </div>
  );
}

export default Register;
