import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12 animate__animated animate__fadeIn animate__delay-1s">
          My Projects
        </h2>
        <div className="space-y-12">
          {/* Project 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project 1: Portfolio Website</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A personal portfolio website built with React and Tailwind CSS. This project showcases my skills and includes sections like About, Projects, and Contact.
            </p>
            <a href="https://github.com/soumia987/my_portfolio" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 font-semibold">
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project 2: calculatrice app</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A fully functional calculatrice app built with js. It allows users to make addition ,substraction...
            </p>
            <a href="https://github.com/soumia987/calculatrice.js" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 font-semibold">
              View Project
            </a>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-4s">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Project 3: Task Manager App</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              A task management app built with React and Firebase for real-time data syncing. Users can create, edit, and delete tasks while tracking progress.
            </p>
            <a href="https://github.com/soumia987/task-manager" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 font-semibold">
              View Project
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
