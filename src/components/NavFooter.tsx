import React, { useState, useEffect } from "react";
import { Menu, X, Umbrella, ChevronRight } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/65 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Umbrella className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl text-slate-100">
              Umbrella Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-blue-500 transition-colors">
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-slate-300 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 text-blue-500 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}>
                Get in Touch <ChevronRight className="inline w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Umbrella className="w-8 h-8 text-blue-500" />
              <span className="font-bold text-xl text-slate-100">
                Umbrella Dev
              </span>
            </div>
            <p className="text-slate-400">
              Providing comprehensive coverage across the entire development
              stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-blue-500">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-slate-400 hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">Web Development</li>
              <li className="text-slate-400">Cloud Architecture</li>
              <li className="text-slate-400">Mentorship</li>
              <li className="text-slate-400">Technical Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-100 font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400"><a href="mailto:timi.nihel@gmail.com" >timi.nihel@gmail.com</a></li>
              <li className="text-slate-400">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Timilehin Adenuga. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
