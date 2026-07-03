
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      name: "Fashion",
      count: "2,500+ Products",
      image: "https://readdy.ai/api/search-image?query=Modern%20fashion%20clothing%20collection%20with%20stylish%20apparel%20including%20dresses%20shirts%20and%20accessories%20displayed%20elegantly%2C%20professional%20fashion%20photography%20with%20soft%20lighting%20and%20clean%20minimal%20background%2C%20trendy%20clothing%20items%20arranged%20aesthetically&width=400&height=250&seq=cat-fashion&orientation=landscape",
      description: "Trendy clothes, shoes, accessories for men and women"
    },
    {
      name: "Electronics", 
      count: "1,800+ Products",
      image: "https://readdy.ai/api/search-image?query=Modern%20electronic%20devices%20including%20smartphones%20tablets%20laptops%20and%20gadgets%20arranged%20professionally%2C%20tech%20product%20photography%20with%20clean%20white%20background%2C%20various%20consumer%20electronics%20with%20sleek%20modern%20design&width=400&height=250&seq=cat-electronics&orientation=landscape",
      description: "Latest smartphones, laptops, gadgets and tech accessories"
    },
    {
      name: "Beauty",
      count: "1,200+ Products", 
      image: "https://readdy.ai/api/search-image?query=Luxury%20beauty%20products%20including%20cosmetics%20skincare%20items%20makeup%20brushes%20and%20perfumes%20arranged%20elegantly%2C%20professional%20beauty%20photography%20with%20soft%20pastel%20background%2C%20premium%20cosmetic%20products%20with%20sophisticated%20packaging&width=400&height=250&seq=cat-beauty&orientation=landscape",
      description: "Cosmetics, skincare, fragrances and beauty tools"
    },
    {
      name: "Home Decor",
      count: "900+ Products",
      image: "https://readdy.ai/api/search-image?query=Stylish%20home%20decoration%20items%20including%20vases%20cushions%20candles%20and%20decorative%20accessories%20arranged%20beautifully%2C%20interior%20design%20photography%20with%20warm%20lighting%20and%20elegant%20background%2C%20modern%20home%20decor%20products%20with%20sophisticated%20styling&width=400&height=250&seq=cat-homedecor&orientation=landscape", 
      description: "Furniture, decorative items and home improvement"
    },
    {
      name: "Fitness",
      count: "650+ Products",
      image: "https://readdy.ai/api/search-image?query=Fitness%20equipment%20and%20workout%20gear%20including%20dumbbells%20yoga%20mats%20athletic%20wear%20and%20sports%20accessories%2C%20professional%20fitness%20photography%20with%20dynamic%20lighting%20and%20clean%20background%2C%20modern%20exercise%20equipment%20for%20healthy%20lifestyle&width=400&height=250&seq=cat-fitness&orientation=landscape",
      description: "Exercise equipment, activewear and health supplements"
    },
    {
      name: "Kids",
      count: "1,100+ Products",
      image: "https://readdy.ai/api/search-image?query=Colorful%20children%20toys%20and%20kids%20products%20including%20educational%20toys%20games%20stuffed%20animals%20and%20playful%20accessories%2C%20vibrant%20children%20product%20photography%20with%20bright%20cheerful%20background%2C%20safe%20and%20fun%20kids%20items%20with%20joyful%20design&width=400&height=250&seq=cat-kids&orientation=landscape",
      description: "Toys, games, children's clothing and educational items"
    }
  ];

  const featuredProducts = [
    {
      title: "Nike Air Jordan 1 Mid Basketball Shoes - Premium Athletic Footwear",
      price: "PKR 18,999", 
      originalPrice: "PKR 22,999",
      image: "https://readdy.ai/api/search-image?query=Nike%20Air%20Jordan%201%20Mid%20basketball%20shoes%20in%20black%20and%20red%20colorway%20with%20premium%20leather%20construction%2C%20professional%20product%20photography%20with%20clean%20white%20background%2C%20iconic%20sneaker%20design%20with%20Nike%20swoosh%20logo&width=300&height=300&seq=shoe1&orientation=squarish",
      platform: "Amazon",
      affiliateLink: "#",
      discount: "17"
    },
    {
      title: "Samsung 65 4K Smart TV - Ultra HD Entertainment Experience", 
      price: "PKR 89,999",
      originalPrice: "PKR 109,999",
      image: "https://readdy.ai/api/search-image?query=Samsung%2065%20inch%204K%20Smart%20TV%20with%20ultra-thin%20bezel%20and%20sleek%20modern%20design%2C%20professional%20product%20photography%20with%20minimal%20background%2C%20large%20screen%20television%20with%20crystal%20clear%20display%20technology&width=300&height=300&seq=tv1&orientation=squarish",
      platform: "Daraz",
      affiliateLink: "#",
      discount: "18"
    },
    {
      title: "Maybelline New York Makeup Kit - Complete Beauty Collection",
      price: "PKR 3,499",
      originalPrice: "PKR 4,999", 
      image: "https://readdy.ai/api/search-image?query=Maybelline%20makeup%20collection%20with%20lipsticks%20foundation%20mascara%20and%20beauty%20products%20arranged%20elegantly%2C%20professional%20cosmetics%20photography%20with%20soft%20lighting%20and%20clean%20background%2C%20premium%20beauty%20brand%20products&width=300&height=300&seq=makeup1&orientation=squarish",
      platform: "AliExpress",
      affiliateLink: "#",
      discount: "30"
    },
    {
      title: "Wooden Coffee Table Set - Modern Living Room Furniture",
      price: "PKR 25,999",
      originalPrice: "PKR 32,999",
      image: "https://readdy.ai/api/search-image?query=Modern%20wooden%20coffee%20table%20with%20minimalist%20design%20and%20natural%20wood%20finish%2C%20professional%20furniture%20photography%20with%20elegant%20room%20setting%2C%20contemporary%20living%20room%20furniture%20with%20clean%20lines&width=300&height=300&seq=table1&orientation=squarish",
      platform: "Flipkart", 
      affiliateLink: "#",
      discount: "21"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Product Categories
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our extensive collection of products across multiple categories from top brands and platforms
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link 
                href={`/categories/${category.name.toLowerCase()}`}
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium">{category.count}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                    <span>Shop Now</span>
                    <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products from Categories */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Featured from Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked products from our most popular categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                platform={product.platform}
                affiliateLink={product.affiliateLink}
                discount={product.discount}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
