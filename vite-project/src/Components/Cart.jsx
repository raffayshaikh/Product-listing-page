import React from 'react';

const Cart = ({ cart }) => {
  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-2xl text-gray-500 mb-4">Your Cart</h2>

      {/* Cart items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="w-full">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 p-4 border-b border-gray-300">
              <div className="flex gap-4">
                <span className="font-bold">{item.title}</span>
                <span className="text-gray-600">Quantity: {item.quantity}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">Total: ${item.price * item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total price */}
      <div className="mt-4 font-bold text-lg">
        <span>Total Price: ${totalPrice}</span>
      </div>

      {/* Optional Checkout Button */}
      <div className="mt-6">
        <button className="bg-amber-400 text-black px-6 py-2 rounded-md">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
