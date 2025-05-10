import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = ({ cart }) => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          MyStore
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/"><li className="hover:text-amber-300 cursor-pointer">Home</li></Link>
          <li className="hover:text-amber-300 cursor-pointer">Products</li>
          <li className="hover:text-amber-300 cursor-pointer">About</li>
          <li className="hover:text-amber-300 cursor-pointer">Contact</li>
        </ul>

        {/* Cart Button */}
        <div className="relative">
          <Link to="/cart">
            <button className="flex items-center gap-2 bg-amber-400 text-black px-4 py-2 rounded-md hover:bg-amber-500 transition">
              <span>Cart</span>
              {/* Badge */}
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
