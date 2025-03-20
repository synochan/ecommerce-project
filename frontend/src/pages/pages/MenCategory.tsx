import { useState } from "react";
import ProductList from "@/components/ProductList";

const subcategories = [
  "T-shirts", "Jeans", "Jackets", "Shoes", "Accessories",
  "Suits", "Sweaters", "Shorts", "Sportswear", "Casual Wear"
];

const MenCategory = () => {
  const [activeTab, setActiveTab] = useState(subcategories[0]); // Default to first subcategory

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-5 p-2 border-b border-gray-300">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            className={`px-4 py-2 rounded-md text-sm md:text-base transition-all duration-300 
              ${activeTab === subcategory 
                ? "bg-black text-white font-normal shadow-md" 
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            onClick={() => setActiveTab(subcategory)}
          >
            {subcategory}
          </button>
        ))}
      </div>

      {/* Display Active Tab Products */}
      <h3 className="text-center font-semibold text-lg mt-4">{activeTab}</h3>
      <ProductList category="Men" subcategory={activeTab} /> {/* Pass activeTab as subcategory */}
    </div>
  );
};

export default MenCategory;
