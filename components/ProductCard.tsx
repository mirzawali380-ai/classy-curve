
'use client';

interface ProductCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  platform: string;
  affiliateLink: string;
  discount?: string;
}

export default function ProductCard({
  title,
  price,
  originalPrice,
  image,
  platform,
  affiliateLink,
  discount
}: ProductCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        {discount && (
          <div className="absolute top-3 left-3 z-10 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-bold">
            {discount}% OFF
          </div>
        )}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded font-medium ${
            platform === 'Amazon' ? 'bg-orange-100 text-orange-600' :
            platform === 'Daraz' ? 'bg-blue-100 text-blue-600' :
            platform === 'AliExpress' ? 'bg-red-100 text-red-600' :
            'bg-yellow-100 text-yellow-600'
          }`}>
            {platform}
          </span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors">
            <i className="ri-heart-line hover:ri-heart-fill"></i>
          </button>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-bold text-purple-600">{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">{originalPrice}</span>
          )}
        </div>
        
        <a
          href={affiliateLink}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block group-hover:scale-105 whitespace-nowrap"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop Now
          <i className="ri-external-link-line ml-2"></i>
        </a>
      </div>
    </div>
  );
}
