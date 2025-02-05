import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Home = () => {
  const homeRef = useRef(null);
  const titleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      homeRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out', delay: 0.5 }
    );
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'bounce.out', delay: 1 }
    );
  }, []);

  return (
    <section 
      id="home" 
      ref={homeRef} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-500 text-white text-center p-8"
    >
      <div className="max-w-4xl">
        <h1 ref={titleRef} className="text-5xl font-extrabold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg opacity-90 mb-6">
          Discover my projects and skills as a passionate web developer.
        </p>

       
        <a 
          ref={buttonRef}
          href="#contact"  
          className="inline-block py-5 px-12 bg-purple-600 text-white font-semibold rounded-lg shadow-2xl hover:bg-purple-700 transition-all duration-300 text-xl"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
};

export default Home;
