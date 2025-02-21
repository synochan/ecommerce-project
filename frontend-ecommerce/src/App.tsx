import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import { useState , useEffect } from 'react';


function App() {

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
  }, [])
  return (
    <>
      <LandingPage/>
        

    </>
  )
}

export default App
