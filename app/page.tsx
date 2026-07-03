
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = [
    {
      title: "Samsung Galaxy S24 Ultra 256GB - Latest Flagship Smartphone",
      price: "PKR 189,999",
      originalPrice: "PKR 219,999",
      image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20smartphone%20in%20elegant%20black%20color%20with%20sleek%20modern%20design%2C%20professional%20product%20photography%20with%20minimal%20white%20background%2C%20premium%20flagship%20mobile%20device%20with%20curved%20edges%20and%20sophisticated%20finish&width=400&height=400&seq=phone1&orientation=squarish",
      platform: "Amazon",
      affiliateLink: "#",
      discount: "14"
    },
    {
      title: "Apple iPhone 15 Pro Max 128GB - Premium iOS Experience",
      price: "PKR 249,999",
      originalPrice: "PKR 279,999",
      image: "https://readdy.ai/api/search-image?query=Apple%20iPhone%2015%20Pro%20Max%20in%20titanium%20blue%20color%20with%20premium%20metal%20finish%2C%20professional%20product%20shot%20with%20clean%20white%20background%2C%20luxury%20smartphone%20with%20advanced%20camera%20system%20and%20elegant%20design&width=400&height=400&seq=phone2&orientation=squarish",
      platform: "Daraz",
      affiliateLink: "#",
      discount: "11"
    },
    {
      title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: "PKR 45,999",
      originalPrice: "PKR 52,999",
      image: "https://readdy.ai/api/search-image?query=Sony%20WH-1000XM5%20premium%20wireless%20headphones%20in%20silver%20white%20color%20with%20sleek%20minimalist%20design%2C%20professional%20product%20photography%20with%20soft%20lighting%20and%20clean%20background%2C%20high-end%20audio%20equipment%20with%20modern%20aesthetic&width=400&height=400&seq=headphone1&orientation=squarish",
      platform: "AliExpress",
      affiliateLink: "#",
      discount: "13"
    },
    {
      title: "MacBook Air M2 13-inch 256GB - Ultra-Portable Laptop",
      price: "PKR 189,999",
      originalPrice: "PKR 209,999",
      image: "https://readdy.ai/api/search-image?query=Apple%20MacBook%20Air%20M2%20in%20space%20gray%20color%20with%20ultra-thin%20profile%20and%20modern%20design%2C%20professional%20product%20photography%20with%20clean%20minimal%20background%2C%20premium%20laptop%20computer%20with%20sleek%20aluminum%20finish&width=400&height=400&seq=laptop1&orientation=squarish",
      platform: "Flipkart",
      affiliateLink: "#",
      discount: "10"
    }
  ];

  const categories = [
    {
      name: "Fashion",
      icon: "ri-shirt-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20fashion%20clothing%20collection%20with%20stylish%20apparel%20including%20dresses%20shirts%20and%20accessories%20displayed%20elegantly%2C%20professional%20fashion%20photography%20with%20soft%20lighting%20and%20clean%20minimal%20background%2C%20trendy%20clothing%20items%20arranged%20aesthetically&width=300&height=200&seq=fashion1&orientation=landscape"
    },
    {
      name: "Electronics",
      icon: "ri-smartphone-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20electronic%20devices%20including%20smartphones%20tablets%20laptops%20and%20gadgets%20arranged%20professionally%2C%20tech%20product%20photography%20with%20clean%20white%20background%2C%20various%20consumer%20electronics%20with%20sleek%20modern%20design&width=300&height=200&seq=electronics1&orientation=landscape"
    },
    {
      name: "Beauty",
      icon: "ri-brush-line",
      image: "https://readdy.ai/api/search-image?query=Luxury%20beauty%20products%20including%20cosmetics%20skincare%20items%20makeup%20brushes%20and%20perfumes%20arranged%20elegantly%2C%20professional%20beauty%20photography%20with%20soft%20pastel%20background%2C%20premium%20cosmetic%20products%20with%20sophisticated%20packaging&width=300&height=200&seq=beauty1&orientation=landscape"
    },
    {
      name: "Home Decor",
      icon: "ri-home-line",
      image: "https://readdy.ai/api/search-image?query=Stylish%20home%20decoration%20items%20including%20vases%20cushions%20candles%20and%20decorative%20accessories%20arranged%20beautifully%2C%20interior%20design%20photography%20with%20warm%20lighting%20and%20elegant%20background%2C%20modern%20home%20decor%20products%20with%20sophisticated%20styling&width=300&height=200&seq=homedecor1&orientation=landscape"
    },
    {
      name: "Fitness",
      icon: "ri-run-line",
      image: "https://readdy.ai/api/search-image?query=Fitness%20equipment%20and%20workout%20gear%20including%20dumbbells%20yoga%20mats%20athletic%20wear%20and%20sports%20accessories%2C%20professional%20fitness%20photography%20with%20dynamic%20lighting%20and%20clean%20background%2C%20modern%20exercise%20equipment%20for%20healthy%20lifestyle&width=300&height=200&seq=fitness1&orientation=landscape"
    },
    {
      name: "Kids",
      icon: "ri-bear-smile-line",
      image: "https://readdy.ai/api/search-image?query=Colorful%20children%20toys%20and%20kids%20products%20including%20educational%20toys%20games%20stuffed%20animals%20and%20playful%20accessories%2C%20vibrant%20children%20product%20photography%20with%20bright%20cheerful%20background%2C%20safe%20and%20fun%20kids%20items%20with%20joyful%20design&width=300&height=200&seq=kids1&orientation=landscape"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20e-commerce%20shopping%20hero%20background%20with%20elegant%20gradient%20colors%20and%20subtle%20geometric%20patterns%2C%20professional%20web%20design%20backdrop%20with%20soft%20lighting%20effects%20and%20clean%20minimalist%20aesthetic%20perfect%20for%20affiliate%20marketing%20website&width=1200&height=400&seq=hero-bg&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 to-pink-600/80"></div>
        <div className="relative z-10 text-center px-4 w-full animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-['Pacifico'] font-bold mb-4 animate-pulse">
            Welcome to The Classy Curve
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto opacity-90">
            Your trusted affiliate marketing destination for the best deals from Amazon, Daraz, AliExpress & more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/categories" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg">
              Shop Categories
            </Link>
            <Link href="/deals" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              View Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Top Deals Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Today's Top Deals
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hand-picked products with the best prices and exclusive discounts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard
                title={product.title}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                platform={product.platform}
                affiliateLink={product.affiliateLink}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/deals" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer shadow-lg">
            View All Deals
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Shop by Categories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of product categories from trusted brands
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link 
                href={`/categories/${category.name.toLowerCase()}`}
                key={index}
                className="group relative h-48 bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      <div className="w-12 h-12 flex items-center justify-center mx-auto mb-2 bg-white/20 rounded-full backdrop-blur-sm">
                        <i className={`${category.icon} text-2xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold drop-shadow-lg">{category.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-gray-600">
              Shop with confidence from the world's leading e-commerce platforms
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[ 
              { icon: "ri-amazon-line", color: "text-orange-500", name: "Amazon" },
              { icon: "ri-shopping-bag-line", color: "text-blue-600", name: "Daraz" },
              { icon: "ri-global-line", color: "text-red-500", name: "AliExpress" },
              { icon: "ri-store-line", color: "text-yellow-500", name: "Flipkart" }
            ].map((brand, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105" style={{animationDelay: `${index * 0.1}s`}}>
                <i className={`${brand.icon} text-5xl ${brand.color} mb-3`}></i>
                <h3 className="font-bold text-gray-800">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get notified about the latest deals, offers, and exclusive discounts
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-300"
            />
            <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
