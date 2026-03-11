import { Home, Info, FolderKanban, Users, Mail } from 'lucide-react';

interface NavigationProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ activePage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: Info, label: 'About Us' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  return (
    <nav className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="flex flex-row gap-4 md:gap-8 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative"
              aria-label={item.label}
            >
              <div
                className={`p-2 md:p-3 rounded-xl transition-all duration-300 transform ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-400/50 scale-110 md:scale-125'
                    : 'text-[var(--muted-galaxy-blue)] hover:text-white hover:bg-blue-500/50'
                }`}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
              </div>
              
              {/* Tooltip - hidden on smaller screens */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-12 opacity-0 group-hover:md:opacity-100 pointer-events-none transition-opacity duration-200 hidden md:block">
                <div className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap">
                  {item.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
