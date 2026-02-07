'use client';

import { motion } from 'framer-motion';
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaCode, 
  FaGlobe, 
  FaServer, 
  FaPython, 
  FaCloud, 
  FaCogs,
  FaQuoteLeft,
  FaQuoteRight
} from 'react-icons/fa';

const About = () => {
  const details = [
    { 
      label: 'College', 
      value: 'Institute of Technology, Nirma University',
      icon: FaUniversity,
      color: 'text-blue-600 dark:text-blue-400'
    },
    { 
      label: 'CGPA', 
      value: '8.20 / 10',
      icon: FaGraduationCap,
      color: 'text-green-600 dark:text-green-400'
    },
    { 
      label: 'Location', 
      value: 'Gujarat, India',
      icon: FaMapMarkerAlt,
      color: 'text-purple-600 dark:text-purple-400'
    },
  ];

  const interests = [
    { name: 'Java Development', icon: FaCode, color: 'from-red-500 to-orange-500' },
    { name: 'Web Development', icon: FaGlobe, color: 'from-blue-500 to-cyan-500' },
    { name: 'DevOps', icon: FaServer, color: 'from-gray-600 to-gray-800' },
    { name: 'Python Programming', icon: FaPython, color: 'from-green-500 to-blue-500' },
    { name: 'Cloud Computing', icon: FaCloud, color: 'from-sky-400 to-blue-600' },
    { name: 'System Administration', icon: FaCogs, color: 'from-purple-500 to-pink-500' },
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
    hidden: { opacity: 0, y: 20 },
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
    <section id="about" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
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
              Get to know me
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Background & Details */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
              
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <FaQuoteLeft className="text-blue-600 dark:text-blue-400 mr-3 text-lg" />
                  Background
                </h3>
                
                <div className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Passionate and self-driven Computer Science Engineering student with a strong foundation in{' '}
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Java</span>,{' '}
                    <span className="font-semibold text-green-600 dark:text-green-400">Python</span>,{' '}
                    <span className="font-semibold text-red-600 dark:text-red-400">C++</span>,{' '}
                    <span className="font-semibold text-yellow-600 dark:text-yellow-400">JavaScript</span>, and{' '}
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400">Go</span>.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Experienced in developing full-stack software and web applications with a focus on{' '}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">backend development</span> and{' '}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">scalable system design</span>.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    Skilled in Spring Boot, Flask, Express.js, Next.js, Node.js, and web technologies like ReactJS and Tailwind CSS.
                    Currently exploring Kubernetes and the Spring framework.
                  </p>
                  
                  <motion.div 
                    className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <FaQuoteRight className="text-blue-600 dark:text-blue-400 text-2xl mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 font-medium italic">
                      &ldquo;Demonstrates a hands-on approach to building efficient, real-world solutions, 
                      including a real-time chat application and an e-commerce backend system.&rdquo;
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Personal Details</h4>
              <div className="grid gap-4">
                {details.map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`p-3 rounded-lg ${detail.color} bg-opacity-10 mr-4`}>
                      <detail.icon className={`w-6 h-6 ${detail.color}`} />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block">
                        {detail.label}
                      </span>
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {detail.value}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Areas of Interest</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                I am deeply passionate about various aspects of software development and technology.
                My areas of focus include:
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="group relative p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  variants={cardVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative flex items-center space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${interest.color} text-white shadow-lg`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <interest.icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {interest.name}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Achievement Highlight */}
            <motion.div
              variants={itemVariants}
              className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-white/10"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                    "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <div className="relative">
                <h4 className="text-xl font-bold mb-3">🎯 Goal-Oriented</h4>
                <p className="text-blue-100 leading-relaxed">
                  Actively involved in projects and hackathons, with a consistent drive to learn 
                  and experiment with new technologies. Building efficient, real-world solutions 
                  is my passion.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "15+", label: "Projects Completed", icon: "🚀" },
            { number: "3+", label: "Years of Coding", icon: "⌨️" },
            { number: "8.20", label: "CGPA", icon: "🎓" },
            { number: "100%", label: "Dedication", icon: "💯" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
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

export default About;