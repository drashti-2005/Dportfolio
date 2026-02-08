'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope, 
  FaHeart,
  FaArrowUp,
  FaCode,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/drashti-2005',
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/drashti-pateliya-314824324/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:pateliyadrashti54@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: 'pateliyadrashti54@gmail.com',
      href: 'mailto:pateliyadrashti54@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Gujarat, India',
      href: '#'
    },
    {
      icon: FaCode,
      text: 'IT Engineering Student',
      href: '#'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <FaCode className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Drashti Pateliya
                  </h3>
                  <p className="text-gray-400 text-sm">Full Stack Developer</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Passionate Information Technology Engineering student specializing in full-stack development. 
                Building innovative solutions with modern technologies and eager to contribute to impactful projects.
              </p>
              
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <contact.icon className="w-4 h-4 group-hover:text-blue-400" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div key={index} whileHover={{ x: 5 }}>
                    <Link
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social & Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-800 rounded-xl text-gray-400 ${social.color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-sm text-gray-400">Get updates on my latest projects</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:outline-none focus:border-blue-500 transition-colors duration-300"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-r-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>&copy; {new Date().getFullYear()} Drashti Pateliya. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center space-x-1">
                  <span>Built with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <FaHeart className="w-4 h-4 text-red-500" />
                  </motion.div>
                  <span>using Next.js & Tailwind CSS</span>
                </span>
              </div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-400 hover:text-white transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Back to top</span>
                <FaArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-3 h-3 bg-purple-400 rounded-full opacity-40"
          animate={{
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;