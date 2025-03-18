import { useState } from "react";
import ProductList from "../../components/ProductList";
import ProductCarousel from "../../components/ProductCarousel";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"newArrival" | "trending">("newArrival");

  return (
    <div className="p-4 mx-auto max-w-[1400px] mx-auto mt-5">
      {/* Tabs */}
      <div className="flex justify-between px-5 gap-3 ">
        <div className="flex">
          <h3
            className={`text-center border border-black w-fit px-4 cursor-pointer ${
              activeTab === "newArrival" ? "text-white bg-black" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("newArrival")}
          >
            New Arrival
          </h3>
          <h3
            className={`text-center border border-black w-fit px-4 cursor-pointer ${
              activeTab === "trending" ? "text-white bg-black" : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            Trending
          </h3>
        </div>
      </div>

      {/* Conditional Rendering */}
      <div>
        <h3 className="text-center font-semibold text-lg mt-4">
          {activeTab === "newArrival" ? "New Arrival" : "Trending"}
        </h3>
        {activeTab === "newArrival" ? <ProductList isNewArrival /> : <ProductList isTrending={true}/>}
      </div>
      
    </div>
  );
};

export default HeroSection;
