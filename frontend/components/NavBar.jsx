// components/NavBar.js
'use client'
import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice'; // Import the toggleCart action

const NavBar = () => {
  const dispatch = useDispatch(); // Initialize Redux dispatch

  const handleCartToggle = () => {
    dispatch(toggleCart()); // Dispatch the toggleCart action
  };

  return (
    <nav className="bg-duckBlue p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-duckWhite">
          <Link href="/">Duck Pond</Link>
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-duckWhite hover:text-yellow-600">
            Home
          </Link>
          <Link href="/login" className="text-duckWhite hover:text-yellow-600">
            Login
          </Link>
          <Link href="/signup" className="text-duckWhite hover:text-yellow-600">
            Sign Up
          </Link>
          {/* Button to toggle the cart */}
          <button
            onClick={handleCartToggle}
            className="bg-white text-duckYellow px-4 py-2 rounded hover:bg-gray-200 transition"
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
