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

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-[#fffcf4] rounded-2xl border border-slate-300 hover:shadow-lg transition-shadow flex flex-col justify-between p-4 sm:p-6 h-auto sm:h-[320px] touch-manipulation"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-3">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover flex-shrink-0"
                  src={request.avatar}
                  alt={request.name}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <div className="text-blue-950 text-base sm:text-xl font-semibold tracking-tight truncate">
                    {request.name}
                  </div>
                  <div className="text-neutral-500 text-xs font-normal">
                    Request sent {request.sent}
                  </div>
                </div>
              </div>
              <div className="w-full text-blue-950 text-sm font-medium leading-relaxed">
                {request.description}
              </div>
            </div>

            <div className="w-full flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-3 sm:gap-0 mt-4">
              <div className="flex flex-row sm:flex-col items-center sm:items-center gap-1.5 flex-1">
                <div className="text-neutral-500 text-xs font-normal">
                  Location
                </div>
                <div className="text-blue-950 text-sm font-bold truncate">
                  {request.location}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-center gap-1.5 flex-1">
                <div className="text-neutral-500 text-xs font-normal">
                  Requirement
                </div>
                <div className="text-blue-950 text-sm font-bold truncate">
                  {request.requirement}
                </div>
              </div>
              <div className="flex flex-row sm:flex-col items-center sm:items-center gap-1.5 flex-1">
                <div className="text-neutral-500 text-xs font-normal">
                  Price
                </div>
                <div className="text-blue-950 text-sm font-bold">
                  {request.price}
                </div>
              </div>
            </div>

            <div className="w-full h-10 px-4 py-2 bg-blue-950/20 rounded-md backdrop-blur-sm flex justify-center items-center gap-2.5 mt-4 cursor-pointer hover:bg-blue-950/30 transition-colors touch-manipulation">
              <div className="text-center text-blue-950 text-base sm:text-lg font-medium leading-snug tracking-tight">
                Attach Listing
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AgentRequests;
