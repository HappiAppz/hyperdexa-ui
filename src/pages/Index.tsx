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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
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

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Date and Welcome */}
        <div className="flex items-center justify-between mb-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Appointments */}
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

          {/* Follow Ups */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">
                Follow Ups
              </CardTitle>
              <Button variant="outline" size="icon">
                <Plus className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {followUps.map((followUp, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Follow up with {followUp.client}
                    </div>
                    <div className="text-xs text-gray-500">{followUp.type}</div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-900 border-blue-900 hover:bg-blue-50"
                  >
                    Message now
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      Total Leads
                    </div>
                    <div className="text-3xl font-bold text-blue-900">125</div>
                    <div className="text-xs text-gray-500">2 new added</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-600">
                      Total Properties
                    </div>
                    <div className="text-3xl font-bold text-blue-900">40</div>
                    <div className="text-xs text-gray-500">2 new added</div>
                  </div>
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Add new lead
              </h3>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Add new property
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
