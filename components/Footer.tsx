
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-['Pacifico'] text-purple-400 mb-4">
              The Classy Curve
            </h3>
            <p className="text-gray-300 mb-4">
              Your trusted affiliate marketing platform connecting you to the best deals from top e-commerce brands worldwide.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "ri-facebook-fill", href: "#" },
                { icon: "ri-instagram-line", href: "#" },
                { icon: "ri-twitter-line", href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-10 h-10 flex items-center justify-center bg-purple-600 rounded-full hover:bg-purple-700 hover:scale-110 transition-all duration-300"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-200">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/categories", label: "Categories" },
                { href: "/deals", label: "Deals & Offers" },
                { href: "/blog", label: "Reviews" },
                { href: "/compare", label: "Compare Products" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-200">Support</h4>
            <ul className="space-y-3">
              {[
                { href: "/contact", label: "Contact Us" },
                { href: "/about", label: "About Us" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/disclaimer", label: "Disclaimer" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-gray-200">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="ri-whatsapp-line text-green-400 text-xl"></i>
                <span className="text-sm text-gray-300">Mahnoor Khan: +92 309 0289113</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-blue-400 text-xl"></i>
                <span className="text-sm text-gray-300">Mirza Waleed: +92 303 9047048</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-purple-400 text-xl"></i>
                <span className="text-sm text-gray-300">mirzamirza33500@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Classy Curve. All rights reserved. 
            <br className="sm:hidden" />
            We may earn commission from affiliate links.
          </p>
        </div>
      </div>
    </footer>
  );
}
