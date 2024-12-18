import Image from 'next/image';
import { useState } from 'react';

const HeroSection1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section className="hero bg-gray-50">
    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-12 lg:py-24">
      {/* Left Section: Text */}
      <div className="lg:w-1/2">
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-orange-500 text-xl">★★★★★</span>
          <span className="text-gray-600">Trusted by over 2M+ users</span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Get the perfect <br />
          <span className="text-orange-500">Developers & Projects</span>
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          With the world's #1 Developers marketplace
        </p>

        {/* Search Bar */}
        <div className="flex w-full lg:w-4/5">
          <select className="border border-gray-300 rounded-l-md px-4 py-3 w-1/3">
            <option>Select</option>
            <option>Developer</option>
            <option>Project</option>
          </select>
          <input
            type="text"
            placeholder="Keywords"
            className="border-t border-b border-gray-300 px-4 py-3 w-full"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-md">
            Search
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <Image
          src="/hero-img.png" // Replace with your hero image
          alt="Hero Section Image"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  </section>
  );
};

export default HeroSection1;
