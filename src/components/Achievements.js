'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  FaAward, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaTrophy,
  FaCertificate,
  FaStar,
  FaGraduationCap,
  FaCode
} from 'react-icons/fa';

const Achievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const achievements = [
    {
      id: 1,
      title: 'Aspire Leaders Program (Modules 1 & 2)',
      description:
        'Completed personal & professional development and masterclasses led by world-class educators. Enhanced leadership skills and global perspective.',
      date: '2024',
      icon: '🌍',
      category: 'Leadership',
      link: 'https://www.linkedin.com/in/kalpesh-vala-1b2458249/details/certifications/',
      gradient: 'from-blue-600 to-cyan-600',
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-400'
    },
    {
      id: 2,
      title: 'Complete Kubernetes: Easy Practical Guide + Project',
      description:
        'Completed comprehensive hands-on Kubernetes training with practical projects via Udemy. Mastered container orchestration and deployment strategies.',
      date: '2024',
      icon: '📦',
      category: 'DevOps',
      link: 'https://www.udemy.com/certificate/UC-76bde9e9-e159-43c7-a98a-9146f53bf5ba/',
      gradient: 'from-purple-600 to-pink-600',
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-400'
    },
    {
      id: 3,
      title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      description:
        'Officially certified by Amazon Web Services Training and Certification. Demonstrated proficiency in cloud computing fundamentals and AWS services.',
      date: '2024',
      icon: '☁️',
      category: 'Cloud Computing',
      link: 'https://www.credly.com/badges/729329cb-52e5-4ba2-bed2-eecbc94e4caa/public_url',
      gradient: 'from-orange-600 to-red-600',
      badgeColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-400'
    },
    {
      id: 4,
      title: 'Certificate of Scholar - Semester II',
      description:
        'Awarded Certificate of Scholar by Nirma University for outstanding academic excellence and maintaining high CGPA standards.',
      date: '2023',
      icon: '🎓',
      category: 'Academic',
      link: 'https://www.linkedin.com/in/kalpesh-vala-1b2458249/details/certifications/',
      gradient: 'from-green-600 to-emerald-600',
      badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-400'
    },
    {
      id: 5,
      title: 'Smart India Hackathon',
      description:
        'Participated in prestigious national-level hackathon organized by the Government of India. Competed among thousands of teams nationwide.',
      date: '2023',
      icon: '💡',
      category: 'Competition',
      link: 'https://www.linkedin.com/in/kalpesh-vala-1b2458249/details/certifications/',
      gradient: 'from-indigo-600 to-purple-600',
      badgeColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-400'
    },
    {
      id: 6,
      title: 'HackNuthone 6.0 - Top 10 Team',
      description:
        'Selected among the top 10 teams in competitive programming hackathon. Demonstrated exceptional problem-solving and coding skills.',
      date: '2023',
      icon: '🏅',
      category: 'Achievement',
      link: 'https://certificate.givemycertificate.com/c/d0d58073-966f-46a3-a906-b5016068ecb3',
      gradient: 'from-yellow-600 to-orange-600',
      badgeColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-400'
    },
    {
      id: 7,
      title: 'National Research Symposium 2025',
      description:
        'Received Certificate of Participation in National Research Symposium for Engineering UG Students at Nirma University. Contributed to research presentations.',
      date: '2025',
      icon: '🧪',
      category: 'Research',
      link: 'https://www.linkedin.com/in/kalpesh-vala-1b2458249/details/certifications/',
      gradient: 'from-teal-600 to-blue-600',
      badgeColor: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-400'
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
      y: -8,
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-400/10 dark:bg-green-400/5 rounded-full blur-3xl" />
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
            <span className="inline-flex items-center px-4 py-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium mb-4">
              <FaTrophy className="w-4 h-4 mr-2" />
              Recognition & Growth
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Achievements & <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Certifications</span>
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto rounded-full"
          />
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            A collection of milestones, certifications, and recognitions that mark my journey of continuous learning and growth
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              className="group h-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: hoveredIndex === index ? 1 : 0.8 }}
                />

                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} text-white shadow-lg`}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    
                    <div className="text-right">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${achievement.badgeColor}`}>
                        {achievement.category}
                      </span>
                      <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                        <FaCalendarAlt className="w-3 h-3 mr-1" />
                        {achievement.date}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1 mb-6">
                    {achievement.description}
                  </p>

                  {/* Action */}
                  <motion.a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center space-x-2 w-full py-3 px-4 bg-gradient-to-r ${achievement.gradient} text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group/btn`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaCertificate className="w-4 h-4" />
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                </div>

                {/* Floating Star */}
                <motion.div
                  className="absolute top-4 right-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    rotate: hoveredIndex === index ? 360 : 0,
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaStar className="w-5 h-5" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "7+", label: "Certifications", icon: FaCertificate },
            { number: "3+", label: "Competitions", icon: FaTrophy },
            { number: "2+", label: "Academic Awards", icon: FaGraduationCap },
            { number: "5+", label: "Skills Validated", icon: FaCode }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon className="w-6 h-6" />
              </motion.div>
              
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

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-2xl shadow-lg">
            <FaAward className="w-5 h-5" />
            <span>Always learning, always growing</span>
            <FaAward className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
