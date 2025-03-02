// data.ts
export interface Product {
    id: string;
    title: string;
    category: string;
    price: string;
    description: string;
    sizes: string[];
    rating: number;
  }
  
  export const products: Product[] = [
    {
      id: "56",
      title: "Product 56",
      category: "Men's Shoes",
      price: "$100.00",
      description:
        "A high-quality men's shoe designed for comfort and durability.",
      sizes: ["US 7.5", "US 8", "US 9", "US 10"],
      rating: 4.5,
    },
    {
      id: "2",
      title: "Product 2",
      category: "Men's Shoes",
      price: "$100.00",
      description: "Classic design with modern comfort.",
      sizes: ["US 8", "US 8.5", "US 9", "US 10"],
      rating: 4.7,
    },
    {
      id: "3",
      title: "Product 3",
      category: "Men's Shoes",
      price: "$100.00",
      description: "Premium leather shoes for all-day wear.",
      sizes: ["US 7", "US 8", "US 9.5", "US 10.5"],
      rating: 4.8,
    },
    {
      id: "best-1",
      title: "Best 1",
      category: "Women's Shoes",
      price: "$120.00",
      description: "Stylish women's shoes with extra cushioning.",
      sizes: ["US 6", "US 7", "US 8"],
      rating: 4.9,
    },
  ];
  