// src/components/Footer/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="left-0 w-full bg-gray-800 text-white ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
        
          <div className=" md:mb-0">
            <h3 className="text-xl font-bold mb-1">Mon Portfolio</h3>
            <p>© 2025 Tous droits réservés</p>
          </div>

        

         
          <div>
            <h4 className="text-lg font-bold mb-2">Me suivre</h4>
            <div className="flex space-x-10">
              <a href="https://github.com" className="hover:text-black-300">GitHub</a>
              <a href="https://linkedin.com" className="hover:text-black-300">LinkedIn</a>
              <a href="https://twitter.com" className="hover:text-black-300">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;