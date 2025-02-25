import { useState } from "react";
import axios from "axios";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { FaEyeSlash, FaEye, FaApple, FaGoogle, FaFacebook } from "react-icons/fa6";

function Login() {
  const [formData, setCredentials] = useState({ email: "", password: "" });
  const [, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", formData);
      console.log(response.data);
      setMessage("Login successful!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setMessage("Login failed. " + JSON.stringify(error.response.data));
      } else {
        setMessage("Login failed. An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      <Card className="w-[500px] mx-auto mt-10 p-4 border rounded shadow">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <Label className="mt-4 mb-2 block">Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <Label className="mt-4 mb-2 block">Password</Label>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} name="password" placeholder="Password" onChange={handleChange} required />
              <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="flex justify-center mt-4">
              <Button type="submit" className="my-5 block">Login</Button>
            </div>
            <div className="flex flex-row items-center justify-center mt-4 space-x-4">
              <FaApple size={'20px'} />
              <FaGoogle size={'20px'} />
              <FaFacebook size={'20px'} />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
