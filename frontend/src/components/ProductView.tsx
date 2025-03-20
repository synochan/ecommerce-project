import { useEffect, useState, useLayoutEffect } from "react";
import { useParams, useNavigate, useNavigationType } from "react-router-dom";
import { useProductContext } from "@/context/ProductContext";
import ProductCarousel from "@/components/ProductCarousel";

const ProductView = () => {
  const { id } = useParams<{ id: string }>();
  const { products, addToCart } = useProductContext();
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const product = products.find((p) => String(p.id) === id);
  const [zoomPosition, setZoomPosition] = useState({ x: "50%", y: "50%" });
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");

  useLayoutEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [id, navigationType]);

  const handleGoBack = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setTimeout(() => navigate(-1), 200);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, selectedSize });
    }
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

          <div className="w-full sm:w-1/2 space-y-6">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">{product.category}</p>
            <p className="text-2xl font-semibold mt-2 text-gray-900">${product.price}</p>
            <p className="text-gray-700 text-base leading-relaxed">{product.description}</p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mt-4">
                <p className="text-gray-700 font-semibold mb-2">Select Size:</p>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-lg ${
                        selectedSize === size ? "bg-black text-white" : "bg-gray-200"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-8 space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-900 transition"
              >
                🛒 Add to Cart
              </button>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg text-base hover:bg-gray-700 transition">
                ❤️ Add to Favorites
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <h3 className="text-xl">Featured Products</h3>
        <ProductCarousel category="Men" />
      </div>
    </div>
  );
};

export default ProductView;
