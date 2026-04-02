"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll ke section
  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // menu list biar reusable
  const menus = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "cta" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => handleClick("home")}
        >
          HDM<span className="text-red-500">-Master</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {menus.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="relative group"
            >
              {/* text */}
              <span className="transition group-hover:text-red-500">
                {item.name}
              </span>

              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => handleClick("cta")}
            className="bg-red-500 text-white px-5 py-2 rounded-xl shadow-md hover:scale-105 transition"
          >
            Contact
          </button>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-6 py-6 space-y-4">
          {menus.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="block w-full text-left hover:text-red-500 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}