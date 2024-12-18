import Image from 'next/image';
import { useState } from 'react';
import {
  
  FaHome,
  
} from "react-icons/fa";
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header bg-white shadow-md sticky">
      <div className="container mx-auto px-4">
        <nav className="navbar flex justify-between items-center py-4">
          {/* Left Section: Logo */}
          <div className="flex items-cente  w-[150px] h-[50px]">
            <a href="/" className="navbar-brand">
           
            <img
              src="/assets/freevance-logo.jpeg"
              alt="Freevance Logo"
              className="w-auto h-auto" 
              //  width={100}
              // height={100}
           
            />
           
       
            </a>
          </div>

          {/* Center Section: Menu */}
          <div className="hidden lg:flex items-center space-x-8 font-semibold">
            <div className="relative">
              <button
                className="text-gray-800 hover:text-orange-500 flex items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
               <FaHome />
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg border rounded-md z-10">
                  <li>
                    <a
                      href="/home-option-1"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    >
                      Option 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="/home-option-2"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-100"
                    >
                      Option 2
                    </a>
                  </li>
                </ul>
              )}
            </div>
            <a href="/for-employers" className="text-gray-800 hover:text-orange-500">
              For Employers
            </a>
            <a href="/for-freelancers" className="text-gray-800 hover:text-orange-500">
              For Freelancer
            </a>
           
            <a href="/blog" className="text-gray-800 hover:text-orange-500">
              Resources
            </a>
            <a href="/admin" className="text-gray-800 hover:text-orange-500">
              Admin
            </a>
          </div>

          {/* Right Section: Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/register"
              className="text-gray-800 hover:text-orange-500 font-semibold"
            >
              Register
            </a>
            <a
              href="/login"
              className="text-gray-800 hover:text-orange-500 font-semibold"
            >
              Login
            </a>
            <a
              href="/post-project"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full"
            >
              + Post a Project
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
