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
  ArrowLeft,
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
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Aldar_Properties_logo.svg/2560px-Aldar_Properties_logo.svg.png"
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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* ── LEFT COLUMN (Profile + Performance) ── */}
        <div className="lg:col-span-4 lg:row-span-2 space-y-4 sm:space-y-6">
          <Card className="relative overflow-hidden rounded-2xl shadow-xl max-w-md mx-auto">
            <div className="relative h-[360px] w-full">
              {/* Background Image */}
              <img
                src="https://picsum.photos/500/500"
                alt="Profile"
                className="object-cover w-full h-full"
              />
              {/* Profile Info (Name + Contact) */}
              <div className="absolute bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm bottom-[0.25px] h-[130px] left-0 right-0 px-4 text-white flex flex-col items-center justify-center space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold">{profileData.name}</h2>
                <div className="flex gap-4 justify-center">
                  {/* Phone */}
                  <a
                    href={`tel:${profileData.phone}`}
                    className="flex items-center gap-1 text-sm"
                  >
                    <span className="bg-white p-1 rounded-full"><Phone className="w-3 h-3  text-[#012267]"/></span>
                    <span>{profileData.phone}</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${profileData.email}`}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="bg-white p-1 rounded-full"><Mail className="w-3 h-3 text-[#012267] " /></span>
                    <span className="break-all">{profileData.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Performance Overview */}
          <Card className="bg-[#FFFCF4] border-[1.5px] border-[#e8eaf6]">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[#012267] mb-4">
                Performance Overview
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="bg-[#e8eaf6] w-40 h-16 flex flex-col items-center pt-1 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Leads Closed</div>
                    <div className="text-lg sm:text-s">
                      {performanceData.leadsClosed}
                    </div>
                  </div>
                  <div className="bg-[#e8eaf6] w-40 h-16 flex flex-col items-center pt-1 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Sales</div>
                    <div className="text-lg sm:text-s ">
                      {performanceData.sales}
                    </div>
                  </div>
                </div>
                <div className=" bg-[#e8eaf6] text-center p-1 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">Active Leads</div>
                  <div className="text-lg sm:text-s">
                    {performanceData.activeLeads}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── TOP RIGHT: Listing Snapshot (6 cols) ── */}
         <div className="lg:col-span-5">
            <Card className="rounded-xl bg-[#FFFCF4] overflow-hidden  border-[1.5px] border-[#e8eaf6]">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#012267] mb-4">
                  Listing Snapshot
                </h3>
                <div className="relative rounded-lg overflow-hidden h-56"> {/* Fixed height for consistency */}

                  {/* Background Image - this is the main, mostly clear image */}
                  <img
                    src={listingSnapshot.image}
                    alt={listingSnapshot.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-6">
                    {/* Top Row: Logo, Status Tag, Heart Button */}
                    <div className="flex justify-between items-start w-full z-10"> {/* items-start to align top */}
                      {/* Logo */}
                      {listingSnapshot.logo && (
                        <img
                          src={listingSnapshot.logo}
                          alt="Logo"
                          className="h-8 w-auto object-contain brightness-0 invert" // Make it white
                        />
                      )}

                      {/* "Available" Tag */}
                      <div className="bg-white text-[#012267] px-3 py-1 rounded-lg text-xs font-bold tracking-wide backdrop-blur-sm"> {/* White transparent background, blur */}
                        {listingSnapshot.status}
                      </div>

                      {/* Heart Button */}
                      <button className="w-8 h-8 bg-[#e8eaf6] rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-colors touch-manipulation">
                        <Heart className="w-4 h-4 text-[#012267]" />
                      </button>
                    </div>

                    {/* Central Area: Arrows and The Bridges text */}
                    <div className="flex items-end justify-between w-full h-full absolute inset-0 px-4 pb-4">
                      {/* Left Arrow Button */}
                      <button className="w-8 h-8 mb-5 bg-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors touch-manipulation backdrop-blur-sm">
                        <ArrowLeft className="w-5 h-5 text-[#012267]" />
                      </button>
                      <div className="flex flex-col items-center text-center mx-4"> 
                        <h4 className="text-xl font-bold text-white mb-1">
                          {listingSnapshot.name}
                        </h4>
                        <p className="text-base text-white/80">
                          {listingSnapshot.developer}
                        </p>
                        <div className="flex items-center text-sm text-white/70 mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="truncate">{listingSnapshot.location}</span>
                        </div>
                      </div>

                      {/* Right Arrow Button */}
                      <button className="w-8 h-8 mb-5 bg-white rounded-full flex items-center justify-center hover:bg-white/40 transition-colors touch-manipulation backdrop-blur-sm">
                        <ArrowRight className="w-5 h-5 text-[#012267]" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        {/* ── TOP RIGHT: Recently Leads Closed (2 cols) ── */}
        <div className="lg:col-span-3">
          <Card className="h-full bg-gradient-to-r from-[#1e3a8a] to-[#8ea7ff] text-white">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold mb-4">
                Recently Leads Closed
              </h3>
              <div className="space-y-3">
                {recentlyClosedLeads.map((lead, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                      <AvatarImage src={lead.avatar} alt={lead.name} />
                      <AvatarFallback className="bg-white/20 text-white">
                        {lead.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium truncate">
                      {lead.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── BOTTOM ROW: Documents & Reports (6 cols) ── */}
        <div className="lg:col-span-4">
          <Card className="mb-2 bg-[#FFFCF4] border-[1.5px] border-[#e8eaf6]">
            <CardContent className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-[#012267] mb-7">
                Documents and Reports
              </h3>
              <div className="space-y-3 mb-4">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 mb-7 hover:bg-gray-100 transition-colors border-l-2 border-[#012267]"
                  >
                    <div className="flex items-start space-x-3 min-w-0 flex-1">
                      <div className="min-w-0 flex-1">
                        <h4 className="font-medium text-[#012267] text-sm sm:text-base truncate">
                          {doc.title}
                        </h4>
                        <p className="text-xs text-gray-500">{doc.date}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors touch-manipulation flex-shrink-0">
                      <Download className="w-4 h-4 text-[#012267]" />
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ── BOTTOM ROW: Follow Ups (6 cols) ── */}
        <div className="lg:col-span-4">
          <Card className="bg-[#FFFCF4] border-[1.5px] border-[#e8eaf6]">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-[#012267]">
                  Follow Ups
                </h3>
                <button className="w-8 h-8 rounded-full border-[1.5px] border-[#012267] flex items-center justify-center hover:bg-gray-200">
                  <Plus className="w-4 h-4 text-[#012267]" />
                </button>
              </div>
              {/* … your Follow Ups list … */}
              <div className="space-y-3 max-h-[180px] overflow-y-auto
                    scrollbar-thin scrollbar-thumb-[#1e3a8a] scrollbar-track-[#F3F4F6]
                    scrollbar-thumb-rounded-full pr-3">
                {followUps.map((followUp, index) => (
                  <div key={index} className="border-l-2 border-[#012267] flex justify-between items-center pl-2">
                    <div className="flex flex-col justify-center mt-1">
                      <h4 className="font-medium text-[#012267] text-sm">
                        Follow up with {followUp.name}
                      </h4>
                      <p className="text-xs text-gray-500 mb-3">
                        Inactive {followUp.inactive}
                      </p>
                    </div>
                    <Button className="bg-[#FFFCF4] text-[#012267] border border-[#012267] hover:bg-[#012267] hover:text-white transition-colors text-sm ">
                      Message now
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
