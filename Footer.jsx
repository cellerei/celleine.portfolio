import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-[#161616] text-yellow-200 font-mono py-8 px-4 font-extrabold">
      <div className="container mx-auto text-center">

        
        {/* Navigation Links */}
        <ul className="list flex flex-wrap justify-center gap-4 mb-6">
          <li><a href="#Experience" className="hover:text-gray-400">Experience</a></li>
          <li><a href="#about" className="hover:text-gray-400">About me</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
        </ul>
        
        {/* Copyright */}
        <p className="text-gray-500 text-sm"> © 2024 Christelle ∣ All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
