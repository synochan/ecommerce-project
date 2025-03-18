import { useEffect, useState, useLayoutEffect } from "react";
import { useParams, useNavigate, useNavigationType } from "react-router-dom";
import { useProductContext } from "@/context/ProductContext";
import ProductCarousel from "@/components/ProductCarousel";

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductContext();
  const navigate = useNavigate();
  const navigationType = useNavigationType(); // Detect navigation type

  const product = products.find((p) => String(p.id) === id);
  const [zoomPosition, setZoomPosition] = useState({ x: "50%", y: "50%" });
  const [isZoomed, setIsZoomed] = useState(false);

  // Reset scroll position on navigation (fixes "Go Back" scroll issue)
  useLayoutEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, behavior: "instant" }); // Force reset on new navigation
    }
  }, [id, navigationType]);

  // Go Back button handler
  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: "instant" }); // Ensure smooth transition
    setTimeout(() => navigate(-1), 200); // Delay navigation to avoid scroll jump
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <p className="text-red-600 text-2xl font-bold animate-pulse">⚠️ Product Not Found...</p>
        <p className="text-gray-600 mt-2">Sorry, the product you're looking for doesn't exist.</p>
        <button
          onClick={handleGoBack}
          className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
        >
          ◀ Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto p-6 sm:p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <button
          onClick={handleGoBack}
          className="mb-6 flex items-center gap-2 text-gray-700 hover:text-black transition"
        >
          ◀ Go Back
        </button>

        <div className="flex flex-col sm:flex-row gap-10">
          {/* Product Image with Zoom Effect */}
          <div
            className="w-full sm:w-1/2 relative overflow-hidden border border-gray-400 rounded-lg"
            onMouseMove={(e) => {
              const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - left) / width) * 100;
              const y = ((e.clientY - top) / height) * 100;
              setZoomPosition({ x: `${x}%`, y: `${y}%` });
            }}
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
          >
            <img
              src={product.imageSrc}
              alt={product.title || "Product image"}
              className="w-full h-[350px] sm:h-[450px] object-cover transition-transform duration-300"
              style={{
                transform: isZoomed ? `scale(2)` : "scale(1)",
                transformOrigin: `${zoomPosition.x} ${zoomPosition.y}`,
              }}
            />
          </div>

          {/* Product Details */}
          <div className="w-full sm:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">{product.category}</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900">${product.price}</p>
            <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>

            <div className="mt-8 space-y-4">
              <button className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-900 transition">
                🛒 Add to Cart
              </button>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg text-base hover:bg-gray-700 transition">
                ❤️ Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-20 mb-10">
        <h3 className="text-xl">Featured Products</h3>
        <ProductCarousel category="Men" />
      </div>
    </div>
  );
};

export default ProductView;
