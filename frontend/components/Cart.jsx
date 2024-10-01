'use client';

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, toggleCart } from '../redux/cartSlice'; // Adjust path if necessary

const Cart = () => {
  const dispatch = useDispatch();
  const { items, isCartOpen } = useSelector((state) => state.cart); // Get cart items and visibility state from Redux

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout...');
  };

  const handleIsOpen = () => {
    dispatch(toggleCart());  // Toggle cart visibility
  };

  // Calculate the subtotal
  const subtotal = items.reduce((total, item) => total + item.price, 0);

  if (!isCartOpen) return null; // Don't render the cart if it's closed

  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-4 transition-transform transform translate-x-0 flex flex-col justify-between">
      <button onClick={handleIsOpen} className="text-black font-bold">x</button>
      <div className="flex-grow">
        <h1 className="text-2xl text-black font-bold">Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-black">Your cart is empty.</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p>Price: ${item.price}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Subtotal and Actions */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-black shadow-lg flex flex-col space-y-2">
        <div className="flex justify-between text-lg font-semibold">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={handleClearCart} className="bg-gray-500 text-white p-2 rounded w-full mr-2">
            Clear Cart
          </button>
          <button onClick={handleCheckout} className="bg-blue-500 text-white p-2 rounded w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
