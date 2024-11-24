import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaTrophy, FaBook, FaExternalLinkAlt } from 'react-icons/fa';

const About = () => {
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
    <section id="about" className="section bg-white dark:bg-gray-800/50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Professional Summary */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Results-driven Data Analyst with expertise in statistical analysis, machine learning, and data
              visualization, focused on converting complex datasets into actionable insights. Proficient in
              Python, R, SQL, and data libraries such as Pandas and Scikit-Learn, with a track record of
              developing predictive models that support strategic decision-making. Demonstrates strong
              skills in crafting interactive dashboards and visualizations for effective data communication.
              Additionally experienced in front-end development using React.js, JavaScript, and HTML to
              integrate data science solutions into user-friendly web interfaces.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-indigo-600 dark:text-indigo-400" />
              Education
            </h3>
            
            <div className="space-y-8">
              {/* Woxsen University */}
              <div className="space-y-2 border-b border-gray-200 dark:border-gray-700 pb-6">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-medium dark:text-white">Woxsen University</h4>
                  <span className="text-gray-600 dark:text-gray-400">May 2024</span>
                </div>
                <p className="text-lg text-indigo-600 dark:text-indigo-400">MBA, Business Analytics & Finance</p>
                <p className="text-gray-600 dark:text-gray-400">GPA: 2.99/4</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                  <li>Specialization in Business Analytics and Financial Analysis</li>
                  <li>Advanced coursework in Data Science and Machine Learning</li>
                  <li>Member of Analytics Club</li>
                </ul>
              </div>

              {/* St. Mary's Degree College */}
              <div className="space-y-2">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-medium dark:text-white">St. Mary's Degree College</h4>
                  <span className="text-gray-600 dark:text-gray-400">Completed Dec 2021</span>
                </div>
                <p className="text-lg text-indigo-600 dark:text-indigo-400">B.COM, Computers</p>
                <p className="text-gray-600 dark:text-gray-400">CGPA: 7.9/10</p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mt-2">
                  <li>Focus on Computer Applications in Business</li>
                  <li>Completed projects in Business Analytics</li>
                  <li>Active participant in technical workshops and seminars</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Publications */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
              <FaBook className="text-indigo-600 dark:text-indigo-400" />
              Publications
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  Chapter Contribution
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Contributed Chapter 4 titled "A Comprehensive Survey of Deep Learning Approaches in Neurodegenerative Disease
                  Diagnosis and Prediction" to the book "Deep Learning Approaches for Early Diagnosis
                  of Neurodegenerative Diseases."
                </p>
                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Authors:</strong> Pruthvi Boda, Sumanth Munari, K. Sai Rama Prasanth, Shahid Mohammad Ganie
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Copyright:</strong> 2024 | Pages: 18
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>DOI:</strong> 10.4018/979-8-3693-1281-0.ch004
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <a 
                      href="https://www.igi-global.com/chapter/a-comprehensive-survey-of-deep-learning-approaches-in-neurodegenerative-disease-diagnosis-and-prediction/339374"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Publication <FaExternalLinkAlt className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={item}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-3">
              <FaTrophy className="text-indigo-600 dark:text-indigo-400" />
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                    <FaTrophy className="text-lg text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Article Writing Competition 'Impressions'
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    3rd Position
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    IIM Rohtak | January 11, 2022
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
