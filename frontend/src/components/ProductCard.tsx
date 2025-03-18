interface ProductCardProps {
    title: string;
    category: string;
    price: number;
    imageSrc?: string;
    hoverEffect?: "zoom" | "fade" | "none"; // Three hover effect options
  }
  
  export default function ProductCard({ 
    imageSrc, 
    title, 
    category, 
    price, 
    hoverEffect = "zoom" 
  }: ProductCardProps) {
    return (
      <div
        className={`flex flex-col items-start text-center max-w-[400px] transition-all duration-300 ${
          hoverEffect === "zoom" ? "hover:scale-[1.01]" : ""
        }`}
      >
        <div
          className={`bg-gray-200 flex items-center justify-center w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-gray-400 overflow-hidden transition-all duration-300 
            ${hoverEffect === "zoom" ? "hover:scale-105" : ""}
            ${hoverEffect === "fade" ? "hover:opacity-80" : ""}
          `}
        >
          {imageSrc ? <img src={imageSrc} className="object-cover w-full h-full " /> : <span>{title}</span>}
        </div>
  
        <p className="mt-3 text-lg font-medium">{title}</p>
        <p className="text-gray-500 text-sm my-1">{category}</p>
        <p className="text-sm mt-1 font-semibold">${price}</p>
      </div>
    );
  }
  