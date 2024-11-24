import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import AnimatedSphere from '../3d/AnimatedSphere';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Data Analyst", "ML Engineer", "Full Stack Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = null;

    const tick = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(prevText => {
        if (isDeleting) {
          const newText = fullText.substring(0, prevText.length - 1);
          setTypingSpeed(100);
          return newText;
        } else {
          const newText = fullText.substring(0, prevText.length + 1);
          setTypingSpeed(150);
          return newText;
        }
      });

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    ticker = setTimeout(tick, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, roles, typingSpeed]);

  return (
    <div className="role-text-container relative h-[40px] flex items-center">
      <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
        <span>{text}</span>
        <span className="cursor">|</span>
      </h2>
      <style>
        {`
          .cursor {
            display: inline-block;
            margin-left: 3px;
            width: 3px;
            animation: blink 1s infinite;
            color: #4F46E5;
          }

          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }

          .role-text-container {
            min-height: 50px;
            margin-bottom: 2rem;
          }
        `}
      </style>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-gray-800 dark:text-white">Welcome to my portfolio</span>
              <span className="block text-indigo-600 dark:text-indigo-400 mt-2">Sai Rama Prasanth K</span>
            </h1>
            <TypewriterText />
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg transition-all hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg transition-all hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center lg:justify-start space-x-6 mt-6 ml-8 sm:ml-12">
              <a
                href="https://github.com/Prasanthk4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sai-rama-prasanth-k-076777246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* 3D Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <AnimatedSphere />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
