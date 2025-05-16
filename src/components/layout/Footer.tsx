'use client';

import React from 'react';

/**
 * Footer component for the application
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Headless Commerce POC. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
