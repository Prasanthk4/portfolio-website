import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJava, FaJs, FaHtml5, FaDatabase, FaCode, 
         FaReact, FaNodeJs, FaAws, FaGoogle, FaMicrosoft,
         FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiDjango, SiFlask, SiMongodb, SiMysql, SiPostgresql, 
         SiVisualstudiocode, SiJupyter, SiTensorflow, SiExpress, 
         SiAngular, SiVuedotjs, SiVite } from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-4xl mb-4 text-indigo-600" />,
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "HTML/CSS", icon: <FaHtml5 /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "C/C++", icon: <FaCode /> },
      { name: "R", icon: <FaCode /> }
    ]
  },
  {
    title: "Frameworks & Libraries",
    icon: <FaReact className="text-4xl mb-4 text-indigo-600" />,
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Angular", icon: <SiAngular /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Vite", icon: <SiVite /> }
    ]
  },
  {
    title: "Databases & Cloud",
    icon: <FaDatabase className="text-4xl mb-4 text-indigo-600" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Google Cloud", icon: <FaGoogle /> },
      { name: "Azure", icon: <FaMicrosoft /> }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: <FaGitAlt className="text-4xl mb-4 text-indigo-600" />,
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "VS Code", icon: <SiVisualstudiocode /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "Jupyter", icon: <SiJupyter /> },
      { name: "TensorFlow", icon: <SiTensorflow /> }
    ]
  }
];

const SkillCard = ({ skill }) => {
  return (
    <motion.div 
      className="group flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <span className="text-2xl mr-3 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {skill.icon}
      </span>
      <span className="text-gray-700 dark:text-gray-200 font-medium group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center justify-center mb-6">
        {category.icon}
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-3">{category.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A comprehensive overview of my technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <CategoryCard key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
