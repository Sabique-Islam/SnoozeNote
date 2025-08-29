'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/assets/icon.svg" 
              alt="SnoozeNote" 
              width={40} 
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 filter invert"
            />
            <span className="font-bold text-lg sm:text-xl lg:text-2xl text-black">
              SnoozeNote
            </span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center space-x-8">
            <Link href="/info/features" className="text-gray-600 hover:text-black transition-colors text-base">
              Features
            </Link>
            <Link href="/info/walkthrough" className="text-gray-600 hover:text-black transition-colors text-base">
              Walkthrough
            </Link>
          </div>

          <div className="hidden md:block">
            <Button size="sm" className="px-4 py-2 text-sm bg-black text-white hover:bg-gray-800 transition-colors">
              <Link href="/info/get-started">Get Started</Link>
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <Link 
              href="/info/features" 
              className="block text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/info/walkthrough" 
              className="block text-gray-600 hover:text-black transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Walkthrough
            </Link>
            <Button size="sm" className="w-full mt-4 bg-black text-white hover:bg-gray-800 transition-colors">
              <Link href="/info/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
