'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaRocket, FaCode, FaUsers, FaGithub, FaDocker, FaGitAlt, FaTasks, FaDatabase, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Experience = () => {
  const skills = [
    { name: "Full Stack Development", icon: FaCode, color: "text-blue-600" },
    { name: "Git & GitHub", icon: FaGithub, color: "text-gray-800" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "Database Design", icon: FaDatabase, color: "text-green-600" },
    { name: "Team Collaboration", icon: FaUsers, color: "text-purple-600" },
    { name: "Agile Development", icon: FaTasks, color: "text-orange-500" }
  ];

  const readyToContribute = [
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "Proficient in building end-to-end applications using modern frameworks like React, Next.js, Express.js, and Spring Boot with strong database management skills."
    },
    {
      icon: FaGitAlt,
      title: "Version Control & Collaboration",
      description: "Experienced with Git workflows, pull requests, code reviews, and collaborative development practices through hackathons and academic projects."
    },
    {
      icon: FaRocket,
      title: "Fast Learner & Problem Solver",
      description: "Demonstrated ability to quickly learn new technologies and frameworks. Participated in multiple hackathons including Smart India Hackathon 2025 Grand Finale."
    },
    {
      icon: FaDatabase,
      title: "Backend & API Development",
      description: "Strong foundation in RESTful API design, JWT authentication, real-time features with WebSockets, and scalable system architecture."
    }
  ];

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
            Ready for New Opportunities
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Actively seeking full-time opportunities to contribute and grow as a Full Stack Developer
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <FaBriefcase className="text-4xl text-white" />
                </div>
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Open to Full-Time Opportunities
              </h3>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Information Technology Engineering student with strong full-stack development skills, 
                seeking opportunities to make an impact
              </p>
              <div className="flex items-center justify-center gap-3 mt-6">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Available Immediately</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-12 border-b border-gray-200 dark:border-gray-700"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="text-2xl">💼</span>
                What I Bring to the Table
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover="hover"
                    className="group flex flex-col items-center p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600 dark:hover:to-gray-600 transition-all duration-300"
                  >
                    <skill.icon className={`text-2xl md:text-3xl ${skill.color} dark:text-white group-hover:scale-110 transition-transform duration-300`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Ready to Contribute Section */}
            <motion.div 
              variants={itemVariants}
              className="p-8 md:p-12"
            >
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                Ready to Contribute
              </h4>
              <div className="space-y-6">
                {readyToContribute.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group flex gap-4 p-6 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 hover:from-blue-50 hover:to-purple-50 dark:hover:from-gray-600 dark:hover:to-purple-900/20 transition-all duration-300 border border-transparent hover:border-blue-200 dark:hover:border-purple-500/30"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white text-xl" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action Footer */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center"
            >
              <h4 className="text-2xl font-bold text-white mb-3">Let&apos;s Build Something Great Together!</h4>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I&apos;m eager to join a team where I can contribute my skills, learn from experienced professionals, 
                and grow as a developer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/drashti-pateliya-314824324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedin className="text-xl" />
                  Connect on LinkedIn
                </a>
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/30"
                >
                  <FaEnvelope className="text-xl" />
                  Send Email
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
