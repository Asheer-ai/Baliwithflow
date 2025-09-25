import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-bali-beige py-4 px-6 shadow-sm font-nav relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <a href="#">
            <img 
              src="/Logo.svg" 
              alt="Baliwithflow logo" 
              className="h-[33px] w-auto"
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-black text-base leading-relaxed hover:text-gray-600">Home</a>
          <a href="#ExperienceDetails" className="text-black text-base leading-relaxed hover:text-gray-600">Experiences</a>
          <a href="#DiscoverCulture" className="text-black text-base leading-relaxed hover:text-gray-600">Guide</a>
          <a href="#Suggestions" className="flex items-center space-x-1 text-black hover:text-gray-600">
            <span>Itineraries</span>
            <IoIosArrowDown />
          </a>
          <a href="#AdditionalInfo" className="text-black text-base leading-relaxed hover:text-gray-600">FAQ</a>
          <a 
            href="#" 
            className="bg-[#384B40] text-white font-semibold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Book a call
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Open menu">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bali-beige shadow-lg z-10">
          <div className="flex flex-col items-center space-y-4 py-8">
            <a href="#" className="text-black text-lg">Home</a>
            <a href="#ExperienceDetails" className="text-black text-lg">Experiences</a>
            <a href="#DiscoverCulture" className="text-black text-lg">Guide</a>
            <a href="#Suggestions" className="text-black text-lg">Itineraries</a>
            <a href="#AdditionalInfo" className="text-black text-lg">FAQ</a>
            <a 
              href="#" 
              className="bg-[#384B40] text-white font-semibold px-6 py-3 rounded-full mt-4"
            >
              Book a call
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;