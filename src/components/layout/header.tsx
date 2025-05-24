"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGlobe, FaCreditCard, FaUsers, FaInfoCircle, FaComments, FaBook, FaShapes } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navElement = document.querySelector('nav');
      const target = event.target as Node;
      if (isOpen && navElement && !navElement.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-1 bg-[#673AB7]/95 backdrop-blur-md" : "py-3 bg-[#673AB7]/80"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-bold text-lg sm:text-xl font-jost text-white hover:opacity-90 transition-opacity">
            <strong>Kodular</strong>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>

          {/* Desktop & Mobile Menu */}
          <AnimatePresence>
            <motion.div
              className={`${isOpen ? "absolute top-full left-0 right-0 border-t border-white/10" : "hidden"} 
                md:relative md:flex md:items-center md:border-none
                bg-[#673AB7]/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {/* Primary Navigation */}
              <ul className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 p-4 md:p-0">
                <li>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                      <FaGlobe className="mr-2 text-xs" /> Modules
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                      <DropdownMenuItem>
                        <Link href="/creator" className="flex w-full items-center text-sm">Creator</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="//ide.kodular.io" className="flex w-full items-center text-sm">Extensions IDE</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="//store.kodular.io" className="flex w-full items-center text-sm">Store</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="//my.kodular.io" className="flex w-full items-center text-sm">My Kodular</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li>
                  <Link href="/pricing" className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaCreditCard className="mr-2 text-xs" /> Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaUsers className="mr-2 text-xs" /> Team
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaInfoCircle className="mr-2 text-xs" /> About
                  </Link>
                </li>
              </ul>

              {/* Secondary Navigation */}
              <ul className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 p-4 md:p-0 md:ml-4 border-t md:border-t-0 border-white/10">
                <li>
                  <Link href="//community.kodular.io" className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaComments className="mr-2 text-xs" /> Community
                  </Link>
                </li>
                <li>
                  <Link href="//docs.kodular.io" className="flex items-center text-sm text-white/90 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors">
                    <FaBook className="mr-2 text-xs" /> Docs
                  </Link>
                </li>
                <li className="md:ml-2">
                  <ThemeToggle />
                </li>
                <li className="md:ml-2">
                  <Link
                    href="https://c.kodular.io"
                    className="flex items-center text-sm text-white bg-[#E91E63] hover:bg-[#E91E63]/80 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaShapes className="mr-2 text-xs" /> Create Apps!
                  </Link>
                </li>
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
}
