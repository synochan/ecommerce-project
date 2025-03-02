"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ProductCard } from "@/components/ProductCard";

export function ProductsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const allProducts = [
    { title: "Product 1", subtitle: "Men's Shoes", price: "$100.00" },
    { title: "Product 2", subtitle: "Women's Shoes", price: "$120.00" },
    { title: "Product 3", subtitle: "Men's Shoes", price: "$90.00" },
    { title: "Product 4", subtitle: "Women's Shoes", price: "$110.00" },
    { title: "Product 5", subtitle: "Men's Shoes", price: "$80.00" },
  ];

  const menProducts = allProducts.filter((p) => p.subtitle.includes("Men"));
  const womenProducts = allProducts.filter((p) => p.subtitle.includes("Women"));

  return (
    <div className="w-full max-w-screen-xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-center">All Products</h1>

      <Tabs defaultValue="all" onValueChange={(value) => setActiveTab(value)} className="w-full">
        <TabsList className="flex justify-center sm:justify-start gap-4 mb-6 ">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="men">Men's</TabsTrigger>
          <TabsTrigger value="women">Women's</TabsTrigger>
        </TabsList>

        {/* Responsive Grid Layout */}
        <TabsContent value="all">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="men">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {menProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="women">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {womenProducts.map((product, i) => (
              <ProductCard key={i} {...product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
