import { ReactNode, useEffect, useRef, useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <img src={iconUrl} alt={name} className="w-4 h-4 sm:w-5 sm:h-5" />
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
      return (
        location.pathname === "/properties" ||
        location.pathname.startsWith("/properties") ||
        location.pathname.startsWith("/property/")
      );
    }
    if (path === "/leads") {
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        !(event.target as Element).closest(".mobile-menu")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

    handleScroll();

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [children, isDashboard]);

  const renderMainContentHeader = () => {
    const { pathname } = location;

    if (pathname === "/calendar") {
      return null;
    }

    let title: React.ReactNode = "Welcome back, Maria!";
    let headerRightContent: React.ReactNode = (
      <div className="flex items-center gap-2">
        <Button className="rounded-full bg-[#1e3a8a] text-white px-3 py-2 sm:px-7 sm:py-3 font-medium text-xs sm:text-base shadow-md hover:bg-[#1e3d8f] flex items-center gap-1 sm:gap-2">
          <span className="hidden sm:inline">Show all tasks</span>
          <span className="sm:hidden">Tasks</span>
          <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5" />
        </Button>
        <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
        </button>
      </div>
    );

    const leadMatch = pathname.match(/^\/lead\/(.*)$/);
    const propertyMatch = pathname.match(/^\/property\/(.*)$/);

    if (pathname === "/leads") {
      title = "Your Leads";
      headerRightContent = (
        <div className="flex items-center gap-2">
          <div className="relative w-32 sm:w-72 hidden md:block">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a] text-sm"
            />
          </div>
          <button
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110"
            onClick={onAddLeadClick}
            type="button"
          >
            <Plus className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (leadMatch) {
      const leadName = decodeURIComponent(leadMatch[1])
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      title = (
        <span className="flex items-center gap-1 sm:gap-2 text-base sm:text-2xl md:text-3xl">
          <Link
            to="/leads"
            className="hover:underline font-semibold text-[#1e3a8a] truncate"
          >
            <span className="hidden sm:inline">Your Leads</span>
            <span className="sm:hidden">Leads</span>
          </Link>
          <span className="text-gray-400 font-semibold text-sm sm:text-2xl">
            →
          </span>
          <span className="font-semibold text-[#1e3a8a] truncate text-sm sm:text-xl">
            {leadName}
          </span>
        </span>
      );
      headerRightContent = (
        <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
        </button>
      );
    } else if (pathname === "/properties") {
      title = "Your Properties";
      headerRightContent = (
        <div className="flex items-center gap-2">
          <div className="items-center gap-2 w-24 sm:w-64 hidden xl:flex">
            <span className="text-xs font-medium text-gray-500">1M</span>
            <Slider defaultValue={[30]} max={100} step={1} className="flex-1" />
            <span className="text-xs font-medium text-gray-500">50M</span>
          </div>
          <div className="relative w-32 sm:w-72 hidden md:block">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a] text-sm"
            />
          </div>
          <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
            <Plus className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (propertyMatch) {
      const propertyName = decodeURIComponent(propertyMatch[1])
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
      title = (
        <span className="flex items-center gap-1 sm:gap-2 text-base sm:text-2xl md:text-3xl">
          <Link
            to="/properties"
            className="hover:underline font-semibold text-[#1e3a8a] truncate"
          >
            <span className="hidden sm:inline">Your Properties</span>
            <span className="sm:hidden">Properties</span>
          </Link>
          <span className="text-gray-400 font-semibold text-sm sm:text-2xl">
            →
          </span>
          <span className="font-semibold text-[#1e3a8a] truncate text-sm sm:text-xl">
            {propertyName}
          </span>
        </span>
      );
      headerRightContent = (
        <div className="flex items-center gap-2">
          <div className="relative w-32 sm:w-72 hidden md:block">
            <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 sm:pl-11 pr-3 sm:pr-4 py-2 sm:py-3 rounded-full bg-white border-2 border-[#e8eaf6] w-full focus:border-[#1e3a8a] text-sm"
            />
          </div>
          <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
            <Plus className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
          </button>
        </div>
      );
    } else if (pathname === "/agentrequests") {
      title = "Agent Requests";
      headerRightContent = (
        <Button className="rounded-full bg-[#1e3a8a] text-white px-3 py-2 sm:px-7 sm:py-3 font-medium text-xs sm:text-base shadow-md hover:bg-[#1e3d8f] flex items-center gap-1 sm:gap-2">
          <Plus className="w-3 h-3 sm:w-5 sm:h-5" />
          <span className="hidden sm:inline">Create a request</span>
          <span className="sm:hidden">Create</span>
        </Button>
      );
    } else if (pathname === "/profile") {
      title = "Your Profile";
      headerRightContent = (
        <button className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#e8eaf6] flex items-center justify-center hover:border-[#1e3a8a] transition-transform hover:scale-110">
          <Mic className="w-4 h-4 sm:w-6 sm:h-6 text-[#1e3a8a]" />
        </button>
      );
    }

    return (
      <div className="sticky top-[4rem] sm:top-[5rem] lg:top-[6rem] z-40 bg-[#fffcf4] py-3 sm:py-4 flex items-center justify-between mb-4 sm:mb-8">
        <div className="flex items-center gap-2 sm:gap-6 min-w-0 flex-1">
          {/* Frame 1171276106 - Date Header Container */}
          <div className="date-header-container">
            {/* Frame 1171276104 - Date Header Inner */}
            <div className="date-header-inner">
              {/* Frame 1171276105 - Date Card */}
              <div className="date-card">
                <div className="date-number">25</div>
              </div>
              {/* Frame 1171276103 - Date Text Container */}
              <div className="date-text-container">
                <div className="date-text">Wed,</div>
                <div className="date-text">June</div>
              </div>
            </div>
            {/* Line 16 - Separator */}
            <div className="date-separator"></div>
          </div>
          <h1 className="text-sm sm:text-2xl md:text-3xl font-semibold text-[#1e3a8a] ml-1 sm:ml-2 min-w-0 flex-1">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-1 sm:gap-4 flex-shrink-0">
          {headerRightContent}
        </div>
      </div>
    );
  };

  return (
    <div className="layout-container">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#fffcf4] pt-3 sm:pt-8 pb-3 sm:pb-4 flex-shrink-0">
        <div className="layout-content">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover shadow"
              />
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="nav-container">
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <button
                    className={`nav-item ${
                      isActive(item.path)
                        ? "nav-item--active"
                        : "nav-item--inactive"
                    }`}
                  >
                    <span className="nav-icon">
                      {getIcon(item.name, isActive(item.path))}
                    </span>
                    <span className="nav-text">
                      <span className="hidden lg:inline">{item.name}</span>
                      <span className="lg:hidden">
                        {item.name === "Agent Requests"
                          ? "Requests"
                          : item.name}
                      </span>
                    </span>
                  </button>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Visible on mobile only */}
            <button
              className="md:hidden p-2 rounded-lg bg-white border-2 border-[#e8eaf6] hover:border-[#1e3a8a] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-[#1e3a8a]" />
              ) : (
                <Menu className="w-5 h-5 text-[#1e3a8a]" />
              )}
            </button>

            {/* Desktop User Section - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-4 lg:gap-6 flex-shrink-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#e8eaf6] rounded-full flex items-center justify-center cursor-pointer">
                <img
                  src={savedInactiveUrl}
                  alt="Saved"
                  className="w-6 h-6 lg:w-8 lg:h-8"
                />
              </div>
              <Link
                to="/profile"
                className="flex items-center gap-2 lg:gap-3 hover:opacity-80 transition-opacity"
              >
                <Avatar className="w-8 h-8 lg:w-11 lg:h-11 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-bold cursor-pointer">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <div className="text-right hidden lg:block">
                  <div className="font-semibold text-sm text-gray-900">
                    Maria Moss
                  </div>
                  <div className="text-xs text-gray-400">Real estate agent</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[3.5rem] z-40 bg-[#fffcf4] md:hidden mobile-menu">
            <div className="flex flex-col p-4 space-y-3">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <Link key={item.name} to={item.path}>
                  <Button
                    className={`w-full rounded-xl px-4 py-3 font-medium text-base justify-start ${
                      isActive(item.path)
                        ? "bg-[#1e3a8a] text-white shadow-md hover:bg-[#1e3d8f]"
                        : "bg-[#e8eaf6] text-[#5a67d8] hover:bg-[#dbeafe]"
                    }`}
                    variant={isActive(item.path) ? "default" : "ghost"}
                  >
                    <span className="mr-3">
                      {getIcon(item.name, isActive(item.path))}
                    </span>
                    {item.name}
                  </Button>
                </Link>
              ))}

              {/* Mobile User Section */}
              <div className="border-t border-[#e8eaf6] pt-4 mt-6">
                <Link
                  to="/profile"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#e8eaf6] transition-colors"
                >
                  <Avatar className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-bold">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>M</AvatarFallback>
                  </Avatar>
                  <div>
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
        )}
      </header>

      {/* Main Container */}
      <main className="layout-content flex-1 flex flex-col">
        {/* Main Content Header */}
        {renderMainContentHeader()}

        {/* Main Content */}
        {isDashboard ? (
          <div className="flex-1 pb-6 sm:pb-10">{children}</div>
        ) : (
          <div className="flex-1 relative overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="h-full overflow-y-scroll scrollbar-hide"
              style={{ width: "calc(100% + 20px)" }}
            >
              <div className="pr-[20px] pb-6 sm:pb-10">{children}</div>
            </div>
            {/* Custom Scrollbar Overlay - Hidden on mobile */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-2.5 hidden lg:block">
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
