import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
  Download,
  Mic,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Index = () => {
  const appointments = [
    {
      title: "Call Zack regarding Highland Park property",
      time: "01:00 PM - 02:00 PM",
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
  ];

  const followUps = [
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f7f3] flex flex-col">
      {/* Header */}
      <header className="bg-transparent px-8 pt-8 pb-4 flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Nav */}
          <div className="flex items-center gap-10">
            {/* Gradient Logo */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center relative overflow-hidden">
              <div className="w-9 h-9 bg-white rounded-full opacity-30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Nav Tabs */}
            <nav className="flex gap-3">
              <Button
                className="rounded-full px-6 py-2 bg-[#1e3a8a] text-white font-medium text-base shadow-md hover:bg-[#1e3d8f]"
                variant="default"
              >
                <span className="mr-2">⊞</span> Dashboard
              </Button>
              <Link to="/leads">
                <Button
                  className="rounded-full px-6 py-2 bg-[#e8eaf6] text-[#5a67d8] font-medium text-base hover:bg-[#dbeafe]"
                  variant="ghost"
                >
                  <span className="mr-2">👥</span> Leads
                </Button>
              </Link>
              <Link to="/properties">
                <Button
                  className="rounded-full px-6 py-2 bg-[#e8eaf6] text-[#5a67d8] font-medium text-base hover:bg-[#dbeafe]"
                  variant="ghost"
                >
                  <span className="mr-2">🏠</span> Properties
                </Button>
              </Link>
              <Button
                className="rounded-full px-6 py-2 bg-[#e8eaf6] text-[#5a67d8] font-medium text-base hover:bg-[#dbeafe]"
                variant="ghost"
              >
                <span className="mr-2">📅</span> Calendar
              </Button>
            </nav>
          </div>
          {/* User Section */}
          <div className="flex items-center gap-6">
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
                <div className="text-xs text-gray-400">Real estate agent</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Header */}
      <div className="flex items-center justify-between px-8 mb-8 mt-2">
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

      {/* Dashboard Grid */}
      <div className="flex-1 px-8 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_0.8fr] gap-8">
          {/* Appointments Card */}
          <div
            className="rounded-2xl p-7 shadow-xl relative overflow-hidden"
            style={{
              background: "linear-gradient(45deg, #022268 20%, #FFFBF5 140%)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">
                Today's Appointments
              </h2>
              <button className="w-9 h-9 rounded-full bg-white/20 text-white flex items-center justify-center text-2xl hover:bg-white/30 transition-transform rotate-0 hover:rotate-90">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-7 relative">
              {appointments.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 relative pl-7"
                >
                  {/* Timeline vertical line */}
                  {idx < appointments.length - 1 && (
                    <div className="absolute left-2.5 top-5 bottom-[-28px] w-0.5 bg-white/30 z-0" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-white flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a]" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/80">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Ups Card */}
          <div className="rounded-2xl bg-white shadow-xl p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#1e3a8a]">
                  Follow Ups
                </h2>
                <button className="w-9 h-9 rounded-full bg-[#f0f0f0] text-[#666] flex items-center justify-center text-2xl hover:bg-[#e0e0e0] transition-transform rotate-0 hover:rotate-90">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
              <div className="max-h-64 overflow-y-auto pr-2">
                {followUps.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-4 border-b border-[#f0f0f0] last:border-b-0"
                  >
                    <div>
                      <div className="text-sm font-medium text-[#1e3a8a] mb-1">
                        Follow up with {item.client}
                      </div>
                      <div className="text-xs text-gray-400">
                        Inactive {item.inactive}
                      </div>
                    </div>
                    <Button className="rounded-full border-2 border-[#1e3a8a] text-[#1e3a8a] bg-white hover:bg-[#1e3a8a] hover:text-white px-5 py-2 font-medium text-sm transition-colors">
                      Message now
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-xl border-2 border-[#e8eaf6] bg-white text-center py-6 cursor-pointer hover:border-[#1e3a8a] hover:shadow-lg transition-all flex flex-col items-center">
                <div className="text-3xl mb-2 text-[#1e3a8a]">👥+</div>
                <div className="text-base font-medium text-[#1e3a8a]">
                  Add new lead
                </div>
              </div>
              <div className="rounded-xl border-2 border-[#e8eaf6] bg-white text-center py-6 cursor-pointer hover:border-[#1e3a8a] hover:shadow-lg transition-all flex flex-col items-center">
                <div className="text-3xl mb-2 text-[#1e3a8a]">🏠+</div>
                <div className="text-base font-medium text-[#1e3a8a]">
                  Add new property
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col gap-8">
            <div className="rounded-2xl bg-white shadow-xl p-7 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#1e3a8a] text-lg font-semibold">
                  Total Leads
                </span>
                <div className="w-10 h-10 bg-[#e8eaf6] rounded-full flex items-center justify-center text-xl">
                  <ArrowRight className="w-6 h-6 rotate-45 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
                125
              </div>
              <div className="text-xs text-gray-400 font-medium">
                2 new added
              </div>
            </div>
            <div className="rounded-2xl bg-white shadow-xl p-7 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#1e3a8a] text-lg font-semibold">
                  Total Properties
                </span>
                <div className="w-10 h-10 bg-[#e8eaf6] rounded-full flex items-center justify-center text-xl">
                  <ArrowRight className="w-6 h-6 rotate-45 text-[#1e3a8a]" />
                </div>
              </div>
              <div className="text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
                40
              </div>
              <div className="text-xs text-gray-400 font-medium">
                2 new added
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
