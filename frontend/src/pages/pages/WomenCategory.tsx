import { useState } from "react";
import ProductList from "@/components/ProductList";

const subcategories = [
  "DRESSES", "TOPS", "JEANS", "SKIRTS", "SHOES",
  "HANDBAGS", "ACCESSORIES", "SWEATERS", "OUTERWEAR", "SPORTSWEAR"
];

const WomenCategory = () => {
  const [activeTab, setActiveTab] = useState("DRESSES");

  return (
    <div className="p-4 mx-auto max-w-[1400px]">
      {/* Tabs */}
      <div className="overflow-x-auto whitespace-nowrap flex justify-center gap-3 mb-5 p-2 border-b border-gray-300 scrollbar-hide">
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
      <ProductList category="Women" subcategory={activeTab} />
    </div>
  );
};

export default WomenCategory;