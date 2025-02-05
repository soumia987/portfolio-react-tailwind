import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulaire envoyé');
  };

  return (
    <section id="contact" className="py-16 bg-purple-100"> {/* Light purple background */}
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-pink-700 rounded-md focus:ring-2 focus:ring-pink-700 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-pink-700 rounded-md focus:ring-2 focus:ring-pink-700 transition-all duration-300"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 mt-2 border border-pink-700 rounded-md focus:ring-2 focus:ring-pink-700 transition-all duration-300"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-200 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
