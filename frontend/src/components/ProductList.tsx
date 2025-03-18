import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductListProps {
  category?: string;
  subcategory?: string;
  isNewArrival?: boolean;
  isTrending?: boolean;
}

const ProductList = ({ category, subcategory, isNewArrival, isTrending }: ProductListProps) => { 
  const { products } = useProductContext();

  // Apply filtering
  const filteredProducts = products.filter((product) => {
    const categoryMatch = category ? product.category.toLowerCase() === category.toLowerCase() : true;
    const subcategoryMatch = subcategory ? product.subcategory.toLowerCase() === subcategory.toLowerCase() : true;
    const newArrivalMatch = isNewArrival !== undefined ? product.newArrival === isNewArrival : true;
    const trendingMatch = isTrending !== undefined ? product.isTrending === isTrending : true;

    return categoryMatch && subcategoryMatch && newArrivalMatch && trendingMatch;
  });

  return (
    <div className="p-6 max-w-[1400px] mx-auto">
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          <p>No products found for <span className="font-semibold">{subcategory}</span>.</p>
          <p>Try selecting a different category.</p>
        </div>
      ) : (
        <div 
          key={Date.now()} // Force reanimation every time component renders
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/product-details/${product.id}`}>
                <ProductCard
                  title={product.title}
                  category={product.category}
                  price={product.price}
                  imageSrc={product.imageSrc}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
