"use client";

import React, { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export function PopularNow() {
  const popularProducts = [
    { title: "Adidasks", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Naykiki", subtitle: "Men's Shoes", price: "$90.00" },
    { title: "Pentenjon", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "PumaLAG", subtitle: "Women's Shoes", price: "$100.00" },
    { title: "Adidasks", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Naykiki", subtitle: "Men's Shoes", price: "$90.00" },
    { title: "Pentenjon", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "PumaLAG", subtitle: "Women's Shoes", price: "$100.00" },
  ];

  // Ref for the scrollable container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Popular Now</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex flex-nowrap space-x-[32px] py-4 overflow-x-auto scrollbar-hide px-8"
        >
          {popularProducts.map((product, index) => (
            <ProductCard
              key={index}
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
    </div>
  );
}
