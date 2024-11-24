import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaGamepad, FaLaptopCode, FaVolleyballBall, FaMusic, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Game Review Website",
      description: "Dynamic game review platform with comprehensive game information, ratings, and trailers. Integrates RAWG API for game data and YouTube API for trailers, with Firebase authentication.",
      image: "/images/game_critic.png",
      tags: ["React.js", "Firebase", "RAWG API", "Tailwind CSS"],
      github: "https://github.com/Prasanthk4/game-review-site",
      live: "https://game-critic-s.vercel.app/",
      category: "webdev"
    },
    {
      title: "Weather Application",
      description: "Real-time weather application providing accurate forecasts with location-based services. Features a responsive UI and seamless performance across all devices.",
      image: "/images/weather_app.png",
      tags: ["React.js", "Weather API", "Tailwind CSS", "Geolocation"],
      github: "https://github.com/Prasanthk4/weather-app",
      live: "https://cloudlytic.vercel.app/",
      category: "webdev"
    },
    {
      title: "Earthquake Visualizer",
      description: "Interactive web application using Leaflet to visualize real-time earthquake data. Features USGS API integration, interactive mapping, and comprehensive filtering options.",
      image: "/images/Earthquake_visualizer.png",
      tags: ["React.js", "Leaflet", "USGS API", "Tailwind CSS"],
      github: "https://github.com/Prasanthk4/Earthquake-Visualizer",
      live: "https://earthquake-visualizer-gold.vercel.app/",
      category: "webdev"
    },
    {
      title: "Cherry Leaf Disease Classification",
      description: "Developed a machine learning model using Convolutional Neural Networks (CNNs) for identifying cherry leaf diseases. Features real-time disease detection through a user-friendly interface to aid agricultural practices.",
      image: "/images/cherry_health.jpeg",
      tags: ["Python", "TensorFlow", "CNN", "Image Recognition"],
      github: "https://github.com/Prasanthk4/Cherry_Leaf_Disease_Classification",
      category: "ml"
    }
  ];

  const handleImageError = (e) => {
    e.target.src = '/images/placeholder.png'; // Fallback to a placeholder image
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Explore my latest work in web development and machine learning
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('webdev')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === 'webdev'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setActiveFilter('ml')}
            className={`px-6 py-2 rounded-full transition-colors ${
              activeFilter === 'ml'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Machine Learning
          </button>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects
            .filter(project => activeFilter === 'all' || project.category === activeFilter)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      <FaGithub /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Hobbies Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Hobbies & Interests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Gaming */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <FaGamepad className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Gaming</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Enjoy analyzing game mechanics and staying up-to-date with the latest releases, which enhances my problem-solving skills and strategic thinking.
            </p>
          </motion.div>

          {/* Project Development */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <FaLaptopCode className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Project Development</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Passionate about hands-on learning through personal projects, from web applications to machine learning models, expanding my technical knowledge and creativity.
            </p>
          </motion.div>

          {/* Volleyball */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <FaVolleyballBall className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Volleyball</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Active member and setter on volleyball teams, developing strong teamwork, communication, and leadership abilities.
            </p>
          </motion.div>

          {/* Music */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <FaMusic className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Music Enthusiast</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Engaged in music appreciation and exploring various genres, fostering creativity and focus.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:sairamprasanth32781@gmail.com"
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3">
                <FaEnvelope className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-center">sairamprasanth32781@gmail.com</p>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/6301855760"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3">
                <FaWhatsapp className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-center">Click to chat</p>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+916301855760"
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-3">
                <FaPhone className="text-2xl text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Phone</h3>
              <p className="text-indigo-600 dark:text-indigo-400 text-center">+91 6301855760</p>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
