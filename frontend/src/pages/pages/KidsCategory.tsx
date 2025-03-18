import { useState } from "react";
import ProductList from "@/components/ProductList";

const subcategories = [
  "T-SHIRTS", "JEANS", "JACKETS", "SHOES", "DRESSES", 
  "SHORTS", "SWEATERS", "ACCESSORIES", "SPORTSWEAR", "OUTERWEAR"
];

const KidsCategory = () => {
  const [activeTab, setActiveTab] = useState("T-SHIRTS");

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      {/* Tabs */}
      <div className="overflow-x-auto whitespace-nowrap flex gap-3 mb-5 p-2 border-b border-gray-300 scrollbar-hide justify-center">
        {subcategories.map((subcategory) => (
          <button
            key={subcategory}
            className={`flex-shrink-0 px-4 py-2 border rounded-md transition text-sm md:text-base ${
              activeTab === subcategory ? "text-white bg-black" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(subcategory)}
          >
            {subcategory}
          </button>
        ))}
      </div>

      {/* Display Active Tab Products */}
      <h3 className="text-center font-semibold text-lg mt-4">{activeTab}</h3>
      <ProductList category="Kids" subcategory={activeTab} />
    </div>
  );
};

export default KidsCategory;
