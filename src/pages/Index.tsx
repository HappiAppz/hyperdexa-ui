import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
  Download,
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
      client: "Zack",
      property: "Highland Park property",
      time: "01:00 PM - 02:00 PM",
    },
    {
      client: "Tina",
      property: "Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      client: "Tina",
      property: "Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      client: "Tina",
      property: "Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      client: "Tina",
      property: "Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
    {
      client: "Tina",
      property: "Elm Street listing",
      time: "01:00 PM - 02:00 PM",
    },
  ];

  const followUps = [
    { client: "John", type: "Existing client" },
    { client: "John", type: "Existing client" },
    { client: "John", type: "Existing client" },
    { client: "John", type: "Existing client" },
    { client: "John", type: "Existing client" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-8">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
            <nav className="flex space-x-1">
              <Button
                variant="default"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
              <Link to="/leads">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Leads
                </Button>
              </Link>
              <Link to="/properties">
                <Button
                  variant="ghost"
                  className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Properties
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Calendar
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-400" />
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gray-300 text-gray-700">
                MM
              </AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium text-gray-900">Maria Moss</div>
              <div className="text-gray-500">Real estate agent</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 px-6 py-6">
        {/* Date and Welcome */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-500">Wed, June</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, Maria!
              </h1>
            </div>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-blue-900 hover:bg-blue-800 text-white">
              Show all tasks
              <Download className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-6">
          {/* Left Column - Today's Appointments */}
          <Card
            className="overflow-hidden"
            style={{
              background: "linear-gradient(45deg, #022268 20%, #FFFBF5 140%)",
            }}
          >
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-lg font-semibold text-white">
                Today's Appointments
              </CardTitle>
              <Button
                variant="outline"
                size="icon"
                className="border-white/30 text-white hover:bg-white hover:text-blue-900 bg-white/10"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-5">
              {appointments.map((appointment, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                    style={{
                      backgroundColor: index === 1 ? "#022268" : "#E6EBF5",
                    }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white mb-1">
                      Call {appointment.client} regarding {appointment.property}
                    </div>
                    <div className="text-xs text-white/80">
                      {appointment.time}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Middle Column - Follow Ups and Action Cards */}
          <div className="space-y-6">
            {/* Follow Ups */}
            <Card className="h-fit">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Follow Ups
                </CardTitle>
                <Button variant="outline" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="max-h-80 overflow-y-auto">
                <div className="space-y-4">
                  {followUps.map((followUp, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          Follow up with {followUp.client}
                        </div>
                        <div className="text-xs text-gray-500">
                          {followUp.type}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-blue-900 border-blue-900 hover:bg-blue-50 flex-shrink-0"
                      >
                        Message now
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Cards Row */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserPlus className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Add new lead
                  </h3>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Home className="w-8 h-8 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Add new property
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Total Leads */}
            <div className="flex-1 flex flex-col justify-between bg-[#fffbf5] rounded-[13px] shadow-[0_9px_27px_0_rgba(2,34,104,0.1),0_-9px_27px_0_rgba(2,34,104,0.1)] px-5 py-4">
              <div className="flex items-center justify-between w-full mb-4">
                <span
                  className="text-[#022268] text-[20px] font-normal tracking-[0.01em]"
                  style={{ WebkitTextStroke: "0.16px #797979" }}
                >
                  Total Leads
                </span>
                <div className="bg-[#022268] rounded-full p-2 shadow-[0_4px_14px_0_rgba(2,34,104,0.38)] transform -rotate-45 w-[29px] h-[29px] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="rotate-45"
                  >
                    <path
                      d="M5 19L19 5M19 5H7M19 5V17"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <span
                  className="text-[#3548a2] text-[55px] font-medium tracking-[0.01em] leading-none"
                  style={{ WebkitTextStroke: "0.42px #060606" }}
                >
                  125
                </span>
              </div>
              <span className="text-[#787878] text-[12px] font-medium tracking-[0.01em]">
                2 new added
              </span>
            </div>

            {/* Total Properties */}
            <div className="flex-1 flex flex-col justify-between bg-[#fffbf5] rounded-[13px] shadow-[0_9px_27px_0_rgba(2,34,104,0.1),0_-9px_27px_0_rgba(2,34,104,0.1)] px-5 py-4">
              <div className="flex items-center justify-between w-full mb-4">
                <span
                  className="text-[#022268] text-[20px] font-normal tracking-[0.01em]"
                  style={{ WebkitTextStroke: "0.16px #797979" }}
                >
                  Total Properties
                </span>
                <div className="bg-[#022268] rounded-full p-2 shadow-[0_4px_14px_0_rgba(2,34,104,0.38)] transform -rotate-45 w-[29px] h-[29px] flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="rotate-45"
                  >
                    <path
                      d="M5 19L19 5M19 5H7M19 5V17"
                      stroke="#fff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-2">
                <span
                  className="text-[#3548a2] text-[55px] font-medium tracking-[0.01em] leading-none"
                  style={{ WebkitTextStroke: "0.42px #060606" }}
                >
                  40
                </span>
              </div>
              <span className="text-[#787878] text-[12px] font-medium tracking-[0.01em]">
                2 new added
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
