import { useParams } from "react-router-dom";
import { PopularNow } from "./PopularNow";

export function ProductView() {
  const { productId } = useParams();

  const product = {
    title: productId,
    category: "Men's Shoes",
    price: "$999.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel felis tellus. Curabitur justo eros, molestie eu venenatis at, dictum ut erat.",
    sizes: ["US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    rating: 4.7,
  };

  return (
    <>
        <div className="max-w-screen-lg mx-auto p-4 sm:p-6 flex flex-col sm:flex-row gap-6 min-h-screen">
        {/* Product Image Placeholder */}
        <div className="w-full sm:w-1/2 bg-gray-300 h-[300px] sm:h-[400px] rounded-lg"></div>

        {/* Product Details */}
        <div className="w-full sm:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-xl sm:text-2xl font-semibold mt-2">{product.price}</p>

            {/* Size Selection */}
            <div className="mt-4 flex flex-wrap gap-2">
            {product.sizes.map((size, index) => (
                <button 
                key={index} 
                className="border px-4 py-2 text-xs sm:text-sm bg-black text-white rounded-md"
                >
                {size}
                </button>
            ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 space-y-2">
            <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                Add to Cart <span className="text-lg">🛒</span>
            </button>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg text-sm sm:text-base">
                Favorite
            </button>
            </div>

            {/* Description */}
            <p className="mt-6 text-gray-700 text-sm sm:text-base">{product.description}</p>

            {/* Reviews */}
            <div className="mt-6">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <p className="text-yellow-500 text-lg sm:text-xl">⭐ {product.rating}</p>
            </div>
        </div>
        </div>
        <PopularNow />
    </>
  );
}
