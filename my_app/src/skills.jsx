import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 ">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* Skill 1 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">JavaScript</h3>
          </div>
          
          {/* Skill 2 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
          </div>
          
          {/* Skill 3 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
          </div>
          
          {/* Skill 4 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js</h3>
          </div>
          
          {/* Skill 5 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Bootstrap</h3>
          </div>
          
          {/* Skill 6 */}
          <div className="bg-pink-100 p-6 rounded-xl shadow-lg hover:shadow-2xl text-center transform transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Git & GitHub</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
