'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black text-white">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between h-full">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          {/* Tagline */}
          <div className="mb-6 text-gray-400 uppercase tracking-wider font-semibold text-sm">
            Catch your dreams before they fade
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Record. <span className="text-gray-400">Transcribe.</span> <br />
            Unlock Your Mind.
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-8 text-lg sm:text-xl leading-relaxed max-w-xl">
            AI-powered dream journaling that helps you capture your dreams as soon as you wake up, revealing insights, patterns, and creativity hidden in your subconscious.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/info/get-started"
              className="px-6 py-3 sm:px-8 rounded-full bg-white text-black font-semibold flex items-center gap-2 hover:bg-gray-200 transition"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/info/learn-more"
              className="px-6 py-3 sm:px-8 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[28rem] md:h-[28rem] rounded-3xl overflow-hidden flex items-center justify-center hover:scale-105 transition-transform duration-500">
            {/* Image */}
            <img
              src="/globe.svg"
              alt="SnoozeNote"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
