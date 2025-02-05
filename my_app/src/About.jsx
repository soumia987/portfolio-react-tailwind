import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-purple-200 to-pink-300">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">About Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <p className="text-gray-700 mb-4">
            Hi, I'm <span className="font-semibold text-gray-900">SOUMIA IRADI</span>, a passionate web developer with a focus on front-end technologies like React, Tailwind CSS, and JavaScript. I love creating intuitive, responsive, and beautiful web applications that provide a great user experience.
          </p>
          <p className="text-gray-700 mb-4">
            I specialize in building clean, maintainable, and scalable web solutions. My journey in web development began a few years ago, and since then, I have worked on various projects ranging from small personal websites to large-scale applications. I am always eager to learn new technologies and improve my skill set.
          </p>
          <p className="text-gray-700">
            When I'm not coding, I enjoy learning about the latest trends in web development, contributing to open-source projects, and exploring creative ways to solve problems. If you have a project in mind or just want to chat, feel free to reach out to me!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
