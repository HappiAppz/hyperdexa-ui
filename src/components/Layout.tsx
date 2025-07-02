import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  Heart,
  MessageSquare,
  Mic,
  Search,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "⊞" },
    { name: "Leads", path: "/leads", icon: "👥" },
    { name: "Properties", path: "/properties", icon: "🏠" },
    { name: "Calendar", path: "/calendar", icon: "📅" },
  ];

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      {/* Main Container for width constraint and centering */}
      <div className="max-w-screen-2xl w-full mx-auto px-4">
        {/* Header */}
        <header className="bg-transparent pt-8 pb-4 flex-shrink-0">
          <div className="flex items-center justify-between w-full">
            {/* Three-column flex: Logo | Nav Tabs (centered) | User Section */}
            <div className="flex w-full items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center relative overflow-hidden">
                  <div className="w-9 h-9 bg-white rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              {/* Nav Tabs Centered */}
              <nav className="flex gap-3 mx-auto">
                {navItems.map((item) => (
                  <Link key={item.name} to={item.path}>
                    <Button
                      className={`rounded-full px-6 py-2 font-medium text-base ${
                        isActive(item.path)
                          ? "bg-[#1e3a8a] text-white shadow-md hover:bg-[#1e3d8f]"
                          : "bg-[#e8eaf6] text-[#5a67d8] hover:bg-[#dbeafe]"
                      }`}
                      variant={isActive(item.path) ? "default" : "ghost"}
                    >
                      <span className="mr-2">{item.icon}</span> {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
              {/* User Section */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="w-10 h-10 bg-[#e8eaf6] rounded-full flex items-center justify-center text-xl cursor-pointer">
                  💜
                </div>
                <div className="flex items-center gap-3">
                  <Avatar className="w-11 h-11 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-bold">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <div className="font-semibold text-sm text-gray-900">
                      Maria Moss
                    </div>
                    <div className="text-xs text-gray-400">
                      Real estate agent
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Header */}
        <div className="flex items-center justify-between mb-8 mt-2">
          <div className="flex items-center gap-6">
            <div className="bg-white rounded-xl shadow-sm px-6 py-2 text-center">
              <div className="text-4xl font-bold text-[#1e3a8a] leading-none">
                25
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Wed,
                <br />
                June
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-[#1e3a8a] ml-2">
              Welcome back, Maria!
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button className="rounded-full bg-[#1e3a8a] text-white px-7 py-3 font-medium text-base shadow-md hover:bg-[#1e3d8f] flex items-center gap-2">
              Show all tasks <ArrowRight className="w-5 h-5" />
            </Button>
            <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center ml-2 hover:border-[#1e3a8a] transition-transform hover:scale-110">
              <Mic className="w-6 h-6 text-[#1e3a8a]" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pb-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
