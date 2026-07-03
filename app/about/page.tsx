
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '25+', label: 'Partner Platforms' }, 
    { number: '50K+', label: 'Products Listed' },
    { number: '99%', label: 'Customer Satisfaction' }
  ];

  const team = [
    {
      name: 'Mirza Waleed',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20confident%20male%20entrepreneur%20in%20modern%20office%20setting%2C%20wearing%20business%20attire%20with%20warm%20smile%2C%20professional%20headshot%20photography%20with%20clean%20background%2C%20successful%20business%20leader&width=300&height=300&seq=team1&orientation=squarish',
      description: 'Passionate about connecting customers with the best deals from top e-commerce platforms.'
    },
    {
      name: 'Mahnoor Khan', 
      role: 'Customer Support Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20portrait%20of%20friendly%20female%20customer%20support%20manager%20in%20modern%20office%20environment%2C%20wearing%20professional%20attire%20with%20welcoming%20smile%2C%20executive%20headshot%20photography%20with%20soft%20lighting%2C%20approachable%20business%20professional&width=300&height=300&seq=team2&orientation=squarish',
      description: 'Dedicated to providing excellent customer service and support through WhatsApp and other channels.'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust & Transparency',
      description: 'We clearly disclose our affiliate relationships and only promote products we believe in.'
    },
    {
      icon: 'ri-price-tag-3-line', 
      title: 'Best Deals',
      description: 'We constantly search for the most competitive prices and exclusive offers for our users.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We provide dedicated support for all your shopping needs.'
    },
    {
      icon: 'ri-global-line',
      title: 'Wide Selection',
      description: 'Access to products from multiple trusted platforms including Amazon, Daraz, AliExpress, and more.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About The Classy Curve
              </h1>
              <p className="text-xl mb-8">
                Your trusted affiliate marketing platform connecting you to the best deals from top e-commerce brands worldwide.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white/20 rounded-full">
                  <i className="ri-award-line text-2xl"></i>
                </div>
                <div>
                  <p className="font-semibold">Established 2024</p>
                  <p className="text-purple-100">Serving customers across Pakistan</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20e-commerce%20team%20working%20together%20in%20bright%20contemporary%20office%20space%20with%20laptops%20and%20shopping%20displays%2C%20diverse%20professionals%20collaborating%20on%20affiliate%20marketing%20business%2C%20professional%20business%20photography%20with%20warm%20lighting%20and%20modern%20workspace&width=500&height=400&seq=about-hero&orientation=landscape"
                alt="About The Classy Curve"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg">
                How The Classy Curve became Pakistan's trusted affiliate marketing platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  The Classy Curve was founded with a simple mission: to help customers find the best deals and products from trusted e-commerce platforms like Amazon, Daraz, AliExpress, and Flipkart, all in one convenient place.
                </p>
                <p className="text-gray-600 mb-6">
                  We understand that online shopping can be overwhelming with so many options available. That's why we curate the best products, compare prices across platforms, and ensure you get the most value for your money.
                </p>
                <p className="text-gray-600">
                  Our affiliate marketing model allows us to earn commissions on successful purchases, which helps us keep our service free for you while maintaining our commitment to finding the best deals.
                </p>
              </div>
              <div>
                <img
                  src="https://readdy.ai/api/search-image?query=Online%20shopping%20concept%20with%20multiple%20e-commerce%20platform%20logos%20and%20product%20displays%2C%20digital%20marketing%20workspace%20with%20computers%20showing%20various%20shopping%20websites%2C%20modern%20affiliate%20marketing%20business%20setup%20with%20colorful%20product%20images&width=500&height=400&seq=mission&orientation=landscape"
                  alt="Our Mission"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-lg p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Why Trust The Classy Curve?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Transparency</h4>
                    <p className="text-gray-600 text-sm">We clearly disclose our affiliate relationships and commission structure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Quality Curation</h4>
                    <p className="text-gray-600 text-sm">Every product is carefully selected based on quality, reviews, and value</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Customer Support</h4>
                    <p className="text-gray-600 text-sm">Dedicated support team available via WhatsApp and email</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-purple-100 rounded-full flex-shrink-0 mt-1">
                    <i className="ri-check-line text-purple-600"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Regular Updates</h4>
                    <p className="text-gray-600 text-sm">Fresh deals and products added daily to keep selections current</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at The Classy Curve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-full mx-auto mb-4">
                  <i className={`${value.icon} text-2xl text-purple-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind The Classy Curve's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden border border-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust The Classy Curve for the best deals online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/categories" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Browse Products
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors whitespace-nowrap cursor-pointer">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
