import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2025 MyPortfolio. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            Twitter
          </a>
          <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
