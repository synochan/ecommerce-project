import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductContext } from "@/context/ProductContext";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  imageSrc: string; // Ensure correct prop name
  selectedSize: string; // Reflect selected size
}

export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useProductContext();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500">
          <p className="text-lg">Your cart is empty. 🛒</p>
          <Link to="/" className="mt-4 inline-block text-blue-600 font-medium hover:underline">
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1 ml-4">
                  <p className="text-lg font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-500">
                    Size: <span className="font-semibold">{item.selectedSize}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                 onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                    className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition"
                  >
                    -
                  </button>
                  <span className="text-gray-900">{item.quantity}</span>
                  <button
                   onClick={() => updateQuantity(item.id, item.selectedSize, +1)}
                    className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 hover:bg-gray-300 transition"
                  >
                    +
                  </button>
                  <Trash2
  className="w-5 h-5 text-red-500 cursor-pointer"
  onClick={() => removeFromCart(item.id, item.selectedSize)} // Pass selectedSize
/>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center text-lg font-medium text-gray-900">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link to={"/checkout"}>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
