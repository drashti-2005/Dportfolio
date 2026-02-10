'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { 
  FaDownload, 
  FaEye, 
  FaCode, 
  FaRocket, 
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaCloud
} from 'react-icons/fa';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const skills = [
    { icon: FaCode, label: 'Full Stack', color: 'text-blue-500' },
    { icon: FaServer, label: 'Backend', color: 'text-green-500' },
    { icon: FaDatabase, label: 'Databases', color: 'text-purple-500' },
    { icon: FaCloud, label: 'Cloud & DevOps', color: 'text-orange-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          // Use index-based seeded values for consistent SSR/client rendering
          const seed = i * 7.919; // Prime number for better distribution
          const left = ((seed * 13.37) % 100);
          const top = ((seed * 17.89) % 100);
          const xOffset = ((seed * 5.43) % 20) - 10;
          const duration = 3 + ((seed * 3.21) % 2);
          const delay = (seed * 1.67) % 2;
          
          return (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              style={{
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, xOffset, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Mouse Follow Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 100
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left space-y-8"
            variants={itemVariants}
          >
            {/* Greeting */}
            <motion.div
              className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              variants={itemVariants}
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Available for opportunities
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I&apos;m </span>
                <motion.span
                  className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    backgroundSize: "200% 200%"
                  }}
                >
                  Drashti
                </motion.span>
              </h1>
              
              <motion.div
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300"
                variants={itemVariants}
              >
                <motion.span
                  animate={{ opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Full Stack Developer
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              Passionate Information Technology Engineering student specializing in{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">Full Stack Development</span>,{' '}
              <span className="font-semibold text-green-600 dark:text-green-400">Backend Engineering</span>,{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">Database Design</span>, and{' '}
              <span className="font-semibold text-orange-600 dark:text-orange-400">RESTful APIs</span>.
              Currently studying at Vishwakarma Government Engineering College.
            </motion.p>

            {/* Skills Icons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className={`flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 ${skill.color}`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <skill.icon className="w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.a
                href="/resume"
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <FaEye className="w-5 h-5" />
                  <span>View Resume</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download
                className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
              variants={itemVariants}
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "3+", label: "Years Coding" },
                { number: "8.09", label: "CGPA" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <motion.div
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white"
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
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              variants={floatingVariants}
              animate="animate"
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Main Image Container */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-700/50 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Drashti Pateliya"
                    fill
                    className="object-cover object-top transform scale-y-[-1] rotate-180"
                    priority
                    sizes="(max-width: 768px) 320px, 384px"
                  />
                </div>

                {/* Floating Icons */}
                {[
                  { icon: FaCode, position: "top-4 -right-4", delay: 0 },
                  { icon: FaRocket, position: "bottom-8 -left-4", delay: 1 },
                  { icon: FaLaptopCode, position: "top-1/2 -left-8", delay: 2 },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm`}
                    animate={{
                      y: [-5, 5, -5],
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: item.delay,
                      ease: "easeInOut"
                    }}
                  >
                    <item.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;