
import { Calendar, MessageSquare, Heart, Plus, UserPlus, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Leads = () => {
  const leads = [
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon", 
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms", 
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island", 
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom", 
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island", 
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M"
    }
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
              <Link to="/">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="default" className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded-full">
                <UserPlus className="w-4 h-4 mr-2" />
                Leads
              </Button>
              <Link to="/properties">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full">
                  <Home className="w-4 h-4 mr-2" />
                  Properties
                </Button>
              </Link>
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 px-6 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                Calendar
              </Button>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Heart className="w-6 h-6 text-gray-400" />
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gray-300 text-gray-700">MM</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <div className="font-medium text-gray-900">Maria Moss</div>
              <div className="text-gray-500">Real estate agent</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Date and Title */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-500">Wed, June</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Your Leads</h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search for anything..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="icon" className="bg-blue-900 text-white border-blue-900 hover:bg-blue-800">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leads.map((lead, index) => (
            <Link key={index} to={`/lead/${index}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                    <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lead.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{lead.location}</span>
                      <span className="font-medium text-gray-900">{lead.bedrooms}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Requirement</span>
                      <span className="font-medium text-gray-900">{lead.timeAgo}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leads;
