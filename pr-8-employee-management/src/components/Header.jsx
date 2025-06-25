import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Header = ({ isLoggedin, setIsLoggedin }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoggedin(false);
    localStorage.setItem("isloggedin", JSON.stringify(false));
    toast.success("Logged Out Successfully");
    navigate("/");
  };

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-gray-900 shadow-md border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="ml-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Empower
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="px-4 py-2 rounded-full font-semibold text-blue-400 bg-gray-800 hover:bg-gray-700 hover:text-white transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-4 py-2 rounded-full font-semibold text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition duration-300"
                >
                  About
                </Link>

                {isLoggedin && (
                  <Link
                    to="/employee"
                    className="px-4 py-2 rounded-full font-semibold text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition duration-300"
                  >
                    Employee
                  </Link>
                )}

                {isLoggedin ? (
                  <button
                    onClick={handleClick}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
