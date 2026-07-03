
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-['Pacifico'] text-purple-600 hover:text-purple-700 hover:scale-105 transition-all duration-300">
            The Classy Curve
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/categories", label: "Categories" },
              { href: "/deals", label: "Deals" },
              { href: "/blog", label: "Reviews" },
              { href: "/compare", label: "Compare" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" }
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="text-gray-700 hover:text-purple-600 hover:scale-105 transition-all duration-300 font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-purple-600 text-white rounded-lg transition-all duration-300 hover:bg-purple-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-lg">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/categories", label: "Categories" },
                { href: "/deals", label: "Deals & Offers" },
                { href: "/blog", label: "Reviews" },
                { href: "/compare", label: "Compare" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 px-4 py-2 rounded-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
