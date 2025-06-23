import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Login from "./pages/Loin"
import { useEffect, useState } from "react";
import Employee from "./pages/Employee";
import Addemployee from "./pages/Addemployee";

const App = () => {
  const [isloggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    let loggedinfo = JSON.parse(localStorage.getItem("isloggedin")) || false
    setIsLoggedin(loggedinfo)
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin} />} />
        <Route path="/employee" element={<Protected isloggedin={isloggedin} Component={Employees}/>} />
        <Route path="/addemployee" element={<Addemployee />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App