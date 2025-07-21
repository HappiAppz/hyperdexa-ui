import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
  Mic,
  Search,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

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
    { name: "Agent Requests", path: "/agentrequests", icon: "📝" },
  ];

  const isActive = (path: string) => {
    if (path === "/properties") {
      // Active for /properties, /properties/... and /property/...
      return (
        location.pathname === "/properties" ||
        location.pathname.startsWith("/properties") ||
        location.pathname.startsWith("/property/")
      );
    }
    if (path === "/leads") {
      // Active for /leads, /leads/... and /lead/...
      return (
        location.pathname === "/leads" ||
        location.pathname.startsWith("/leads") ||
        location.pathname.startsWith("/lead/")
      );
    }
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const renderMainContentHeader = () => {
    const { pathname } = location;

    // Calendar page has a unique header layout
    if (pathname === "/calendar") {
      return (
        <div className="sticky top-[6rem] z-40 bg-[#fffcf4] py-4 flex items-center justify-between mb-8">
          <Button
            variant="outline"
            className="rounded-full bg-white border-2 border-[#e8eaf6] px-7 py-3 font-medium text-base text-[#1e3a8a] shadow-sm hover:border-[#1e3a8a] flex items-center gap-2"
          >
            <Calendar className="w-5 h-5" /> Add new task
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="rounded-full bg-white border-2 border-[#e8eaf6] px-5 py-2 font-medium text-sm text-[#1e3a8a] shadow-sm hover:border-[#1e3a8a]"
            >
              Today
            </Button>
            <div className="flex items-center gap-3">
              <button className="w-8 h-8 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a]">
                <ChevronLeft className="w-5 h-5 text-[#1e3a8a]" />
              </button>
              <span className="font-semibold text-lg text-[#1e3a8a]">
                23 June-30 June
              </span>
              <button className="w-8 h-8 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a]">
                <ChevronRight className="w-5 h-5 text-[#1e3a8a]" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    let title: React.ReactNode = "Welcome back, Maria!";
    let headerRightContent: React.ReactNode = (
      <div className="flex items-center gap-4">
        <Button className="rounded-full bg-[#1e3a8a] text-white px-7 py-3 font-medium text-base shadow-md hover:bg-[#1e3d8f] flex items-center gap-2">
          Show all tasks <ArrowRight className="w-5 h-5" />
        </Button>
        <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center ml-2 hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-6 h-6 text-[#1e3a8a]" />
        </button>
      </div>
    );

    const leadMatch = pathname.match(/^\/lead\/(.*)$/);
    const propertyMatch = pathname.match(/^\/property\/(.*)$/);

    if (pathname === "/leads") {
      title = "Your Leads";
      headerRightContent = (
        <div className="flex items-center gap-4">
          <div className="relative w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-11 pr-4 py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a]"
            />
          </div>
          <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
            <Plus className="w-6 h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (leadMatch) {
      const leadName = decodeURIComponent(leadMatch[1])
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      title = (
        <span className="flex items-center gap-2 text-2xl md:text-3xl">
          <Link
            to="/leads"
            className="hover:underline font-semibold text-[#1e3a8a]"
          >
            Your Leads
          </Link>
          <span className="text-gray-400 font-semibold text-2xl">→</span>
          <span className="font-semibold text-[#1e3a8a]">{leadName}</span>
        </span>
      );
      headerRightContent = (
        <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center ml-2 hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-6 h-6 text-[#1e3a8a]" />
        </button>
      );
    } else if (pathname === "/properties") {
      title = "Your Properties";
      headerRightContent = (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 w-64">
            <span className="text-sm font-medium text-gray-500">1M</span>
            <Slider defaultValue={[30]} max={100} step={1} />
            <span className="text-sm font-medium text-gray-500">50M</span>
          </div>
          <div className="relative w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-11 pr-4 py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a]"
            />
          </div>
          <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
            <Plus className="w-6 h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (propertyMatch) {
      const propertyName = decodeURIComponent(propertyMatch[1])
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      title = (
        <span className="flex items-center gap-2 text-2xl md:text-3xl">
          <Link
            to="/properties"
            className="hover:underline font-semibold text-[#1e3a8a]"
          >
            Your Properties
          </Link>
          <span className="text-gray-400 font-semibold text-2xl">→</span>
          <span className="font-semibold text-[#1e3a8a]">{propertyName}</span>
        </span>
      );
      headerRightContent = (
        <div className="flex items-center gap-4">
          <div className="relative w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-11 pr-4 py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a]"
            />
          </div>
          <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
            <Plus className="w-6 h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (pathname === "/agentrequests") {
      title = "Agent Requests";
      headerRightContent = (
        <Button className="rounded-full bg-[#1e3a8a] text-white px-7 py-3 font-medium text-base shadow-md hover:bg-[#1e3d8f] flex items-center gap-2">
          <Plus className="w-5 h-5" /> Create a request
        </Button>
      );
    } else if (pathname === "/profile") {
      title = "Your Profile";
      headerRightContent = (
        <button className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center ml-2 hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-6 h-6 text-[#1e3a8a]" />
        </button>
      );
    }

    return (
      <div className="sticky top-[6rem] z-40 bg-[#fffcf4] py-4 flex items-center justify-between mb-8">
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
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-4">{headerRightContent}</div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#fffcf4] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fffcf4] pt-8 pb-4 flex-shrink-0">
        <div className="max-w-screen-3xl w-full mx-auto px-4">
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
                <Link
                  to="/profile"
                  className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                >
                  <Avatar className="w-11 h-11 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-bold cursor-pointer">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Container for width constraint and centering */}
      <main className="max-w-screen-3xl w-full mx-auto px-4">
        {/* Main Content Header */}
        {renderMainContentHeader()}

        {/* Main Content */}
        <div className="flex-1 pb-10">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
