
'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 5 Budget Phones Under PKR 30,000 in 2024",
      excerpt: "Discover the best affordable smartphones that offer premium features without breaking the bank. Complete comparison of specs, cameras, and performance.",
      image: "https://readdy.ai/api/search-image?query=Collection%20of%20budget%20smartphones%20displayed%20professionally%20with%20price%20tags%20and%20feature%20highlights%2C%20tech%20product%20photography%20with%20clean%20background%2C%20affordable%20mobile%20phones%20comparison%20setup%20with%20modern%20lighting&width=400&height=250&seq=blog1&orientation=landscape",
      category: "Electronics",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      slug: "budget-phones-under-30000"
    },
    {
      title: "Amazon vs Daraz vs AliExpress: Which Has Better Deals?",
      excerpt: "Complete platform comparison covering shipping, prices, customer service, and product quality. Find out which platform offers the best value for Pakistani shoppers.",
      image: "https://readdy.ai/api/search-image?query=E-commerce%20platform%20comparison%20with%20Amazon%20Daraz%20and%20AliExpress%20logos%20and%20shopping%20interfaces%20displayed%20side%20by%20side%2C%20professional%20business%20comparison%20photography%20with%20clean%20modern%20layout&width=400&height=250&seq=blog2&orientation=landscape",
      category: "Shopping Guide",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      slug: "amazon-vs-daraz-vs-aliexpress"
    },
    {
      title: "Best Fashion Deals This Winter: Style on a Budget",
      excerpt: "Stay warm and stylish this winter without overspending. Curated list of the best clothing deals from top fashion brands across all major platforms.",
      image: "https://readdy.ai/api/search-image?query=Winter%20fashion%20collection%20with%20stylish%20coats%20jackets%20and%20warm%20clothing%20displayed%20elegantly%2C%20seasonal%20fashion%20photography%20with%20cozy%20lighting%20and%20modern%20styling%2C%20trendy%20winter%20outfits%20arrangement&width=400&height=250&seq=blog3&orientation=landscape",
      category: "Fashion",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      slug: "winter-fashion-deals"
    },
    {
      title: "Smart Home Gadgets Under PKR 15,000: Transform Your Space",
      excerpt: "Affordable smart home devices that will modernize your living space. From smart bulbs to security cameras, discover budget-friendly tech upgrades.",
      image: "https://readdy.ai/api/search-image?query=Modern%20smart%20home%20devices%20including%20smart%20bulbs%20security%20cameras%20and%20IoT%20gadgets%20arranged%20in%20contemporary%20living%20room%20setting%2C%20tech%20product%20photography%20with%20warm%20ambient%20lighting&width=400&height=250&seq=blog4&orientation=landscape",
      category: "Technology",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      slug: "smart-home-gadgets-under-15000"
    },
    {
      title: "Beauty Products Worth the Hype: Honest Reviews",
      excerpt: "Unbiased reviews of trending beauty products. We tested popular skincare and makeup items to separate the gems from the marketing hype.",
      image: "https://readdy.ai/api/search-image?query=Premium%20beauty%20products%20including%20skincare%20cosmetics%20and%20makeup%20items%20arranged%20elegantly%20for%20product%20review%2C%20professional%20beauty%20photography%20with%20soft%20lighting%20and%20clean%20aesthetic&width=400&height=250&seq=blog5&orientation=landscape",
      category: "Beauty",
      readTime: "10 min read",
      date: "Dec 5, 2024",
      slug: "beauty-products-honest-reviews"
    },
    {
      title: "Fitness Equipment for Home Workouts: Complete Guide",
      excerpt: "Build your home gym without breaking the bank. Essential fitness equipment recommendations with price comparisons across multiple platforms.",
      image: "https://readdy.ai/api/search-image?query=Home%20fitness%20equipment%20including%20dumbbells%20yoga%20mats%20resistance%20bands%20and%20workout%20gear%20arranged%20in%20modern%20home%20gym%20setting%2C%20fitness%20product%20photography%20with%20motivational%20lighting&width=400&height=250&seq=blog6&orientation=landscape",
      category: "Fitness",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      slug: "home-fitness-equipment-guide"
    }
  ];

  const categories = [
    "All Posts",
    "Electronics",
    "Fashion",
    "Beauty",
    "Technology",
    "Shopping Guide",
    "Fitness"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Reviews & Shopping Guides
          </h1>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Expert reviews, buying guides, and tips to help you make informed shopping decisions
          </p>
          <div className="flex items-center justify-center space-x-2">
            <i className="ri-article-line text-2xl"></i>
            <span className="text-lg">Fresh content updated weekly</span>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors whitespace-nowrap cursor-pointer ${
                  index === 0
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover object-top"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full font-medium">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].category}</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <article key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center cursor-pointer"
                  >
                    Read Full Article
                    <i className="ri-arrow-right-line ml-1"></i>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Stay Updated with Latest Reviews
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get notified when we publish new product reviews, buying guides, and exclusive deal alerts.
          </p>

          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
