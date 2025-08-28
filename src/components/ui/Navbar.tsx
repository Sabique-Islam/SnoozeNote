'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-6xl bg-white/95 backdrop-blur-sm rounded-full z-50 mx-4">
      <div className="px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/assets/icon.svg" 
              alt="SnoozeNote" 
              width={40} 
              height={40}
              className="w-8 h-8 filter invert"
            />
            <span className="font-bold text-2xl text-black hidden sm:block">
              SnoozeNote
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/info/features" className="text-gray-600 hover:text-black transition-colors text-lg">Features</Link>
            <Link href="/info/walkthrough" className="text-gray-600 hover:text-black transition-colors text-lg">How it Works</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button size="lg" className="px-6 py-2">
              Get Started
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-6 bg-white rounded-b-3xl">
            <div className="flex flex-col space-y-6">
              <Link href="/info/features" className="text-gray-600 hover:text-black transition-colors text-lg">Features</Link>
              <Link href="/info/walkthrough" className="text-gray-600 hover:text-black transition-colors text-lg">How it Works</Link>
              <Button size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}