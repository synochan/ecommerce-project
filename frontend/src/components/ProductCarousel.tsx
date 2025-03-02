"use client";

import { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ProductCarousel() {
  const newArrivals = [
    { title: "Product 56", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 2", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 3", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 4", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 5", subtitle: "Men's Shoes", price: "$100.00" },
  ];

  const bestSellers = [
    { title: "Best 1", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 2", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 3", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 4", subtitle: "Women's Shoes", price: "$120.00" },
  ];

  const newArrivalsRef = useRef<HTMLDivElement>(null);
  const bestSellersRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("new");

  const scroll = (direction: "left" | "right") => {
    const container =
      activeTab === "new" ? newArrivalsRef.current : bestSellersRef.current;

    if (!container) return;

    const firstItem = container.firstChild as HTMLElement;
    const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 200; // Default width fallback

    const scrollAmount = Math.round(container.clientWidth / itemWidth) * itemWidth;

    container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between m-4 mb-2">
        <Tabs defaultValue="new" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="space-x-4">
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
            <TabsTrigger value="best">Best Sellers</TabsTrigger>
          </TabsList>
        </Tabs>
        <Link
          to="/products"
          className="text-sm font-medium text-gray-700 hover:underline"
        >
          View All
        </Link>
      </div>

      <Tabs defaultValue="new">
        {/* New Arrivals Tab */}
        <TabsContent value="new">
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft />
            </button>

            <div
              ref={newArrivalsRef}
              className="flex flex-nowrap space-x-4 sm:space-x-8 py-2 sm:py-4 overflow-x-auto scrollbar-hide px-4 sm:px-8 scroll-smooth snap-x"
            >
              {newArrivals.map((product, i) => (
                <div key={i} className="snap-center">
                  <ProductCard
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                  />
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md"
              onClick={() => scroll("right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </TabsContent>

        {/* Best Sellers Tab */}
        <TabsContent value="best">
          <div className="relative">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft />
            </button>

            <div
              ref={bestSellersRef}
              className="flex flex-nowrap space-x-4 sm:space-x-8 py-2 sm:py-4 overflow-x-auto scrollbar-hide px-4 sm:px-8 scroll-smooth snap-x"
            >
              {bestSellers.map((product, i) => (
                <div key={i} className="snap-center">
                  <ProductCard
                    title={product.title}
                    subtitle={product.subtitle}
                    price={product.price}
                  />
                </div>
              ))}
            </div>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md"
              onClick={() => scroll("right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
