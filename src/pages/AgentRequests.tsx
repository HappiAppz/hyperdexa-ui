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
      title: "Property Valuation Request",
      client: "Sarah Johnson",
      type: "Valuation",
      property: "Marina Bay Residences, Unit 1205",
      status: "pending",
      date: "2025-07-18",
      time: "10:30 AM",
      priority: "high",
      description: "Client requesting property valuation for potential sale",
      budget: "AED 2.5M",
    },
    {
      id: 2,
      title: "Schedule Property Viewing",
      client: "Ahmed Al Rashid",
      type: "Viewing",
      property: "Reem Hills, Villa 45",
      status: "approved",
      date: "2025-07-19",
      time: "2:00 PM",
      priority: "medium",
      description: "Interested in 3BR villa for family",
      budget: "AED 1.8M",
    },
    {
      id: 3,
      title: "Documentation Request",
      client: "Maria Chen",
      type: "Documentation",
      property: "Downtown Tower, Apt 801",
      status: "completed",
      date: "2025-07-17",
      time: "4:00 PM",
      priority: "low",
      description: "Needs property ownership documents",
      budget: "N/A",
    },
    {
      id: 4,
      title: "Price Negotiation",
      client: "John Smith",
      type: "Negotiation",
      property: "Al Raha Beach, Villa 12",
      status: "rejected",
      date: "2025-07-16",
      time: "11:00 AM",
      priority: "high",
      description: "Client wants to negotiate on listed price",
      budget: "AED 3.2M",
    },
    {
      id: 5,
      title: "Property Listing Request",
      client: "Fatima Al Zaabi",
      type: "Listing",
      property: "Saadiyat Island, Beach Villa",
      status: "pending",
      date: "2025-07-18",
      time: "3:30 PM",
      priority: "medium",
      description: "Owner wants to list property for sale",
      budget: "AED 5.5M",
    },
    {
      id: 6,
      title: "Rental Agreement Review",
      client: "David Miller",
      type: "Documentation",
      property: "Yas Island, Studio 204",
      status: "approved",
      date: "2025-07-18",
      time: "9:00 AM",
      priority: "low",
      description: "Review rental agreement terms",
      budget: "AED 65K/year",
    },
  ];

  // Filter requests based on status and search
  const filteredRequests = requests.filter((request) => {
    const matchesStatus =
      filterStatus === "all" || request.status === filterStatus;
    const matchesSearch =
      searchQuery === "" ||
      request.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.property.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab = activeTab === "all" || request.status === activeTab;

    return matchesStatus && matchesSearch && matchesTab;
  });

  // Count requests by status
  const statusCounts = {
    all: requests.length,
    pending: requests.filter((r) => r.status === "pending").length,
    approved: requests.filter((r) => r.status === "approved").length,
    completed: requests.filter((r) => r.status === "completed").length,
    rejected: requests.filter((r) => r.status === "rejected").length,
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "approved":
        return <CheckCircle className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "approved":
        return "bg-green-100 text-green-700";
      case "completed":
        return "bg-blue-100 text-blue-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Valuation":
        return <DollarSign className="w-4 h-4" />;
      case "Viewing":
        return <Home className="w-4 h-4" />;
      case "Documentation":
        return <FileText className="w-4 h-4" />;
      case "Negotiation":
        return <MessageSquare className="w-4 h-4" />;
      case "Listing":
        return <Home className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#1e3a8a]">
              Agent Requests
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage and track all your client requests
            </p>
          </div>
          <Button className="bg-[#1e3a8a] hover:bg-[#1e3d8f] text-white">
            Export Report
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-l-4 border-yellow-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {statusCounts.pending}
                  </p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-green-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Approved</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {statusCounts.approved}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-blue-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {statusCounts.completed}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-gray-500">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Requests</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {statusCounts.all}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search by client, property, or request..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8">
            {["all", "pending", "approved", "completed", "rejected"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 px-1 text-sm font-medium capitalize transition-all ${
                    activeTab === tab
                      ? "text-[#1e3a8a] border-b-2 border-[#1e3a8a]"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab} ({statusCounts[tab as keyof typeof statusCounts]})
                </button>
              )
            )}
          </div>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <Card
                key={request.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            request.type === "Valuation"
                              ? "bg-purple-100"
                              : request.type === "Viewing"
                              ? "bg-blue-100"
                              : request.type === "Documentation"
                              ? "bg-green-100"
                              : request.type === "Negotiation"
                              ? "bg-orange-100"
                              : "bg-gray-100"
                          }`}
                        >
                          {getTypeIcon(request.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {request.title}
                            </h3>
                            <Badge
                              className={`${getStatusColor(
                                request.status
                              )} flex items-center gap-1`}
                            >
                              {getStatusIcon(request.status)}
                              {request.status}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`${getPriorityColor(
                                request.priority
                              )}`}
                            >
                              {request.priority} priority
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <User className="w-4 h-4" />
                                <span className="font-medium">
                                  Client:
                                </span>{" "}
                                {request.client}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Home className="w-4 h-4" />
                                <span className="font-medium">
                                  Property:
                                </span>{" "}
                                {request.property}
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">Date:</span>{" "}
                                {request.date} at {request.time}
                              </div>
                              {request.budget !== "N/A" && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                  <DollarSign className="w-4 h-4" />
                                  <span className="font-medium">
                                    Budget:
                                  </span>{" "}
                                  {request.budget}
                                </div>
                              )}
                            </div>
                          </div>

                          <p className="text-sm text-gray-500 mb-4">
                            {request.description}
                          </p>

                          <div className="flex items-center gap-3">
                            {request.status === "pending" && (
                              <>
                                <Button
                                  size="sm"
                                  className="bg-green-600 hover:bg-green-700 text-white"
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-red-600 border-red-600 hover:bg-red-50"
                                >
                                  Reject
                                </Button>
                              </>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-[#1e3a8a] border-[#1e3a8a] hover:bg-blue-50"
                            >
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-gray-600"
                            >
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Message Client
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No requests found
                </h3>
                <p className="text-sm text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AgentRequests;
