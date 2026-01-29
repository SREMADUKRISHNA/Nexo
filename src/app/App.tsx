import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navigation } from '@/app/components/Navigation';
import { GridPattern } from '@/app/components/GridPattern';
import { Home } from '@/app/components/pages/Home';
import { About } from '@/app/components/pages/About';
import { Projects } from '@/app/components/pages/Projects';
import { Team } from '@/app/components/pages/Team';
import { Contact } from '@/app/components/pages/Contact';

const pages = [
  { id: 'home', component: <Home /> },
  { id: 'about', component: <About /> },
  { id: 'projects', component: <Projects /> },
  { id: 'team', component: <Team /> },
  { id: 'contact', component: <Contact /> },
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isLogoPopped, setIsLogoPopped] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const pageHeight = window.innerHeight;
      const currentPageIndex = Math.round(container.scrollTop / pageHeight);
      const currentPageId = pages[currentPageIndex]?.id;
      if (currentPageId && currentPageId !== activePage) {
        setActivePage(currentPageId);
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    container?.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [activePage]);

  const handleNavigate = (pageId: string) => {
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex !== -1 && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: pageIndex * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white relative">
      {/* Logo */}
      {activePage !== 'contact' && (
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="absolute top-8 left-8 w-20 h-20 cursor-pointer z-20"
          onClick={() => setIsLogoPopped(!isLogoPopped)}
          animate={{ scale: isLogoPopped ? 1.5 : 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
      )}

      {/* Backgrounds */}
      {activePage !== 'contact' && <GridPattern />}

      {/* Navigation */}
      <Navigation activePage={activePage} onNavigate={handleNavigate} />

      {/* Page Content */}
      <div
        ref={scrollContainerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        {pages.map(page => (
          <div key={page.id} className="h-screen snap-start">
            {page.component}
          </div>
        ))}
      </div>
    </div>
  );
}