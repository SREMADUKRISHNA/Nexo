import { useState } from 'react';
import { Navigation } from '@/app/components/Navigation';
import { GridPattern } from '@/app/components/GridPattern';
import { Home } from '@/app/components/pages/Home';
import { About } from '@/app/components/pages/About';
import { Projects } from '@/app/components/pages/Projects';
import { Team } from '@/app/components/pages/Team';
import { Contact } from '@/app/components/pages/Contact';
import logoImage from 'figma:asset/5710efa666f47b5137f0773b7001dd37db2f396e.png';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'team':
        return <Team />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      {/* Background Pattern */}
      <GridPattern />

      {/* Logo */}
      <div className="fixed top-8 left-8 z-50">
        <div className="flex items-center gap-3">
          <img 
            src={logoImage} 
            alt="Nexorix TechLab Logo" 
            className="w-12 h-12 object-contain"
          />
          <div>
            <div className="text-slate-900 font-bold text-xl leading-none">Nexorix</div>
            <div className="text-slate-500 text-xs leading-none mt-0.5">TechLab</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navigation activePage={activePage} onNavigate={setActivePage} />

      {/* Page Content */}
      <main className="relative z-10">
        {renderPage()}
      </main>
    </div>
  );
}