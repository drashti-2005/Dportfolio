'use client';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Experience from '../../components/Experience';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Experience />
      </main>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
