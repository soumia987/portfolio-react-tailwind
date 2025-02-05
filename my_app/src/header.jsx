import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full bg-gray-800 text-white p-8 transition-all duration-300 ${scrolling ? 'opacity-70' : 'opacity-100'} z-50`}
    >
      <div className="container flex items-center justify-between">
    
        <div className="text-lg font-bold">
          <a className="text-white hover:text-blue-300" href="#Home">Soumia Iradi</a>
        </div>

        <ul className="flex space-x-8 ml-auto">
          <li><a className="text-white hover:text-blue-300" href="#Home">Home</a></li>
          <li><a className="text-white hover:text-blue-300" href="#About">About</a></li>
          <li><a className="text-white hover:text-blue-300" href="#Projects">Projects</a></li>
          <li><a className="text-white hover:text-blue-300" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
