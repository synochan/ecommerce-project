export interface Product {
    id: number;
    title: string;
    category: "Men" | "Women" | "Kids" | "New & Trending";
    subcategory: string;
    sizes?: string[];
    price: number;
    description: string;
    imageSrc: string;
    newArrival: boolean;
    isTrending: boolean;
    rating?: number;
  }
  
  export const products: Product[] = [
    // Men
    { id: 1, title: "Men's Jacket", category: "Men", subcategory: "Jackets", price: 49.99, description: "A stylish and warm men's jacket.", imageSrc: "https://i.pinimg.com/400x/78/54/74/7854742ff9e56dec724de97ba7a05aa2.jpg", newArrival: false, isTrending: true },
    { id: 2, title: "Men's T-Shirt", category: "Men", subcategory: "Tshirts", price: 14.99, description: "Casual cotton t-shirt for everyday wear.", imageSrc: "https://i.pinimg.com/736x/23/4f/1e/234f1e923b5f00eaecc62ca7d3fe1a3a.jpg", newArrival: true, isTrending: false },
    { id: 3, title: "Men's Sneakers", category: "Men", subcategory: "Shoes", price: 54.99, description: "Comfortable sneakers for men.", imageSrc: "https://i.pinimg.com/736x/78/cf/63/78cf637ddc02523fb64521acd6ce83b1.jpg", newArrival: true, isTrending: true, sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"] },
    { id: 4, title: "Men's Jeans", category: "Men", subcategory: "Jeans", price: 44.99, description: "Slim-fit denim jeans.", imageSrc: "https://i.pinimg.com/736x/57/08/5f/57085f31a17804021bc2cb795acdd349.jpg", newArrival: false, isTrending: false },
    { id: 5, title: "Men's Cap", category: "Men", subcategory: "Accessories", price: 9.99, description: "Stylish baseball cap.", imageSrc: "https://i.pinimg.com/736x/c6/c8/50/c6c850bcf5bf74155575d2754bb2ff53.jpg", newArrival: true, isTrending: true },
  
    // Women
    { id: 6, title: "Women's Dress", category: "Women", subcategory: "Dresses", price: 59.99, description: "Elegant dress for special occasions.", imageSrc: "https://i.pinimg.com/736x/61/78/f8/6178f8558a7489ba506765ca679aa670.jpg", newArrival: true, isTrending: false },
    { id: 7, title: "Women's Handbag", category: "Women", subcategory: "Handbag", price: 39.99, description: "Classic leather handbag.", imageSrc: "https://i.pinimg.com/736x/96/03/c5/9603c5b5e7c50deb83e4274416fdba48.jpg", newArrival: false, isTrending: true },
    { id: 8, title: "Women's Jacket", category: "Women", subcategory: "Outerwear", price: 69.99, description: "Warm and cozy winter jacket.", imageSrc: "https://i.pinimg.com/736x/8a/c2/35/8ac235e6d2afa2ebb69f880090528da7.jpg", newArrival: true, isTrending: true },
    { id: 9, title: "Women's Scarf", category: "Women", subcategory: "Accessories", price: 24.99, description: "Soft and warm scarf.", imageSrc: "https://i.pinimg.com/736x/f7/ec/3d/f7ec3deba747388ec90126cdabd803d5.jpg", newArrival: false, isTrending: false },
    { id: 10, title: "Women's Perfume", category: "Women", subcategory: "Accessories", price: 49.99, description: "Refreshing floral fragrance.", imageSrc: "https://i.pinimg.com/736x/b2/7a/91/b27a919f93fdeb1d49a6e55ea8ebcb8b.jpg", newArrival: true, isTrending: true },
  
    // Kids
    { id: 11, title: "Kids' Sneakers", category: "Kids", subcategory: "Shoes", price: 29.99, description: "Durable sneakers for kids.", imageSrc: "https://i.pinimg.com/736x/be/fd/01/befd01ad7477159f90c7a16b9daaa51a.jpg", newArrival: true, isTrending: false },
    { id: 12, title: "Kids' Hoodie", category: "Kids", subcategory: "Outerwear", price: 34.99, description: "Warm hoodie for kids.", imageSrc: "https://i.pinimg.com/736x/85/fd/96/85fd962fa0d69039dc7e4ae94fc08097.jpg", newArrival: false, isTrending: true },
    { id: 13, title: "Kids' Backpack", category: "Kids", subcategory: "Accessories", price: 19.99, description: "Colorful school backpack.", imageSrc: "https://i.pinimg.com/736x/36/ff/fa/36fffa3e25c414c187171ef72fb9ed47.jpg", newArrival: true, isTrending: true },
    { id: 14, title: "Kids' Watch", category: "Kids", subcategory: "Accessories", price: 15.99, description: "Fun watch for kids.", imageSrc: "https://i.pinimg.com/736x/a3/e1/b2/a3e1b21c98a831be4c59bb82a676264f.jpg", newArrival: false, isTrending: false },
    { id: 15, title: "Kids' Hat", category: "Kids", subcategory: "Accessories", price: 7.99, description: "Cute and stylish hat.", imageSrc: "https://i.pinimg.com/736x/7c/6d/9e/7c6d9e95ee313cc23a4f5a3400f4923d.jpg", newArrival: true, isTrending: false },
  
    // New & Trending
    { id: 16, title: "Cargo Pants", category: "New & Trending", subcategory: "Streetwear", price: 54.99, description: "Trendy cargo pants with multiple pockets.", imageSrc: "https://i.pinimg.com/736x/88/3d/e7/883de76666c828df7cf892a92aac8304.jpg", newArrival: true, isTrending: true },
    { id: 17, title: "Oversized Hoodie", category: "New & Trending", subcategory: "Casual", price: 59.99, description: "Cozy oversized hoodie.", imageSrc: "https://i.pinimg.com/736x/e6/66/82/e666821600d7e1a0a1977c0c9043d322.jpg", newArrival: true, isTrending: true },
    { id: 18, title: "Graphic T-Shirt", category: "New & Trending", subcategory: "Best Sellers", price: 29.99, description: "Casual t-shirt with trendy prints.", imageSrc: "https://i.pinimg.com/736x/3c/c1/be/3cc1be0732aa6fb38567b96d5dc608ea.jpg", newArrival: false, isTrending: true },
    { id: 19, title: "Kids' Denim Jacket", category: "New & Trending", subcategory: "Seasonal Picks", price: 39.99, description: "Cool denim jacket for kids.", imageSrc: "https://i.pinimg.com/736x/47/2e/d1/472ed15b0be89f14546bde6734ab3939.jpg", newArrival: true, isTrending: false },
    { id: 20, title: "Running Shoes", category: "New & Trending", subcategory: "Athleisure", price: 69.99, description: "Lightweight running shoes.", imageSrc: "https://i.pinimg.com/736x/d8/97/4b/d8974be40e1c7838e6c739c012d5c61e.jpg", newArrival: true, isTrending: true }
  ];
  
  
  
  
  
  
  
  
  
  
  // export interface Product {
  //   id: number;
  //   title: string;
  //   category: "Men" | "Women" | "Kids"; // Removed "New & Trending" as a category
  //   sizes?: string[];
  //   price: number;
  //   description: string;
  //   imageSrc: string;
  //   newArrival: boolean;
  //   isTrending: boolean;
  //   rating?: number; 
  // }
  
  // export const products: Product[] = [
  //   // Men
  //   { id: 1, title: "Men's Jacket", category: "Men", price: 49.99, description: "A stylish and warm men's jacket.", imageSrc: "https://i.pinimg.com/400x/78/54/74/7854742ff9e56dec724de97ba7a05aa2.jpg", newArrival: false, isTrending: true },
  //   { id: 2, title: "Men's T-Shirt", category: "Men", price: 14.99, description: "Casual cotton t-shirt for everyday wear.", imageSrc: "https://i.pinimg.com/736x/23/4f/1e/234f1e923b5f00eaecc62ca7d3fe1a3a.jpg", newArrival: true, isTrending: false },
  //   { id: 3, title: "Men's Sneakers", category: "Men", price: 54.99, description: "Comfortable sneakers for men.", imageSrc: "https://i.pinimg.com/736x/78/cf/63/78cf637ddc02523fb64521acd6ce83b1.jpg", newArrival: true, isTrending: true, sizes: ["US 7", "US 8", "US 9", "US 10", "US 11"] },
  //   { id: 4, title: "Men's Jeans", category: "Men", price: 44.99, description: "Slim-fit denim jeans.", imageSrc: "https://i.pinimg.com/736x/57/08/5f/57085f31a17804021bc2cb795acdd349.jpg", newArrival: false, isTrending: false },
  //   { id: 5, title: "Men's Cap", category: "Men", price: 9.99, description: "Stylish baseball cap.", imageSrc: "https://i.pinimg.com/736x/c6/c8/50/c6c850bcf5bf74155575d2754bb2ff53.jpg", newArrival: true, isTrending: true },
  
  //   // Women
  //   { id: 6, title: "Women's Dress", category: "Women", price: 59.99, description: "Elegant dress for special occasions.", imageSrc: "https://i.pinimg.com/736x/61/78/f8/6178f8558a7489ba506765ca679aa670.jpg", newArrival: true, isTrending: false },
  //   { id: 7, title: "Women's Handbag", category: "Women", price: 39.99, description: "Classic leather handbag.", imageSrc: "https://i.pinimg.com/736x/96/03/c5/9603c5b5e7c50deb83e4274416fdba48.jpg", newArrival: false, isTrending: true },
  //   { id: 8, title: "Women's Jacket", category: "Women", price: 69.99, description: "Warm and cozy winter jacket.", imageSrc: "https://i.pinimg.com/736x/8a/c2/35/8ac235e6d2afa2ebb69f880090528da7.jpg", newArrival: true, isTrending: true },
  //   { id: 9, title: "Women's Scarf", category: "Women", price: 24.99, description: "Soft and warm scarf.", imageSrc: "https://i.pinimg.com/736x/f7/ec/3d/f7ec3deba747388ec90126cdabd803d5.jpg", newArrival: false, isTrending: false },
  //   { id: 10, title: "Women's Perfume", category: "Women", price: 49.99, description: "Refreshing floral fragrance.", imageSrc: "https://i.pinimg.com/736x/b2/7a/91/b27a919f93fdeb1d49a6e55ea8ebcb8b.jpg", newArrival: true, isTrending: true },
  
  //   // Kids
  //   { id: 11, title: "Kids' Sneakers", category: "Kids", price: 29.99, description: "Durable sneakers for kids.", imageSrc: "https://i.pinimg.com/736x/be/fd/01/befd01ad7477159f90c7a16b9daaa51a.jpg", newArrival: true, isTrending: false },
  //   { id: 12, title: "Kids' Hoodie", category: "Kids", price: 34.99, description: "Warm hoodie for kids.", imageSrc: "https://i.pinimg.com/736x/85/fd/96/85fd962fa0d69039dc7e4ae94fc08097.jpg", newArrival: false, isTrending: true },
  //   { id: 13, title: "Kids' Backpack", category: "Kids", price: 19.99, description: "Colorful school backpack.", imageSrc: "https://i.pinimg.com/736x/36/ff/fa/36fffa3e25c414c187171ef72fb9ed47.jpg", newArrival: true, isTrending: true },
  //   { id: 14, title: "Kids' Watch", category: "Kids", price: 15.99, description: "Fun watch for kids.", imageSrc: "https://i.pinimg.com/736x/a3/e1/b2/a3e1b21c98a831be4c59bb82a676264f.jpg", newArrival: false, isTrending: false },
  //   { id: 15, title: "Kids' Hat", category: "Kids", price: 7.99, description: "Cute and stylish hat.", imageSrc: "https://i.pinimg.com/736x/7c/6d/9e/7c6d9e95ee313cc23a4f5a3400f4923d.jpg", newArrival: true, isTrending: false },
  
  //   // New & Trending Items (also belong to a category)
  //   { id: 16, title: "Cargo Pants", category: "Men", price: 54.99, description: "Trendy cargo pants with multiple pockets.", imageSrc: "https://i.pinimg.com/736x/88/3d/e7/883de76666c828df7cf892a92aac8304.jpg", newArrival: true, isTrending: true },
  //   { id: 17, title: "Oversized Hoodie", category: "Women", price: 59.99, description: "Cozy oversized hoodie.", imageSrc: "https://i.pinimg.com/736x/e6/66/82/e666821600d7e1a0a1977c0c9043d322.jpg", newArrival: true, isTrending: true },
  //   { id: 18, title: "Graphic T-Shirt", category: "Men", price: 29.99, description: "Casual t-shirt with trendy prints.", imageSrc: "https://i.pinimg.com/736x/3c/c1/be/3cc1be0732aa6fb38567b96d5dc608ea.jpg", newArrival: false, isTrending: true },
  //   { id: 19, title: "Kids' Denim Jacket", category: "Kids", price: 39.99, description: "Cool denim jacket for kids.", imageSrc: "https://i.pinimg.com/736x/47/2e/d1/472ed15b0be89f14546bde6734ab3939.jpg", newArrival: true, isTrending: false },
  //   { id: 20, title: "Running Shoes", category: "Men", price: 69.99, description: "Lightweight running shoes.", imageSrc: "https://i.pinimg.com/736x/d8/97/4b/d8974be40e1c7838e6c739c012d5c61e.jpg", newArrival: true, isTrending: true },
  // ];
  