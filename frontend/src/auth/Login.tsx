import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";
import api from "@/api/api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "@/api/constants";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.post("/api/login/", formData);
      console.log("Success!", response.data);
      setSuccessMessage("Login Successful!");
      setError(null);
      localStorage.setItem(ACCESS_TOKEN, response.data.tokens.access);
      localStorage.setItem(REFRESH_TOKEN, response.data.tokens.refresh);
      navigate("/");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        console.log("Error during Login!", err.response.data);
        if (err.response.data) {
          Object.keys(err.response.data).forEach((field) => {
            const errorMessages = err.response?.data[field];
            if (errorMessages && errorMessages.length > 0) {
              setError(errorMessages[0]);
            }
          });
        }
      } else {
        console.log("Unknown error", err);
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = () => {
    navigate("/register");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <Card className="relative w-[400px] p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-6">LOGO</h1>
        {successMessage && <div className="text-green-500 text-sm mb-4">{successMessage}</div>}
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label>Email</Label>
            <Input
              name="email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Phone Number or Email"
              className="bg-white"
              required
            />
          </div>
          <div className="mb-4">
            <Label>Password</Label>
            <Input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="bg-white"
              required
            />
          </div>
          <a href="#" className="text-sm text-blue-500 block mb-4">
            Forgot password?
          </a>
          <Button type="submit" className="w-full mb-2" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log in"}
          </Button>
          <Button type="button" onClick={signUp} className="w-full bg-black text-white">
            Sign Up
          </Button>
          <div className="text-center mt-4 text-sm text-gray-500">Log in with</div>
          <div className="flex justify-center gap-4 mt-2">
            <FaGoogle className="text-red-500 text-2xl cursor-pointer" />
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          </div>
        </form>
      </Card>
    </div>
  );
}
