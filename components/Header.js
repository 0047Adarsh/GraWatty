"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          Grawatty
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="hover:text-black text-gray-600">Features</a>
          <a href="#about" className="hover:text-black text-gray-600">About</a>
          <a href="#contact" className="hover:text-black text-gray-600">Contact</a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition"
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-6 space-y-4 text-sm">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
