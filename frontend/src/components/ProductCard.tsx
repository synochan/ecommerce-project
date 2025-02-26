

interface ProductCardProps {
  imageSrc?: string;
  title: string;
  subtitle: string;
  price: string;
}

export function ProductCard({ imageSrc, title, subtitle, price }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      {/* Image area */}
      <div className="bg-gray-200 w-[300px] h-[300px] flex items-center justify-center">
        {imageSrc ? <img src={imageSrc} alt={title} /> : <span>Image</span>}
      </div>
      <p className="mt-2 font-semibold text-sm">{title}</p>
      <p className="text-xs text-gray-500">{subtitle}</p>
      <p className="text-sm font-medium">{price}</p>
    </div>
  );
}
