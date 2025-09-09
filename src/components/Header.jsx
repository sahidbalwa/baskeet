"use client";

import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import { Menu, User, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
      {/* Top bar */}
      <div className="container-responsive flex items-center justify-between gap-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <Image
            src="/Untitled (4).jpeg"
            alt="Baskeet"
            width={42}
            height={42}
            className="rounded-md shadow-sm"
          />
          <span className="font-bold text-2xl tracking-tight group-hover:text-amber-400 transition-colors">
            Baskeet
          </span>
        </a>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-2 sm:px-6">
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
        </div>

        {/* Account & Cart (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-sm font-medium">
          <a
            href="/account"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            <User className="w-5 h-5" />
            <span>Account</span>
          </a>
          <a
            href="/cart"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Search (below logo) */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar />
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="p-4 space-y-4">
            <a
              href="/account"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </a>
            <a
              href="/cart"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
            </a>
            <NavBar />
          </div>
        </div>
      )}

      {/* Desktop Nav */}
      <div className="hidden md:block border-t border-gray-800 bg-gray-900/95">
        <NavBar />
      </div>
    </header>
  );
}
