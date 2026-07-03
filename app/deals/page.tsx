
'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

export default function DealsPage() {
  const [activeTab, setActiveTab] = useState('all');

  const deals = [
    {
      title: "iPhone 14 Pro Max 128GB - Latest Apple Flagship with Advanced Camera",
      price: "PKR 199,999",
      originalPrice: "PKR 249,999", 
      image: "https://readdy.ai/api/search-image?query=Apple%20iPhone%2014%20Pro%20Max%20in%20deep%20purple%20color%20with%20premium%20titanium%20finish%2C%20professional%20product%20photography%20with%20clean%20white%20background%2C%20flagship%20smartphone%20with%20advanced%20triple%20camera%20system&width=300&height=300&seq=deal1&orientation=squarish",
      platform: "Amazon",
      affiliateLink: "#",
      discount: "20",
      category: "electronics"
    },
    {
      title: "Adidas Ultraboost 22 Running Shoes - Premium Athletic Performance",
      price: "PKR 16,999",
      originalPrice: "PKR 24,999",
      image: "https://readdy.ai/api/search-image?query=Adidas%20Ultraboost%2022%20running%20shoes%20in%20white%20and%20blue%20colorway%20with%20boost%20cushioning%20technology%2C%20professional%20athletic%20footwear%20photography%20with%20clean%20background%2C%20premium%20running%20sneakers&width=300&height=300&seq=deal2&orientation=squarish",
      platform: "Daraz", 
      affiliateLink: "#",
      discount: "32",
      category: "fashion"
    },
    {
      title: "L'Oreal Paris Skincare Set - Complete Anti-Aging Collection",
      price: "PKR 4,999",
      originalPrice: "PKR 7,999",
      image: "https://readdy.ai/api/search-image?query=L%20Oreal%20Paris%20skincare%20collection%20with%20anti-aging%20creams%20serums%20and%20moisturizers%20arranged%20elegantly%2C%20professional%20beauty%20photography%20with%20soft%20lighting%20and%20minimal%20background%2C%20premium%20French%20cosmetic%20products&width=300&height=300&seq=deal3&orientation=squarish",
      platform: "AliExpress",
      affiliateLink: "#", 
      discount: "38",
      category: "beauty"
    },
    {
      title: "IKEA Modern Bookshelf - Scandinavian Design Storage Solution",
      price: "PKR 12,999", 
      originalPrice: "PKR 18,999",
      image: "https://readdy.ai/api/search-image?query=IKEA%20modern%20bookshelf%20with%20Scandinavian%20minimalist%20design%20in%20white%20oak%20finish%2C%20professional%20furniture%20photography%20with%20clean%20room%20setting%2C%20contemporary%20storage%20furniture%20with%20clean%20lines&width=300&height=300&seq=deal4&orientation=squarish",
      platform: "Flipkart",
      affiliateLink: "#",
      discount: "32",
      category: "home"
    },
    {
      title: "Fitbit Versa 4 Smart Fitness Watch - Health and Activity Tracker", 
      price: "PKR 29,999",
      originalPrice: "PKR 39,999",
      image: "https://readdy.ai/api/search-image?query=Fitbit%20Versa%204%20smartwatch%20in%20black%20with%20modern%20sport%20band%20and%20colorful%20fitness%20display%2C%20professional%20wearable%20tech%20photography%20with%20clean%20background%2C%20health%20tracking%20device&width=300&height=300&seq=deal5&orientation=squarish",
      platform: "Amazon",
      affiliateLink: "#",
      discount: "25", 
      category: "fitness"
    },
    {
      title: "LEGO Creator Expert Building Set - Educational Construction Toy",
      price: "PKR 8,999",
      originalPrice: "PKR 12,999", 
      image: "https://readdy.ai/api/search-image?query=LEGO%20Creator%20Expert%20building%20set%20with%20colorful%20blocks%20and%20construction%20pieces%20arranged%20creatively%2C%20professional%20toy%20photography%20with%20bright%20cheerful%20background%2C%20educational%20building%20blocks%20for%20children&width=300&height=300&seq=deal6&orientation=squarish",
      platform: "Daraz",
      affiliateLink: "#",
      discount: "31",
      category: "kids"
    }
  ];

  const coupons = [
    {
      code: "AMAZON20",
      discount: "20% OFF",
      platform: "Amazon", 
      description: "On electronics above PKR 50,000",
      expiry: "Valid till Dec 31, 2024",
      color: "bg-orange-500"
    },
    {
      code: "DARAZ15", 
      discount: "15% OFF",
      platform: "Daraz",
      description: "On fashion items above PKR 25,000", 
      expiry: "Valid till Dec 25, 2024",
      color: "bg-blue-600"
    },
    {
      code: "ALI25",
      discount: "25% OFF", 
      platform: "AliExpress",
      description: "On beauty products above PKR 10,000",
      expiry: "Valid till Dec 28, 2024", 
      color: "bg-red-500"
    }
  ];

  const filteredDeals = activeTab === 'all' ? deals : deals.filter(deal => deal.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Deals & Offers
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Discover incredible discounts and limited-time offers from top brands
          </p>
          <div className="flex items-center justify-center space-x-2 text-lg">
            <i className="ri-time-line"></i>
            <span>Updated Daily • Fresh Deals Every Hour</span>
          </div>
        </div>
      </section>

      {/* Coupon Codes Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Latest Coupon Codes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coupons.map((coupon, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-100 to-white border-2 border-dashed border-gray-300 rounded-lg p-6 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-16 h-16 ${coupon.color} transform rotate-45 translate-x-6 -translate-y-6`}></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 text-white text-xs rounded ${coupon.color}`}>
                      {coupon.platform}
                    </span>
                    <span className="text-2xl font-bold text-green-600">{coupon.discount}</span>
                  </div>
                  <div className="bg-gray-100 px-3 py-2 rounded border-2 border-dashed border-gray-400 mb-3">
                    <code className="font-mono font-bold text-gray-800">{coupon.code}</code>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{coupon.description}</p>
                  <p className="text-xs text-red-600">{coupon.expiry}</p>
                  <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                    Copy Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { key: 'all', label: 'All Deals' },
              { key: 'electronics', label: 'Electronics' }, 
              { key: 'fashion', label: 'Fashion' },
              { key: 'beauty', label: 'Beauty' },
              { key: 'home', label: 'Home' },
              { key: 'fitness', label: 'Fitness' },
              { key: 'kids', label: 'Kids' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === tab.key
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white border border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDeals.map((deal, index) => (
              <ProductCard
                key={index}
                title={deal.title}
                price={deal.price}
                originalPrice={deal.originalPrice}
                image={deal.image}
                platform={deal.platform}
                affiliateLink={deal.affiliateLink}
                discount={deal.discount}
              />
            ))}
            
            {filteredDeals.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                <p className="text-gray-500 text-lg">No deals found in this category</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
