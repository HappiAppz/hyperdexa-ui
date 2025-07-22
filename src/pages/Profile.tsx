import React from "react";
import {
  Mail,
  Phone,
  Download,
  Plus,
  MapPin,
  Mic,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Layout from "@/components/Layout";

const Profile = () => {
  const profileData = {
    name: "Maria Moss",
    role: "Real estate agent",
    email: "mariamoss@gmail.com",
    phone: "+971 50 562 3300",
    avatar: "/placeholder.svg",
  };

  const performanceData = {
    leadsClosed: 120,
    sales: 45,
    activeLeads: 75,
  };

  const listingSnapshot = {
    name: "The Bridges",
    developer: "Aldar Properties",
    location: "Al Reem Island, Abu Dhabi",
    status: "Available",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  };

  const recentlyClosedLeads = [
    { name: "Josephine Gordon", avatar: "/placeholder.svg" },
    { name: "Ellen Lambert", avatar: "/placeholder.svg" },
    { name: "John Brent", avatar: "/placeholder.svg" },
  ];

  const documents = [
    {
      title: "Q1 Sales Report",
      date: "Generated on 03-02-2025",
      icon: "📊",
    },
    {
      title: "Client Feedback Summary",
      date: "Generated on 03-02-2025",
      icon: "📄",
    },
  ];

  const followUps = [
    {
      name: "John",
      inactive: "4 days",
    },
    {
      name: "John",
      inactive: "4 days",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-gradient-to-b from-gray-700 to-gray-800 text-white">
            <CardContent className="p-6 text-center">
              <Avatar className="w-32 h-32 mx-auto mb-4">
                <AvatarImage src={profileData.avatar} alt={profileData.name} />
                <AvatarFallback className="text-2xl bg-gray-600">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h2 className="text-2xl font-bold mb-6">{profileData.name}</h2>
              <div className="space-y-3">
                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{profileData.phone}</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-center space-x-2 bg-white/10 rounded-lg px-4 py-3 hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{profileData.email}</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Performance Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      Leads Closed
                    </div>
                    <div className="text-3xl font-bold text-[#1e3a8a]">
                      {performanceData.leadsClosed}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Sales</div>
                    <div className="text-3xl font-bold text-[#1e3a8a]">
                      {performanceData.sales}
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-500 mb-1">Active Leads</div>
                  <div className="text-3xl font-bold text-[#1e3a8a]">
                    {performanceData.activeLeads}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Middle Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Listing Snapshot */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-[#1e3a8a] mb-4">
                Listing Snapshot
              </h3>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={listingSnapshot.image}
                  alt={listingSnapshot.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium">
                  <span className="flex items-center space-x-1">
                    <span className="text-2xl">🏠</span>
                    <span>{listingSnapshot.status}</span>
                  </span>
                </div>
                <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {listingSnapshot.name}
                  </h4>
                  <p className="text-sm text-white/80">
                    {listingSnapshot.developer}
                  </p>
                  <div className="flex items-center text-xs text-white/70 mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    {listingSnapshot.location}
                  </div>
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
                  <ArrowRight className="w-5 h-5 text-gray-900" />
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Documents and Reports */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documents and Reports
              </h3>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{doc.icon}</span>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-gray-500">{doc.date}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <Download className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 space-y-6">
          {/* Recently Leads Closed */}
          <Card className="bg-[#1e3a8a] text-white">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">
                Recently Leads Closed
              </h3>
              <div className="space-y-3">
                {recentlyClosedLeads.map((lead, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={lead.avatar} alt={lead.name} />
                      <AvatarFallback className="bg-white/20 text-white">
                        {lead.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{lead.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Follow Ups */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Follow Ups
                </h3>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-3">
                {followUps.map((followUp, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">
                        Follow up with {followUp.name}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">
                      Inactive {followUp.inactive}
                    </p>
                    <Button className="w-full bg-white text-[#1e3a8a] border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white">
                      Message now
                    </Button>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-white text-[#1e3a8a] border border-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white">
                Show all follow ups
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
