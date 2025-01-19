import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Seating and More Logo" className="h-12 w-auto" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#sustainability" className="text-gray-700 hover:text-green-600 transition-colors">Sustainability</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-green-600">Home</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-green-600">About Us</a>
            <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-green-600">Products</a>
            <a href="#sustainability" className="block px-3 py-2 text-gray-700 hover:text-green-600">Sustainability</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-green-600">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;