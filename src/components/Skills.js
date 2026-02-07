'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaJava, 
  FaPython, 
  FaJs, 
  FaReact, 
  FaNode, 
  FaDocker, 
  FaGit, 
  FaDatabase,
  FaCode,
  FaTools,
  FaServer,
  FaCloud,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { 
  SiSpringboot, 
  SiNextdotjs, 
  SiFlask, 
  SiKubernetes, 
  SiJenkins, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis,
  SiGo,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiLinux
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: FaJava, color: 'from-red-500 to-orange-500' },
        { name: 'Go', icon: SiGo, color: 'from-blue-400 to-cyan-400' },
        { name: 'Python', icon: FaPython, color: 'from-blue-500 to-yellow-500' },
        { name: 'JavaScript', icon: FaJs, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-600 to-blue-800' },
        { name: 'C++', icon: SiCplusplus, color: 'from-blue-700 to-purple-700' },
      ],
      icon: FaCode,
      color: 'from-blue-500 to-purple-600',
      description: 'Proficient in multiple programming languages with strong foundations'
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: SiSpringboot, color: 'from-green-500 to-green-700' },
        { name: 'React.js', icon: FaReact, color: 'from-cyan-400 to-blue-500' },
        { name: 'Next.js', icon: SiNextdotjs, color: 'from-gray-700 to-black' },
        { name: 'Flask', icon: SiFlask, color: 'from-gray-600 to-gray-800' },
        { name: 'Express.js', icon: SiExpress, color: 'from-gray-700 to-gray-900' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-400 to-blue-500' },
      ],
      icon: FaTools,
      color: 'from-green-500 to-teal-600',
      description: 'Modern frameworks for building scalable applications'
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', icon: FaDocker, color: 'from-blue-500 to-blue-700' },
        { name: 'Kubernetes', icon: SiKubernetes, color: 'from-blue-600 to-purple-600' },
        { name: 'Jenkins', icon: SiJenkins, color: 'from-blue-700 to-gray-700' },
        { name: 'Git', icon: FaGit, color: 'from-orange-500 to-red-500' },
        { name: 'Linux', icon: SiLinux, color: 'from-yellow-500 to-black' },
        { name: 'Postman', icon: SiPostman, color: 'from-orange-500 to-red-500' },
      ],
      icon: FaServer,
      color: 'from-purple-500 to-pink-600',
      description: 'Tools for development, deployment, and system administration'
    },
    {
      title: 'Databases',
      skills: [
        { name: 'MySQL', icon: SiMysql, color: 'from-blue-600 to-orange-500' },
        { name: 'MongoDB', icon: SiMongodb, color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-700 to-blue-900' },
        { name: 'Redis', icon: SiRedis, color: 'from-red-500 to-red-700' },
      ],
      icon: FaDatabase,
      color: 'from-orange-500 to-red-600',
      description: 'Database systems for data storage and management'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };



  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 dark:bg-green-400/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-4">
              <FaCode className="w-4 h-4 mr-2" />
              Technical Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technologies</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A comprehensive toolkit of modern technologies and frameworks to build scalable, efficient solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group"
            >
              <motion.div
                className="h-full bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Header */}
                <div className="relative mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`p-4 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-lg`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <category.icon className="w-8 h-8" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {category.skills.length} technologies
                        </p>
                      </div>
                    </div>
                    
                    <motion.button
                      onClick={() => setActiveCategory(activeCategory === categoryIndex ? null : categoryIndex)}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {activeCategory === categoryIndex ? <FaChevronUp /> : <FaChevronDown />}
                    </motion.button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <motion.div
                  className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  initial={{ height: activeCategory === categoryIndex ? "auto" : "200px" }}
                  animate={{ height: activeCategory === categoryIndex ? "auto" : "200px" }}
                  style={{ overflow: "hidden" }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="relative group"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <div className="flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group-hover:shadow-lg">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg mb-3`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <skill.icon className="w-6 h-6" />
                        </motion.div>
                        <span className="font-medium text-gray-900 dark:text-white text-center text-sm">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Expand/Collapse Overlay */}
                {activeCategory !== categoryIndex && category.skills.length > 6 && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-gray-900 to-transparent flex items-end justify-center pb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Click to view all skills
                    </span>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10+", label: "Languages & Frameworks", icon: "🚀" },
            { number: "5+", label: "DevOps Tools", icon: "⚙️" },
            { number: "4", label: "Database Systems", icon: "🗄️" },
            { number: "100%", label: "Learning Mindset", icon: "🧠" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <motion.div
                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;