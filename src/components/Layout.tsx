import { ReactNode, useEffect, useRef } from "react";
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

// SVG icon paths
import dashboardActiveUrl from "@/assets/icons/dashboard_active.svg?url";
import dashboardInactiveUrl from "@/assets/icons/dashboard_inactive.svg?url";
import leadsActiveUrl from "@/assets/icons/leads_active.svg?url";
import leadsInactiveUrl from "@/assets/icons/leads_inactive.svg?url";
import propertiesActiveUrl from "@/assets/icons/properties_active.svg?url";
import propertiesInactiveUrl from "@/assets/icons/properties_inactive.svg?url";
import calendarActiveUrl from "@/assets/icons/calendar_active.svg?url";
import calendarInactiveUrl from "@/assets/icons/calendar_inactive.svg?url";
import agentRequestActiveUrl from "@/assets/icons/agentrequest_active.svg?url";
import agentRequestInactiveUrl from "@/assets/icons/agentrequest_inactive.svg?url";
import savedInactiveUrl from "@/assets/icons/saved_inactive.svg?url";

interface LayoutProps {
  children: ReactNode;
  onAddLeadClick?: () => void;
}

const Layout = ({ children, onAddLeadClick }: LayoutProps) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  // Helper function to get the correct icon based on navigation item and active state
  const getIcon = (name: string, isActive: boolean) => {
    const iconMap = {
      Dashboard: isActive ? dashboardActiveUrl : dashboardInactiveUrl,
      Leads: isActive ? leadsActiveUrl : leadsInactiveUrl,
      Properties: isActive ? propertiesActiveUrl : propertiesInactiveUrl,
      Calendar: isActive ? calendarActiveUrl : calendarInactiveUrl,
      "Agent Requests": isActive
        ? agentRequestActiveUrl
        : agentRequestInactiveUrl,
    };

    const iconUrl = iconMap[name as keyof typeof iconMap];
    return iconUrl ? (
      <img src={iconUrl} alt={name} className="w-5 h-5" />
    ) : null;
  };

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Leads", path: "/leads" },
    { name: "Properties", path: "/properties" },
    { name: "Calendar", path: "/calendar" },
    { name: "Agent Requests", path: "/agentrequests" },
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

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDashboard) return;

    const handleScroll = () => {
      if (scrollContainerRef.current && thumbRef.current) {
        const scrollContainer = scrollContainerRef.current;
        const thumb = thumbRef.current;
        const scrollRatio =
          scrollContainer.scrollTop /
          (scrollContainer.scrollHeight - scrollContainer.clientHeight);
        const maxThumbTop = scrollContainer.clientHeight - thumb.clientHeight;
        thumb.style.top = `${scrollRatio * maxThumbTop}px`;
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Initial call to set thumb position
    handleScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [children, isDashboard]);

  const renderMainContentHeader = () => {
    const { pathname } = location;

    // Calendar page has a unique header layout
    if (pathname === "/calendar") {
      return null;
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
          <button
            className="w-12 h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110"
            onClick={onAddLeadClick}
            type="button"
          >
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

  const containerClass = "max-w-custom w-full mx-auto px-4";

  return (
    <div className="min-h-screen bg-[#fffcf4] flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fffcf4] pt-8 pb-4 flex-shrink-0">
        <div className={containerClass}>
          <div className="flex items-center justify-between w-full">
            {/* Three-column flex: Logo | Nav Tabs (centered) | User Section */}
            <div className="flex w-full items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover shadow"
                />
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
                      <span className="mr-2">
                        {getIcon(item.name, isActive(item.path))}
                      </span>{" "}
                      {item.name}
                    </Button>
                  </Link>
                ))}
              </nav>
              {/* User Section */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="w-10 h-10 bg-[#e8eaf6] rounded-full flex items-center justify-center text-xl cursor-pointer">
                  <img src={savedInactiveUrl} alt="Saved" className="w-8 h-8" />
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
      <main className={`${containerClass} flex-1 flex flex-col`}>
        {/* Main Content Header */}
        {renderMainContentHeader()}

        {/* Main Content with Custom Scrollbar (conditionally rendered) */}
        {isDashboard ? (
          <div className="flex-1 pb-10">{children}</div>
        ) : (
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="h-full overflow-y-scroll scrollbar-hide"
              style={{ width: "calc(100% + 20px)" }}
            >
              <div className="pr-[20px] pb-10">{children}</div>
            </div>
            {/* Custom Scrollbar Overlay */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-2.5">
              <div className="w-full h-full bg-slate-300 rounded-[60px]" />
              <div
                ref={thumbRef}
                className="w-full h-11 bg-blue-950 rounded-[60px] absolute top-0"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Layout;
