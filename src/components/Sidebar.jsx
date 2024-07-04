import React from "react";
import {
  FaAddressBook,
  FaBuilding,
  FaCheckCircle,
  FaPalette,
  FaPowerOff,
  FaUserShield,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isOpen, activePage }) => {
  return (
    <div
      className={`bg-gradient-to-b from-[#00e9ef] to-[#00e9ef] text-white w-[200px] md:w-[225px] h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] flex flex-col justify-between p-4 md:p-6 fixed top-[80px] md:top-[100px] left-0 border-r-1.5 border-white border-opacity-50 overflow-y-auto transition-transform duration-300 ring-2 ${
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}
    >
      <div>
        <h2 className="text-lg font-bold mb-8">Account Setup</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                activePage === "/contacts"
                  ? "flex items-center p-2 rounded bg-red-600 text-white"
                  : "flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
              }
            >
              <FaAddressBook className="w-6 h-6 mr-2" />
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business-details"
              className={({ isActive }) =>
                activePage === "/business-details"
                  ? "flex items-center p-2 rounded bg-red-600 text-white"
                  : "flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
              }
            >
              <FaBuilding className="w-6 h-6 mr-2" />
              Business Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/brand-assets"
              className={({ isActive }) =>
                activePage === "/brand-assets"
                  ? "flex items-center p-2 rounded bg-red-600 text-white"
                  : "flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
              }
            >
              <FaPalette className="w-6 h-6 mr-2" />
              Brand Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grant-access"
              className={({ isActive }) =>
                activePage === "/grant-access"
                  ? "flex items-center p-2 rounded bg-red-600 text-white"
                  : "flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
              }
            >
              <FaUserShield className="w-6 h-6 mr-2" />
              Grant Access
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/finish"
              className={({ isActive }) =>
                activePage === "/finish"
                  ? "flex items-center p-2 rounded bg-red-600 text-white"
                  : "flex items-center p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out"
              }
            >
              <FaCheckCircle className="w-6 h-6 mr-2" />
              Finish
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <button className="w-full text-left p-2 rounded hover:bg-white hover:text-blue-600 transition duration-300 ease-in-out flex items-center">
          <FaPowerOff className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
