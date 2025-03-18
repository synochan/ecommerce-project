import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCarouselProps {
  category?: string;
  isNewArrival?: boolean;
  isTrending?: boolean;
}

const ProductCarousel = ({ category, isNewArrival, isTrending }: ProductCarouselProps) => {
  const { products } = useProductContext();

  const filteredProducts = products.filter((product) => {
    const categoryMatch = category ? product.category === category : true;
    const newArrivalMatch = isNewArrival !== undefined ? product.newArrival === isNewArrival : true;
    const trendingMatch = isTrending !== undefined ? product.isTrending === isTrending : true;

    return categoryMatch && newArrivalMatch && trendingMatch;
  });


  return (
    <div className="flex space-x-4 overflow-x-auto my-6">
  {filteredProducts.map((product) => (
    <motion.div
      key={product.id}
      className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px]"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/product-details/${product.id}`}>
        <ProductCard
          title={product.title}
          category={product.category}
          price={product.price}
          imageSrc={product.imageSrc}
          hoverEffect="fade"
        />
      </Link>
    </motion.div>
  ))}
</div>
  );
};

export default ProductCarousel;