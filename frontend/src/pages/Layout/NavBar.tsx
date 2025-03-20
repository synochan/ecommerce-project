import { Search, ShoppingCart, User, ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileModal from "@/auth/Profile";
import { useProductContext } from "@/context/ProductContext"; // Import ProductContext

const categories: { [key: string]: string[] } = {
  Men: ["T-Shirts", "Jeans", "Jackets", "Shoes", "Accessories", "Suits", "Sweaters", "Shorts", "Sportswear", "Casual Wear"],
  Women: ["Dresses", "Tops", "Jeans", "Skirts", "Shoes", "Handbags", "Accessories", "Sweaters", "Outerwear", "Sportswear"],
  Kids: ["T-Shirts", "Jeans", "Jackets", "Shoes", "Dresses", "Shorts", "Sweaters", "Accessories", "Sportswear", "Outerwear"],
};

const trendingCategories = ["Best Sellers", "New Arrivals", "Seasonal Picks", "Streetwear", "Luxury", "Casual", "Athleisure", "Workwear", "Eco-Friendly", "Limited Edition"];

export default function Navbar() {
  const { cart } = useProductContext(); // Get cart data from context
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Calculate total items in the cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-black text-gray-300 py-4 px-6 flex items-center justify-between relative">
      <Link to={"/"} className="flex items-center space-x-2">
        <div className="text-lg font-semibold">LOGO</div>
      </Link>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <Menu className="w-6 h-6" />
      </div>

      {/* Navigation Links */}
      <ul className={`lg:flex space-x-6 text-sm uppercase relative ${isMobileMenuOpen ? 'absolute top-full left-0 w-full bg-black flex flex-col space-y-2 p-4' : 'hidden lg:flex'}`}>
        {Object.keys(categories).map((category) => {
          const linkPath = category === "Men" ? "/men" : category === "Women" ? "/women" : category === "Kids" ? "/kids" : "#";

          return (
            <li
              key={category}
              className="relative cursor-pointer hover:text-white"
              onMouseEnter={() => setOpenDropdown(category)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link to={linkPath} className="flex items-center space-x-1">
                <span>{category}</span>
                <ChevronDown className="w-4 h-4" />
              </Link>
              
              {/* Dropdown Menu */}
              {openDropdown === category && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md py-2 z-10">
                  {categories[category].map((item) => (
                    <div key={item} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">{item}</div>
                  ))}
                </div>
              )}
            </li>
          );
        })}

        {/* New & Trending (Separate) */}
        <li
          className="relative cursor-pointer hover:text-white"
          onMouseEnter={() => setOpenDropdown("Trending")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <Link to={"/new-trending"} className="flex items-center space-x-1">
            <span>New & Trending</span>
            <ChevronDown className="w-4 h-4" />
          </Link>

          {/* Dropdown for Trending */}
          {openDropdown === "Trending" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-md py-2 z-10">
              {trendingCategories.map((item) => (
                <div key={item} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">{item}</div>
              ))}
            </div>
          )}
        </li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative flex items-center bg-gray-700 px-3 py-1 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white outline-none placeholder-gray-400 w-28"
          />
          <Search className="w-5 h-5 text-white" />
        </div>

        {/* Cart Icon with Badge */}
        <Link to="/cart" className="relative">
          <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-white" />
          {totalCartItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalCartItems}
            </span>
          )}
        </Link>

        {/* Profile Icon & Modal */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center space-x-2 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <User className="w-6 h-6 text-white" />
          </button>
          <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
