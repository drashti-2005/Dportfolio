'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaGithub, FaExternalLinkAlt, FaPlay, FaArrowLeft, FaStar } from 'react-icons/fa';

const ProjectsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [expandedTags, setExpandedTags] = useState({});

  const toggleDescription = (id) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleTags = (id) => {
    setExpandedTags(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleUnavailableClick = () => {
    alert('This feature is currently unavailable for this project.');
  };

  const allProjects = [
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
      highlights: ['WebSocket Messaging', 'JWT Authentication', 'Private & Group Chats', 'MongoDB Storage', 'PWA Support', 'Real-time Typing Indicators'],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      id: 2,
      title: 'OneFlow ERP - Plan to Bill in One Place',
      subtitle: 'Enterprise Resource Planning System',
      description: 'A comprehensive, modular Project Management and ERP system that takes projects from planning to execution to billing—all in one unified platform. Built for teams that need to manage projects, track finances, and collaborate effectively.',
      image: '/OneFlow-ERP.png',
      github: 'https://github.com/drashti-2005/amalthea_odoo_team_75',
      demo: '',
      video: 'https://drive.google.com/file/d/1A25mp8AIBubDR-kPbdf71Y-vr5A-Myof/view?usp=sharing',
      tags: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'ERP'],
      category: 'Full-Stack',
      status: 'Completed',
      highlights: [
        'End-to-end workflow from project planning to billing',
        'Financial integration with Sales Orders, Purchase Orders, Invoices, and Bills',
        'Built-in timesheet management with billable/non-billable hour tracking',
        'Real-time analytics for project profitability and resource utilization',
        'Role-based access control for different team members',
        'Modern UI/UX built with React and responsive design',
      ],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 3,
      title: 'Task Manager – Full Stack Web Application',
      subtitle: 'Team Collaboration Platform',
      description: 'Built a secure full-stack task management platform with role-based access control, team collaboration, and multi-workspace support. Implemented JWT-based authentication, task CRUD operations, analytics dashboard, and activity logging using MongoDB Atlas. Designed RESTful APIs using Express.js and developed a responsive user interface with React and Tailwind CSS.',
      image: '/task_manager.jpg',
      github: 'https://github.com/drashti-2005/task-manager',
      demo: '',
      video: '',
      tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      category: 'Full-Stack',
      status: 'Completed',
      highlights: [
        'Role-based access control with multi-workspace support',
        'JWT-based authentication and secure session handling',
        'Task CRUD operations with team collaboration',
        'Analytics dashboard and activity logging using MongoDB Atlas',
        'RESTful APIs built with Express.js',
        'Responsive UI built with React and Tailwind CSS',
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
            >
              <FaArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Projects</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              All Projects
            </h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              A collection of my work and side projects
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <motion.div
                  className="h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 relative flex flex-col"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <motion.span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' || project.status === 'Completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400' 
                          : 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400'
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <div className={`w-2 h-2 rounded-full mr-2 ${
                        project.status === 'Live' || project.status === 'Completed' ? 'bg-green-500' : 'bg-orange-500'
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
                      ) : project.video ? (
                        <motion.a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white shadow-lg"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaPlay className="w-4 h-4" />
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
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description with Read More */}
                    <div className="flex-grow">
                      <p className={`text-gray-600 dark:text-gray-300 text-sm leading-relaxed ${
                        !expandedDescriptions[project.id] && project.description.length > 150 
                          ? 'line-clamp-3' 
                          : ''
                      }`}>
                        {project.description}
                      </p>
                      {project.description.length > 150 && (
                        <button
                          onClick={() => toggleDescription(project.id)}
                          className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-1 hover:underline"
                        >
                          {expandedDescriptions[project.id] ? 'Show Less' : 'Read More'}
                        </button>
                      )}
                    </div>

                    {/* Highlights - Limited Display */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.highlights.slice(0, 4).map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="inline-flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs"
                          >
                            <FaStar className="w-2 h-2 mr-1" />
                            {highlight}
                          </span>
                        ))}
                        {project.highlights.length > 4 && (
                          <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-300 rounded-md text-xs font-medium">
                            +{project.highlights.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tech Stack - Collapsible */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {(expandedTags[project.id] ? project.tags : project.tags.slice(0, 5)).map((tag, tagIndex) => (
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
                        {project.tags.length > 5 && (
                          <button
                            onClick={() => toggleTags(project.id)}
                            className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xs font-medium hover:shadow-md transition-all"
                          >
                            {expandedTags[project.id] ? 'Show Less' : `+${project.tags.length - 5} More`}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex gap-3 mt-auto">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </motion.a>

                      {project.demo ? (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          Live Demo
                        </motion.a>
                      ) : project.video ? (
                        <motion.a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 text-sm font-medium"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FaPlay className="w-3.5 h-3.5" />
                          Watch Video
                        </motion.a>
                      ) : (
                        <motion.button
                          onClick={handleUnavailableClick}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed text-sm font-medium"
                          whileHover={{ scale: 1.01 }}
                        >
                          <FaExternalLinkAlt className="w-3.5 h-3.5" />
                          Demo N/A
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
