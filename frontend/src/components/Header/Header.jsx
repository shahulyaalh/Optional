"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/products", label: "Products" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 theme-transition ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4" // Set background color to white when not scrolled
      }`}
    >
      <div className="container-custom mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 z-10">
          <motion.img
            src={logo}
            alt="Stair Ecosystem"
            className="w-12 h-12 object-contain"
            whileHover={{
              rotate: [0, -10, 10, -5, 0],
              transition: { duration: 0.5 },
            }}
          />
          <div className="flex flex-col">
            <span className="hidden md:inline text-xl font-bold text-blue-700 dark:text-blue-400">
              Stair Ecosystem
            </span>
            <span className="hidden md:inline text-xs text-gray-600 dark:text-gray-400">
              Solar Energy & CCTV Solutions
            </span>
          </div>
        </Link>

        {/* Mobile Logo (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
            Stair Ecosystem
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-base font-medium transition-colors hover:text-blue-700 dark:hover:text-blue-400 ${
                location.pathname === link.path
                  ? "text-blue-700 dark:text-blue-400"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-700 dark:bg-blue-400"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full overflow-hidden"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`text-lg font-medium ${
                    location.pathname === link.path
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
