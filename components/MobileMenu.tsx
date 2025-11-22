"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "About Us", link: "about" },
  { id: 3, title: "Cars", link: "cars" },
  { id: 4, title: "Services", link: "services" },
];

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-black hover:text-primary hoverEffect"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {/* Mobile menu items */}
      {isMenuOpen && (
        <nav
          className={`absolute top-16 left-0 right-0 w-full bg-white shadow-md z-40 md:hidden ${
            isMenuOpen && "border-t border-t-gray-200"
          }`}
        >
          <ul className="container mx-auto px-4 flex flex-col gap-0">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="inline-block w-full font-medium text-black hover:bg-neutral-100 hover:border-b-primary hoverEffect
                px-3 py-2 border-b border-gray-200 cursor-pointer group"
                onClick={() => setIsMenuOpen(false)}
              >
                <a
                  href={`#${item.link}`}
                  className="inline-block group-hover:translate-x-5 group-hover:text-primary hoverEffect"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
