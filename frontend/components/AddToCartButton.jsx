'use client'

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';

const AddToCartButton = ({product}) => {

    const dispatch = useDispatch(); // Initialize the dispatch function

    const handleAddToCart = () => {
      dispatch(addToCart(product)); // Dispatch the addToCart action with the product
    };
  return (
    <button
      type="submit"
      onClick={handleAddToCart}
      className="w-full py-2 px-4 bg-duckYellow text-duckWhite font-bold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
    >
      Add To Cart
    </button>
  );
};

export default AddToCartButton;