import React, { useState, useEffect } from "react";
import { Menu, X, Umbrella, ChevronRight } from "lucide-react";
import Link from "next/link";

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
    // { name: "Contact", href: "#contact" },
    { name: "Blog - Coming Soon", href: "#" },
  ];

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/65 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <Umbrella className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-slate-100">
              Umbrella Dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 transition-colors hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-slate-300 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-2 text-slate-300 transition-colors hover:text-blue-500"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-3 py-2 font-semibold text-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch <ChevronRight className="inline h-4 w-4" />
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
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 flex items-center space-x-2">
              <Umbrella className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-slate-100">
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
            <h3 className="mb-4 font-semibold text-slate-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-400 hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-slate-400 hover:text-blue-500"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-blue-500"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-400 hover:text-blue-500"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-100">Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">Web Development</li>
              <li className="text-slate-400">Cloud Architecture</li>
              <li className="text-slate-400">Mentorship</li>
              <li className="text-slate-400">Technical Education</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-100">Contact</h3>
            <ul className="space-y-2">
              <li className="text-slate-400">
                <a href="mailto:timi.nihel@gmail.com">timi.nihel@gmail.com</a>
              </li>
              <li className="text-slate-400">Lagos, Nigeria</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>
            © {new Date().getFullYear()} Timilehin Adenuga. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
