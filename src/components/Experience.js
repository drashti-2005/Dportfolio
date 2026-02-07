'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaCode, FaUsers, FaGithub, FaDocker, FaAws, FaGitAlt, FaTasks, FaRocket, FaCube, FaDatabase } from 'react-icons/fa';

const Experience = () => {
  const experience = {
    company: "The Special Character PVT. LTD.",
    industry: "IT / Computers - Software",
    position: "Full Stack Developer",
    duration: "08 May, 2025 - 07 Jul, 2025",
    location: "Remote",
    skills: [
      { name: "Github", icon: FaGithub, color: "text-gray-800" },
      { name: "Docker", icon: FaDocker, color: "text-blue-500" },
      { name: "Medusa.js", icon: FaCube, color: "text-purple-600" },
      { name: "AWS", icon: FaAws, color: "text-orange-500" },
      { name: "Deployment", icon: FaRocket, color: "text-green-500" },
      { name: "Git", icon: FaGitAlt, color: "text-red-500" },
      { name: "Payload CMS", icon: FaDatabase, color: "text-indigo-600" },
      { name: "Task Management", icon: FaTasks, color: "text-blue-600" }
    ],
    responsibilities: [
      {
        icon: FaCode,
        title: "E-commerce Platform Development",
        description: "Spearheaded the end-to-end development of a full-fledged e-commerce platform, leveraging Medusa.js for core commerce logic and Payload CMS for dynamic content management."
      },
      {
        icon: FaUsers,
        title: "Backend Engineering",
        description: "Engineered key backend modules, including secure user authentication, comprehensive product lifecycle management, and custom CMS workflows to streamline administrative operations."
      },
      {
        icon: FaGitAlt,
        title: "Git Workflow Implementation",
        description: "Established and enforced a Git-based workflow, mandating pull request (PR) reviews to maintain high code quality, ensure branch integrity, and resolve merge conflicts effectively."
      },
      {
        icon: FaUsers,
        title: "Team Mentorship",
        description: "Mentored team members on version control best practices and collaborative coding standards, significantly improving team efficiency and reducing code integration issues."
      },
      {
        icon: FaRocket,
        title: "Agile Leadership",
        description: "Led the agile development cycle, ensuring timely delivery of features and maintaining high development standards throughout the project lifecycle."
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and hands-on experience in software development
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="text-white">
                  <motion.h3 
                    variants={itemVariants}
                    className="text-2xl md:text-3xl font-bold mb-2"
                  >
                    {experience.position}
                  </motion.h3>
                  <motion.div 
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row sm:items-center gap-4 text-blue-100"
                  >
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-200" />
                      <span className="font-medium">{experience.company}</span>
                    </div>
                    <div className="hidden sm:block w-1 h-1 bg-blue-200 rounded-full"></div>
                    <span className="text-sm">{experience.industry}</span>
                  </motion.div>
                </div>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex items-center gap-2 text-blue-100 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3"
                >
                  <FaCalendarAlt className="text-blue-200" />
                  <span className="font-medium text-sm md:text-base">{experience.duration}</span>
                </motion.div>
              </div>
            </div>

            {/* Skills Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Key Technologies & Skills
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {experience.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600 dark:hover:to-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon className={`text-2xl md:text-3xl ${skill.color} dark:text-white group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center group-hover:text-gray-900 dark:group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Responsibilities Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-12"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Key Responsibilities & Achievements
              </h4>
              <div className="space-y-6">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex gap-4 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600 dark:hover:to-purple-900/20 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-purple-500/30"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <responsibility.icon className="text-white text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {responsibility.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {responsibility.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Section */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 p-6 md:p-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <span className="text-2xl">💼</span>
                  <span className="font-medium">Internship Experience</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>2 Months Duration</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Full Stack Development</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
