import React, { useState } from "react";
import Layout from "@/components/Layout";
import {
  Search,
  Filter,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  User,
  Home,
  DollarSign,
  FileText,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AgentRequests = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Sample data for requests
  const requests = [
    {
      id: 1,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 2,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 3,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 4,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 5,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 6,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 7,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      id: 8,
      name: "Josephine Gordon",
      avatar: "https://placehold.co/39x39",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
  ];

  // Remove all code that references the old request properties and their related logic
  // Filter requests based on status and search
  // Count requests by status
  // getStatusIcon, getStatusColor, getPriorityColor, getTypeIcon functions

  return (
    <Layout>
      <div className="py-8 px-4 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[calc(100vh-120px)]">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white rounded-2xl outline outline-1 outline-slate-300 hover:shadow-lg transition-shadow flex flex-col justify-start items-start overflow-hidden p-6 gap-6"
            >
              <div className="w-full flex flex-col justify-start items-start gap-2.5">
                <div className="py-1 flex flex-col justify-start items-start gap-1.5">
                  <div className="w-56 flex flex-row justify-between items-center">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={request.avatar}
                    />
                    <div className="w-44 h-7 text-center flex items-center justify-center text-blue-950 text-xl font-semibold leading-3 tracking-tight font-sans">
                      {request.name}
                    </div>
                  </div>
                  <div className="text-center text-neutral-500 text-xs font-normal leading-3 font-sans">
                    Request sent {request.sent}
                  </div>
                </div>
                <div className="w-full text-blue-950 text-sm font-medium leading-relaxed font-sans">
                  {request.description}
                </div>
              </div>
              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-12 text-center text-neutral-500 text-xs font-normal leading-3 font-sans">
                    Location
                  </div>
                  <div className="w-20 text-center text-blue-950 text-sm font-bold leading-3 font-sans">
                    {request.location}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-16 text-center text-neutral-500 text-xs font-normal leading-3 font-sans">
                    Requirement
                  </div>
                  <div className="text-center text-blue-950 text-sm font-bold leading-3 font-sans">
                    {request.requirement}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-7 text-center text-neutral-500 text-xs font-normal leading-3 font-sans">
                    Price
                  </div>
                  <div className="text-center text-blue-950 text-sm font-bold leading-3 font-sans">
                    {request.price}
                  </div>
                </div>
              </div>
              <div
                data-property-1="Component 32"
                className="w-full h-10 px-4 py-2 bg-blue-950/20 rounded-md backdrop-blur-sm flex justify-center items-center gap-2.5"
              >
                <div className="text-center text-blue-950 text-lg font-medium leading-snug tracking-tight font-sans">
                  Attach Listing
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AgentRequests;
