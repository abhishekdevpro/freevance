import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
 
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      
        <div>
          <div className="flex items-center space-x-2 w-[150px] h-[50px] ">
            <img
              src="/assets/freevance-logo.jpeg"
              alt="Freevance Logo"
              className="w-auto h-auto" 
               width={100}
              height={100}
            //   style={{width:"300px", height:"100px"}}
            />
           
          </div>
          {/* <p className="text-sm mt-4 mb-4">
            We’re always in search for talented and motivated people. Don’t be shy introduce yourself!
          </p> */}
         
          <div className="flex justify-start items-center gap-2 text-sm mt-4 mb-2"><FaMapMarkerAlt /> 
          <p className=""> P O Box 1084, Columbia, SC 29202</p></div>
          <div className="flex justify-start items-center gap-2 mb-4"><FaEnvelope /> <p className="">info@freevance.com</p></div>
        
          {/* Social Icons */}
          <div className="flex space-x-3 mb-4">
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-500">
              <FaLinkedinIn />
            </a>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Contact with us
          </button>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            <li><a href="#" className="hover:text-orange-500">Login</a></li>
            <li><a href="#" className="hover:text-orange-500">Register</a></li>
            <li><a href="#" className="hover:text-orange-500">Forgot Password</a></li>
          </ul>
        </div>

        {/* Help & Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Browse Candidates</a></li>
            <li><a href="#" className="hover:text-orange-500">Employers Dashboard</a></li>
            <li><a href="#" className="hover:text-orange-500">Job Packages</a></li>
            <li><a href="#" className="hover:text-orange-500">Jobs Featured</a></li>
            <li><a href="#" className="hover:text-orange-500">Post A Job</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Other Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-500">Freelancers</a></li>
            <li><a href="#" className="hover:text-orange-500">Freelancer Details</a></li>
            <li><a href="#" className="hover:text-orange-500">Project</a></li>
            <li><a href="#" className="hover:text-orange-500">Project Details</a></li>
            <li><a href="#" className="hover:text-orange-500">Post Project</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-6">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-500">
          Copyright 2024 © Freevance.com All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
