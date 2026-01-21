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
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-8">
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
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-600 shadow-lg shadow-indigo-100'
                    : 'text-slate-400 hover:text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
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
