'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaPlay, 
  FaCode, 
  FaRocket,
  FaEye,
  FaHeart,
  FaStar,
  FaArrowRight
} from 'react-icons/fa';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: 'Real-Time Chat Application',
      subtitle: 'Full-Stack Communication Platform',
      description:
        'Built a real-time chat platform using Go backend with WebSocket-driven messaging and JWT authentication. Implemented React.js frontend with Tailwind CSS for responsive UI. Features private and group chat routing with MongoDB for persistent storage, Context API for state management, and PWA support for offline functionality.',
      image: '/chat-app.png',
      github: 'https://github.com/drashti-2005/realtime-chat-app',
      demo: '',
      video: '',
      tags: ['Go', 'React.js', 'WebSockets', 'MongoDB', 'JWT', 'Tailwind CSS', 'Vite', 'PWA'],
      category: 'Real-Time App',
      status: 'Development',
      features: ['WebSocket Messaging', 'JWT Authentication', 'Private & Group Chats', 'MongoDB Storage', 'PWA Support', 'Real-time Typing Indicators'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      id: 2,
      title: 'Task Manager – Full Stack Web Application',
      subtitle: 'Collaborative Task Management Platform',
      description:
        'Built a secure full-stack task management platform with role-based access control, team collaboration, and multi-workspace support. Implemented JWT-based authentication, task CRUD operations, analytics dashboard, and activity logging using MongoDB Atlas. Designed RESTful APIs using Express.js and developed a responsive user interface with React and Tailwind CSS.',
      image: '/task_manager.jpg',
      github: 'https://github.com/drashti-2005/task-manager',
      demo: '',
      video: '',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      category: 'Full-Stack',
      status: 'Development',
      features: ['Role-Based Access Control', 'Team Collaboration', 'Analytics Dashboard', 'Activity Logging', 'Multi-Workspace Support', 'RESTful API'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      title: 'Employee Performance Appraisal System (E-PAS)',
      subtitle: 'Full-Stack Performance Management Platform',
      description:
        'A comprehensive full-stack application for managing employee performance reviews, appraisals, and organizational workflows. Built with modern technologies including Vite, React, and PrimeReact for the frontend, and Express with MongoDB for a robust backend. Features employee management, performance tracking, and seamless organizational workflow automation.',
      image: '/e_office.png',
      github: 'https://github.com/neha-200512/E_Office',
      demo: 'https://e-office-57u7.onrender.com/',
      video: '',
      tags: ['React', 'Vite', 'Express.js', 'MongoDB', 'Tailwind CSS', 'PrimeReact', 'Mongoose'],
      category: 'Full-Stack',
      status: 'Live',
      features: ['Performance Reviews', 'Employee Management', 'Workflow Automation', 'Appraisal Tracking', 'MongoDB Integration', 'Modern UI/UX'],
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const handleUnavailableClick = () => {
    alert('This feature is currently unavailable for this project.');
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
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
              Portfolio Showcase
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A collection of my best work showcasing various technologies and problem-solving approaches
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 relative"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <motion.span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' 
                        : 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <div className={`w-2 h-2 rounded-full mr-2 ${
                      project.status === 'Live' ? 'bg-green-500' : 'bg-orange-500'
                    } ${project.status === 'Live' ? 'animate-pulse' : ''}`} />
                    {project.status}
                  </motion.span>
                </div>

                {/* Image Container */}
                <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  />

                  {/* Quick Actions */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ scale: 0.8 }}
                    animate={{ 
                      scale: hoveredProject === project.id ? 1 : 0.8,
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white shadow-lg"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>

                    {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white shadow-lg"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.a>
                    ) : (
                      <motion.button
                        onClick={handleUnavailableClick}
                        className="p-3 bg-gray-300/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-full text-gray-500 cursor-not-allowed shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </motion.button>
                    )}
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs"
                        >
                          <FaStar className="w-2 h-2 mr-1" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="w-5 h-5" />
                      </motion.a>

                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaEye className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>

                    <motion.button
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm flex items-center space-x-1 group"
                      whileHover={{ x: 5 }}
                    >
                      <span>Learn More</span>
                      <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <FaRocket className="w-5 h-5" />
                <span>View All Projects</span>
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { number: "10+", label: "Projects Built", icon: "🚀" },
            { number: "5+", label: "Technologies Used", icon: "⚡" },
            { number: "100%", label: "Code Quality", icon: "✨" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
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

export default Projects;
