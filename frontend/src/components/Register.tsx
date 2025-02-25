import { useState } from "react";
import axios from "axios";

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

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" name="email" placeholder="Email" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password2" placeholder="Confirm Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default Register;
