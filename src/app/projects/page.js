'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

const ProjectsPage = () => {
  const allProjects = [
    {
      title: 'OneFlow ERP - Plan to Bill in One Place',
      description: 'A comprehensive, modular Project Management and ERP system that takes projects from planning to execution to billing—all in one unified platform. Built for teams that need to manage projects, track finances, and collaborate effectively.',
      image: '/',
      github: 'https://github.com/drashti-2005/amalthea_odoo_team_75',
      demo: '',
      video: 'https://drive.google.com/file/d/1A25mp8AIBubDR-kPbdf71Y-vr5A-Myof/view?usp=sharing',
      tags: ['Python', 'React', 'FastAPI', 'PostgreSQL', 'ERP'],
      highlights: [
        'End-to-end workflow from project planning to billing',
        'Financial integration with Sales Orders, Purchase Orders, Invoices, and Bills',
        'Built-in timesheet management with billable/non-billable hour tracking',
        'Real-time analytics for project profitability and resource utilization',
        'Role-based access control for different team members',
        'Modern UI/UX built with React and responsive design',
      ],
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            className="grid gap-10 sm:grid-cols-2"
          >
            {allProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 w-full bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>

                  <div className="mb-5">
                    <h3 className="text-lg font-medium mb-2">Key Highlights</h3>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:underline dark:text-blue-400"
                      >
                        <FaPlay />
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
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
