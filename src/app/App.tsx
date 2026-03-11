import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { GridPattern } from '@/app/components/GridPattern';
import { Home } from '@/app/components/pages/Home';
import { About } from '@/app/components/pages/About';
import { Projects } from '@/app/components/pages/Projects';
import { Team } from '@/app/components/pages/Team';
import { Contact } from '@/app/components/pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const location = useLocation();
  const activePage = location.pathname === '/' ? 'home' : location.pathname.substring(1);
  const [isLogoPopped, setIsLogoPopped] = useState(false);

  return (
    <div className="bg-white relative min-h-screen">
      <ScrollToTop />
      {/* Logo */}
      {activePage !== 'contact' && (
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="fixed top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-20 md:h-20 cursor-pointer z-20"
          onClick={() => setIsLogoPopped(!isLogoPopped)}
          animate={{ scale: isLogoPopped ? 1.5 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      )}

      {/* Backgrounds */}
      {activePage !== 'contact' && <GridPattern />}

      {/* Navigation */}
      <Navigation activePage={activePage} onNavigate={() => {}} />

      {/* Page Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
