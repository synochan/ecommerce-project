"use client";

import React, { useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function ProductCarousel() {
  // Example data
  const newArrivals = [
    { title: "Product 1", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 2", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 3", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 4", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 5", subtitle: "Men's Shoes", price: "$100.00" },
  ];

  const bestSellers = [
    { title: "Best 2", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 2", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 3", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Best 4", subtitle: "Women's Shoes", price: "$120.00" },
  ];

  // Separate refs for each tab
  const newArrivalsRef = useRef<HTMLDivElement>(null);
  const bestSellersRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("new");

  const scrollLeft = () => {
    const container =
      activeTab === "new" ? newArrivalsRef.current : bestSellersRef.current;
    if (container) {
      container.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container =
      activeTab === "new" ? newArrivalsRef.current : bestSellersRef.current;
    if (container) {
      container.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Header row: Tabs and "View All" link */}
      <div className="flex items-center justify-between mb-2">
        <Tabs defaultValue="new" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="space-x-2">
            <TabsTrigger value="new">New Arrivals</TabsTrigger>
            <TabsTrigger value="best">Best Sellers</TabsTrigger>
          </TabsList>
        </Tabs>
        <a
          href="/products"
          className="text-sm font-medium text-gray-700 hover:underline"
        >
          View All
        </a>
      </div>

      <Tabs defaultValue="new">
        {/* New Arrivals Tab */}
        <TabsContent value="new">
          <div className="relative">
            {/* Left Arrow */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
              onClick={scrollLeft}
            >
              <FaChevronLeft />
            </button>

            {/* Scrollable Container with 32px spacing */}
            <div
              ref={newArrivalsRef}
              className="flex flex-nowrap space-x-[32px] py-4 overflow-x-auto scrollbar-hide px-8"
            >
              {newArrivals.map((product, i) => (
                <ProductCard
                  key={i}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
              onClick={scrollRight}
            >
              <FaChevronRight />
            </button>
          </div>
        </TabsContent>

        {/* Best Sellers Tab */}
        <TabsContent value="best">
          <div className="relative bg-gray-100 p-4">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
              onClick={scrollLeft}
            >
              <FaChevronLeft />
            </button>

            <div
              ref={bestSellersRef}
              className="flex flex-nowrap space-x-[32px] py-4 overflow-x-auto scrollbar-hide px-8"
            >
              {bestSellers.map((product, i) => (
                <ProductCard
                  key={i}
                  title={product.title}
                  subtitle={product.subtitle}
                  price={product.price}
                />
              ))}
            </div>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
              onClick={scrollRight}
            >
              <FaChevronRight />
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
