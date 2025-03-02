import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-4 sm:py-6 bg-gray-800 text-white border-t-4 border-gray-600">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-2 sm:gap-3">
        <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-center">
          <span className="text-xs sm:text-sm">Made by</span>
          <span className="font-bold text-base sm:text-lg">Harsh Dubey</span>
          <span className="text-xs sm:text-sm">with</span>
          <Heart 
            className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 animate-pulse" 
            fill="currentColor"
          />
        </div>
        <div className="mt-1 sm:mt-2">
          <span className="text-[10px] sm:text-xs">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="mt-1 sm:mt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a 
            href="https://github.com/haarshdubeyy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs sm:text-sm hover:text-red-500 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://twitter.com/harsh_retwt" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs sm:text-sm hover:text-red-500 transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://linkedin.com/in/harsh-dubey-248227200" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs sm:text-sm hover:text-red-500 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;