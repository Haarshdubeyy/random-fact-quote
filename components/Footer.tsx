import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800 text-white border-t-4 border-gray-600">
      <div className="container flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">Made by</span>
          <span className="font-bold text-lg">Harsh Dubey</span>
          <span className="text-sm">with</span>
          <Heart 
            className="w-4 h-4 text-red-500 animate-pulse" 
            fill="currentColor"
          />
        </div>
        <div className="mt-2">
          <span className="text-xs">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="mt-2 flex gap-4">
          <a href="https://github.com/haarshdubeyy" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com/harsh_retwt" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            Twitter
          </a>
          <a href="https://linkedin.com/in/harsh-dubey-248227200" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;