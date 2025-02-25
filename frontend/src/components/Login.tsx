import { useState } from "react";
import axios from "axios";

function Login() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", credentials);
      setToken(response.data.access);
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
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" name="username" placeholder="Username" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="w-full p-2 mb-2 border rounded" onChange={handleChange} required />
        <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Login</button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}

export default Login;
