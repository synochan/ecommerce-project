import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import api from '@/api/api';

const checkLoggedInUser = async (setLoggedIn: (val: boolean) => void, setUsername: (val: string) => void) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (token) {
      const config = {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };
      const response = await api.get("/api/user/", config);
      setLoggedIn(true);
      setUsername(response.data.username);
    } else {
      setLoggedIn(false);
      setUsername("");
    }
  } catch (error) {
    setLoggedIn(false);
    setUsername("");
  }
};

export const Landing = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkLoggedInUser(setLoggedIn, setUsername);
  }, []);

  return (
    <div>
      <Layout>
        {isLoggedIn ? <p>Welcome, {username}!</p> : <p>Please log in.</p>}
      </Layout>
    </div>
  );
};
