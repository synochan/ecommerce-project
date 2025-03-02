"use client";

import { useRef } from "react";
import { ProductCard } from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function PopularNow() {
  const popularProducts = [
    { title: "Product 1", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 2", subtitle: "Men's Shoes", price: "$90.00" },
    { title: "Product 3", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Product 4", subtitle: "Women's Shoes", price: "$100.00" },
    { title: "Product 5", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 6", subtitle: "Men's Shoes", price: "$90.00" },
    { title: "Product 7", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Product 8", subtitle: "Women's Shoes", price: "$100.00" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const firstItem = scrollRef.current.firstChild as HTMLElement;
    const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 200; // Default width fallback

    const scrollAmount = Math.round(scrollRef.current.clientWidth / itemWidth) * itemWidth;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-8">
      {/* Header */}
      <div className="flex justify-between px-4 items-center mb-4">
        <h2 className="text-xl font-bold">Popular Now</h2>
        <Link to="/products" className="text-blue-500 text-sm">
          View All
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 bg-white rounded-full shadow-md"
          onClick={() => scroll("left")}
        >
          <FaChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex flex-nowrap space-x-4 sm:space-x-8 py-2 sm:py-4 overflow-x-auto scrollbar-hide px-4 sm:px-8 scroll-smooth snap-x"
        >
          {popularProducts.map((product, index) => (
            <div key={index} className="snap-center">
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
    </div>
  );
}
