import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaChevronUp,
  FaChevronDown,
  FaUserCircle,
  FaHome,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={`bg-gray-800 text-white flex flex-col shadow-lg transition-width duration-300 w-64 h-screen`}>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <h2 className={`text-xl font-semibold transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}>Menu</h2>
        
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center py-4">
          <div className="text-center mb-4">
            <p className="text-lg font-semibold">
              {user?.username || "Login to view Your Profile"}
            </p>
          </div>
        </div>

        <nav className="px-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="flex gap-2 items-center p-2 rounded hover:bg-gray-700 transition duration-200"
              >
                <FaHome size={20} />
                <span className={`${isSidebarOpen ? 'text-md' : 'hidden'} transition-opacity duration-300`}>Browse Recipes</span>
              </Link>
            </li>

            <li className="cursor-pointer">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex justify-between items-center p-2 rounded hover:bg-gray-700 transition duration-200"
              >
                <div className="flex items-center gap-2">
                  <FaUserCircle size={20} />
                  <span className={`${isSidebarOpen ? 'text-md' : 'hidden'} transition-opacity duration-300`}>My Profile</span>
                </div>
                {isDropdownOpen ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
              </div>
              {isDropdownOpen && (
                <ul className="ml-4 space-y-2 text-gray-300 mt-2">
                  <li>
                    <Link to="/myfeed" className="hover:text-white">My Feed</Link>
                  </li>
                  <li>
                    <Link to="/upload-recipe" className="hover:text-white">Upload Recipe</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        <nav className="px-4 mt-auto">
          <ul className="flex flex-col gap-2">
            <li className="pb-5">
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded hover:bg-gray-700 transition duration-200 w-full"
              >
                <FaSignOutAlt size={20} />
                <span className={`${isSidebarOpen ? 'text-md' : 'hidden'} transition-opacity duration-300`}>Logout</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
