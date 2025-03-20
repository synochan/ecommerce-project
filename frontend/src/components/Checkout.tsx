import React from "react";
import { useProductContext } from "@/context/ProductContext";

const Checkout: React.FC = () => {
  const { cart } = useProductContext();

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 my-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Checkout</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={`${item.id}-${item.selectedSize}`}
                className="flex items-center gap-3 bg-gray-50 p-3 rounded-md shadow-sm border border-gray-200"
              >
                <img src={item.imageSrc} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{item.title} ({item.selectedSize})</p>
                  <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-800 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between text-lg font-semibold text-gray-900">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-md font-medium text-base shadow-sm hover:scale-105 transition-transform"
            onClick={() => alert("Proceeding to payment...")}
          >
            Proceed to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
