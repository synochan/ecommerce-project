interface Category {
  label: string;
  subcategories: string[];
}

const navCategories: Category[] = [
  {
    label: "MEN",
    subcategories: ["Tops", "Bottoms", "Shoes", "Accessories"],
  },
  {
    label: "WOMEN",
    subcategories: ["Tops", "Bottoms", "Shoes", "Accessories"],
  },
  {
    label: "KIDS",
    subcategories: ["Boys", "Girls", "Shoes", "Accessories"],
  },
  {
    label: "NEW & TRENDING",
    subcategories: ["Latest Releases", "Trending Items"],
  },
];
