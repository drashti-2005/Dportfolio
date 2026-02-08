'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { FaDownload, FaEye, FaExternalLinkAlt } from 'react-icons/fa';

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isPdfSupported, setIsPdfSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports PDF viewing
    const checkPdfSupport = () => {
      // Check if it's a mobile device
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Check if browser supports PDF plugins
      const hasPdfSupport = navigator.mimeTypes && navigator.mimeTypes['application/pdf'];
      
      // Firefox generally has good PDF support, Chrome has mixed support
      const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
      const isChrome = navigator.userAgent.toLowerCase().includes('chrome');
      
      // Only show iframe on desktop Firefox or Chrome with PDF support
      setIsPdfSupported(!isMobile && (isFirefox || (isChrome && hasPdfSupport)));
    };

    checkPdfSupport();
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/resume.pdf?v=${Date.now()}`;
    link.download = 'Drashti_Pateliya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewInNewTab = () => {
    window.open(`/resume.pdf?v=${Date.now()}`, '_blank');
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h1>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleDownload}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <FaDownload className="mr-2" />
                Download Resume
              </button>
              
              <button
                onClick={handleViewInNewTab}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
              >
                <FaExternalLinkAlt className="mr-2" />
                View in New Tab
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            {/* Show loading spinner initially */}
            {isLoading && isPdfSupported && (
              <div className="flex items-center justify-center h-96">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {/* Show error message or fallback */}
            {(error || !isPdfSupported) ? (
              <div className="flex flex-col items-center justify-center h-96 text-center px-4">
                <FaEye className="text-6xl text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Resume Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-md">
                  {error 
                    ? "Unable to display the resume in this browser. " 
                    : "For the best viewing experience, "
                  }
                  Please use one of the options below to view or download the resume.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={handleViewInNewTab}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Open in New Tab
                  </button>
                  
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    <FaDownload className="mr-2" />
                    Download PDF
                  </button>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>Tip:</strong> For best compatibility, try opening in Firefox, Chrome, or Safari.
                  </p>
                </div>
              </div>
            ) : (
              /* Show iframe only for supported browsers */
              <iframe
                src={`/resume.pdf?v=${Date.now()}#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0&print-dialog=0`}
                className={`w-full h-[800px] ${isLoading ? 'hidden' : 'block'}`}
                onLoad={() => setIsLoading(false)}
                onError={handleIframeError}
                title="Resume"
                type="application/pdf"
                frameBorder="0"
                allowFullScreen={false}
              />
            )}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;