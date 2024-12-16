import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-blue-600">Phincon Academy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#program" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Program</a>
              <a href="#alumni" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Alumni</a>
              <a href="#partners" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Partners</a>
              <a href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#program" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Program</a>
            <a href="#alumni" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Alumni</a>
            <a href="#partners" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Partners</a>
            <a href="#about" className="hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;