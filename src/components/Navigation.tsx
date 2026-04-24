"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-semibold tracking-tight text-zinc-900">
          HighBeam Capital
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">About</a>
          <a href="#approach" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Our Approach</a>
          <a href="#contact" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">Contact</a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-zinc-50 border-t border-zinc-200 px-6 py-4 space-y-4">
          <a href="#about" className="block text-zinc-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#approach" className="block text-zinc-600" onClick={() => setIsOpen(false)}>Our Approach</a>
          <a href="#contact" className="block text-zinc-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}