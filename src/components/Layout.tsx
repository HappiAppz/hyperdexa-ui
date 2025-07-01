
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Heart, MessageSquare, Mic, Search, Plus } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Leads', path: '/leads', icon: 'leads' },
    { name: 'Properties', path: '/properties', icon: 'properties' },
    { name: 'Calendar', path: '/calendar', icon: 'calendar' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full opacity-80"></div>
            </div>
            
            {/* Navigation */}
            <nav className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-900 text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-400" />
            <div className="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b190?w=32&h=32&fit=crop&crop=face"
                alt="Maria Moss"
                className="w-8 h-8 rounded-full"
              />
              <div className="text-sm">
                <div className="font-medium text-gray-900">Maria Moss</div>
                <div className="text-gray-500 text-xs">Real estate agent</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
