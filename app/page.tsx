

"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Quote, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

function Page() {
  return (
    <div className="relative min-h-screen bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-6 animate-fade-in">
            Discover & Learn
          </h1>
          <p className="text-xl text-gray-100 mb-8">
            Explore random facts and inspiring quotes that will brighten your day
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Facts Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 transform transition-all hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <Sparkles size={48} className="text-yellow-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Random Facts
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Uncover fascinating facts that will amaze and educate you.
            </p>
            <div className="text-center">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 group">
                <Link href="/fact" className="flex items-center gap-2">
                  Explore Facts
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quotes Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 transform transition-all hover:scale-105">
            <div className="flex items-center justify-center mb-6">
              <Quote size={48} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              Inspiring Quotes
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Find wisdom and motivation from great minds throughout history.
            </p>
            <div className="text-center">
              <Button className="bg-gray-800 text-white hover:bg-gray-700 group">
                <Link href="/quote" className="flex items-center gap-2">
                  Discover Quotes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16">
          <p className="text-gray-100">
            Choose your path to discovery
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Page;


