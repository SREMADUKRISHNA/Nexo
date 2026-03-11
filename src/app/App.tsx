import { useState, useRef } from 'react';
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

  const handleNavigate = (pageId: string) => {
    const pageIndex = pages.findIndex(p => p.id === pageId);
    if (pageIndex !== -1 && scrollContainerRef.current) {
      setActivePage(pageId);
      scrollContainerRef.current.scrollTo({
        top: pageIndex * window.innerHeight,
        behavior: 'smooth',
      });
    }
  };

  const handlePageClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // If the click is on an interactive element (button, link, etc.)
    // or if the element has a pointer cursor (indicating it's clickable),
    // we don't want to advance the page.
    if (
      target.closest('button, a, input, textarea, [role="button"]') ||
      window.getComputedStyle(target).cursor === 'pointer'
    ) {
      return;
    }

    const currentIndex = pages.findIndex(p => p.id === activePage);
    const nextIndex = (currentIndex + 1) % pages.length;
    handleNavigate(pages[nextIndex].id);
  };

  return (
    <div className="bg-white relative">
      {/* Logo */}
      {activePage !== 'contact' && (
        <motion.img
          src="/logo.png"
          alt="Logo"
          className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-20 md:h-20 cursor-pointer z-20"
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
        className="h-screen overflow-hidden"
        onClick={handlePageClick}
      >
        {pages.map(page => (
          <div key={page.id} className="h-screen">
            {page.component}
          </div>
        ))}
      </div>
    </div>
  );
}