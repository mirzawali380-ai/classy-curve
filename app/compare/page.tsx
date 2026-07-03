'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComparePage() {
  const [selectedCategory, setSelectedCategory] = useState('smartphones');

  const comparisonData = {
    smartphones: {
      title: "iPhone 15 Pro Max vs Samsung Galaxy S24 Ultra",
      product1: {
        name: "iPhone 15 Pro Max",
        image: "https://readdy.ai/api/search-image?query=Apple%20iPhone%2015%20Pro%20Max%20in%20titanium%20blue%20color%20with%20premium%20design%20and%20advanced%20camera%20system%2C%20professional%20product%20photography%20with%20clean%20white%20background%2C%20flagship%20smartphone%20with%20elegant%20finish&width=300&height=300&seq=compare1&orientation=squarish",
        platforms: [
          { name: "Amazon", price: "PKR 249,999", link: "#", available: true },
          { name: "Daraz", price: "PKR 259,999", link: "#", available: true }, 
          { name: "AliExpress", price: "Not Available", link: "#", available: false },
          { name: "Flipkart", price: "PKR 255,999", link: "#", available: true }
        ],
        specs: {
          "Display": "6.7\" Super Retina XDR",
          "Processor": "A17 Pro Bionic",
          "RAM": "8GB",
          "Storage": "128GB",
          "Camera": "48MP Triple Camera",
          "Battery": "4441mAh",
          "OS": "iOS 17"
        }
      },
      product2: {
        name: "Samsung Galaxy S24 Ultra",
        image: "https://readdy.ai/api/search-image?query=Samsung%20Galaxy%20S24%20Ultra%20smartphone%20in%20titanium%20gray%20color%20with%20S%20Pen%20stylus%20and%20premium%20build%20quality%2C%20professional%20product%20photography%20with%20minimal%20background%2C%20flagship%20Android%20device&width=300&height=300&seq=compare2&orientation=squarish",
        platforms: [
          { name: "Amazon", price: "PKR 189,999", link: "#", available: true },
          { name: "Daraz", price: "PKR 199,999", link: "#", available: true },
          { name: "AliExpress", price: "PKR 179,999", link: "#", available: true },
          { name: "Flipkart", price: "PKR 194,999", link: "#", available: true }
        ],
        specs: {
          "Display": "6.8\" Dynamic AMOLED 2X", 
          "Processor": "Snapdragon 8 Gen 3",
          "RAM": "12GB",
          "Storage": "256GB",
          "Camera": "200MP Quad Camera",
          "Battery": "5000mAh",
          "OS": "Android 14"
        }
      }
    },
    laptops: {
      title: "MacBook Air M2 vs Dell XPS 13",
      product1: {
        name: "MacBook Air M2",
        image: "https://readdy.ai/api/search-image?query=Apple%20MacBook%20Air%20M2%20in%20space%20gray%20color%20with%20ultra-thin%20design%20and%20modern%20aesthetic%2C%20professional%20laptop%20photography%20with%20clean%20background%2C%20premium%20ultrabook%20computer&width=300&height=300&seq=compare3&orientation=squarish",
        platforms: [
          { name: "Amazon", price: "PKR 189,999", link: "#", available: true },
          { name: "Daraz", price: "PKR 199,999", link: "#", available: true },
          { name: "AliExpress", price: "Not Available", link: "#", available: false },
          { name: "Flipkart", price: "PKR 194,999", link: "#", available: true }
        ],
        specs: {
          "Display": "13.6\" Liquid Retina",
          "Processor": "Apple M2 Chip", 
          "RAM": "8GB Unified Memory",
          "Storage": "256GB SSD",
          "Graphics": "8-core GPU",
          "Battery": "Up to 18 hours",
          "Weight": "1.24 kg"
        }
      },
      product2: {
        name: "Dell XPS 13",
        image: "https://readdy.ai/api/search-image?query=Dell%20XPS%2013%20laptop%20in%20platinum%20silver%20with%20InfinityEdge%20display%20and%20premium%20build%20quality%2C%20professional%20laptop%20photography%20with%20modern%20lighting%2C%20ultrabook%20computer%20with%20sleek%20design&width=300&height=300&seq=compare4&orientation=squarish",
        platforms: [
          { name: "Amazon", price: "PKR 159,999", link: "#", available: true },
          { name: "Daraz", price: "PKR 169,999", link: "#", available: true },
          { name: "AliExpress", price: "PKR 149,999", link: "#", available: true },
          { name: "Flipkart", price: "PKR 164,999", link: "#", available: true }
        ],
        specs: {
          "Display": "13.4\" FHD+ InfinityEdge",
          "Processor": "Intel Core i7-1260P",
          "RAM": "16GB LPDDR5",
          "Storage": "512GB SSD", 
          "Graphics": "Intel Iris Xe",
          "Battery": "Up to 12 hours",
          "Weight": "1.27 kg"
        }
      }
    }
  };

  const categories = [
    { key: 'smartphones', label: 'Smartphones' },
    { key: 'laptops', label: 'Laptops' }
  ];

  const currentComparison = comparisonData[selectedCategory as keyof typeof comparisonData];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Product Comparison
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Compare products across multiple platforms to find the best deals and make informed decisions
          </p>
          <div className="flex items-center justify-center space-x-2">
            <i className="ri-scales-line text-2xl"></i>
            <span className="text-lg">Side-by-side comparison with real-time pricing</span>
          </div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === category.key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {currentComparison.title}
            </h2>
            <p className="text-gray-600">
              Detailed comparison across specifications and pricing from different platforms
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Product Headers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={currentComparison.product1.image}
                  alt={currentComparison.product1.name}
                  className="w-32 h-32 object-cover object-top mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentComparison.product1.name}
                </h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <img
                  src={currentComparison.product2.image}
                  alt={currentComparison.product2.name}
                  className="w-32 h-32 object-cover object-top mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentComparison.product2.name}
                </h3>
              </div>
            </div>

            {/* Price Comparison */}
            <div className="bg-white rounded-lg shadow-md mb-8 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-lg font-bold text-gray-800">Price Comparison</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Platform
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {currentComparison.product1.name}
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {currentComparison.product2.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentComparison.product1.platforms.map((platform, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                              platform.name === 'Amazon' ? 'bg-orange-500' :
                              platform.name === 'Daraz' ? 'bg-blue-600' :
                              platform.name === 'AliExpress' ? 'bg-red-500' :
                              'bg-yellow-500'
                            }`}></span>
                            <span className="font-medium">{platform.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {platform.available ? (
                            <div>
                              <span className="font-bold text-green-600">{platform.price}</span>
                              <br />
                              <a
                                href={platform.link}
                                target="_blank"
                                rel="nofollow noopener"
                                className="text-xs text-blue-600 hover:underline cursor-pointer"
                              >
                                View Deal
                              </a>
                            </div>
                          ) : (
                            <span className="text-gray-400">Not Available</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {currentComparison.product2.platforms[index].available ? (
                            <div>
                              <span className="font-bold text-green-600">
                                {currentComparison.product2.platforms[index].price}
                              </span>
                              <br />
                              <a
                                href={currentComparison.product2.platforms[index].link}
                                target="_blank"
                                rel="nofollow noopener"
                                className="text-xs text-blue-600 hover:underline cursor-pointer"
                              >
                                View Deal
                              </a>
                            </div>
                          ) : (
                            <span className="text-gray-400">Not Available</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Specifications Comparison */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h3 className="text-lg font-bold text-gray-800">Specifications</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Feature
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {currentComparison.product1.name}
                      </th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {currentComparison.product2.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(currentComparison.product1.specs).map(([key, value], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-800">
                          {key}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">
                          {value}
                        </td>
                        <td className="px-6 py-4 text-center text-gray-600">
                          {currentComparison.product2.specs[key]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}