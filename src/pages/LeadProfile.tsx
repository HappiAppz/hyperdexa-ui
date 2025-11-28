import React, { useState, useEffect } from "react";
import {
  Calendar,
  MessageSquare,
  Heart,
  UserPlus,
  Home,
  Search,
  Download,
  ArrowRight,
  Bed,
  Bath,
  Square,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Building,
  Globe,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

interface Lead {
  id: number;
  leadName: string;
  requirement: string;
  description: string;
  location: string;
  price: {
    min: number;
    max: number;
  };
  propertyType: string;
  email: string;
  mobileNo: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

const LeadProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLead = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8081/api/leads", {
          headers: {
            Accept: "application/json",
          },
        });
        const result = await response.json();

        if (result.success && result.data) {
          const foundLead = result.data.find(
            (l: Lead) => l.id.toString() === id
          );
          setLead(foundLead || null);
        }
      } catch (error) {
        console.error("Error fetching lead:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchLead();
    }
  }, [id]);

  const matchedProperties = [
    {
      id: 1,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const formatPrice = (num: number) => {
    if (num >= 1000000) return `AED ${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `AED ${(num / 1000).toFixed(0)}K`;
    return `AED ${num}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (loading) {
    return (
      <Layout>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="w-full h-64 rounded-xl" />
            <Skeleton className="w-full h-96 rounded-xl" />
          </div>
          <div className="space-y-6">
            <Skeleton className="w-full h-64 rounded-xl" />
            <Skeleton className="w-full h-48 rounded-xl" />
          </div>
        </div>
      </Layout>
    );
  }

  if (!lead) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20">
          <UserPlus className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Lead not found
          </h3>
          <Link to="/leads">
            <Button className="mt-4">Back to Leads</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* Lead Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-14 h-14 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white font-bold text-xl">
                    <AvatarFallback>{getInitials(lead.leadName)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                      {lead.leadName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Added on {formatDate(lead.createdAt)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="text-blue-900 border-blue-900 bg-blue-50 w-full sm:w-auto justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-900" />
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm font-medium text-gray-900">
                      {lead.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-blue-900" />
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm font-medium text-gray-900">
                      {lead.mobileNo}
                    </div>
                  </div>
                </div>
              </div>

              {/* Requirements Section */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  Requirement:
                </h3>
                <p className="text-gray-700 text-sm font-medium">
                  {lead.requirement}
                </p>
              </div>

              {lead.description && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Description:
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line">
                    {lead.description}
                  </p>
                </div>
              )}

              {/* Lead Details Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <MapPin className="w-5 h-5 text-blue-900 mx-auto mb-1" />
                  <div className="text-xs text-gray-500">Location</div>
                  <div className="text-sm font-semibold text-gray-900 truncate">
                    {lead.location}
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <Building className="w-5 h-5 text-blue-900 mx-auto mb-1" />
                  <div className="text-xs text-gray-500">Property Type</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {lead.propertyType}
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <DollarSign className="w-5 h-5 text-blue-900 mx-auto mb-1" />
                  <div className="text-xs text-gray-500">Budget</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {formatPrice(lead.price.min)} - {formatPrice(lead.price.max)}
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg text-center">
                  <Globe className="w-5 h-5 text-blue-900 mx-auto mb-1" />
                  <div className="text-xs text-gray-500">Source</div>
                  <div className="text-sm font-semibold text-gray-900">
                    {lead.source}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matched Properties */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-bold text-blue-900">
                Matched Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchedProperties.map((property) => (
                  <Link key={property.id} to={`/property/${property.id}`}>
                    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden rounded-xl border border-gray-200">
                      <div className="relative h-28 sm:h-32">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow" />
                        </div>
                        <div className="absolute bottom-2 right-2">
                          <div className="bg-white rounded-full p-1">
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-900" />
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                          {property.name}
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">
                          {property.developer}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <Home className="w-3 h-3 mr-1" />
                          <span className="truncate">{property.location}</span>
                        </div>
                        <Button
                          className="w-full bg-gray-100 text-gray-900 hover:bg-gray-200"
                          size="sm"
                        >
                          View Property
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-base sm:text-lg font-bold text-gray-900">
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button
                variant="outline"
                className="w-full text-blue-900 border-blue-900 hover:bg-blue-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Lead
              </Button>
              <Button
                variant="outline"
                className="w-full text-blue-900 border-blue-900 hover:bg-blue-50"
              >
                <Mail className="w-4 h-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* Activity Log */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-bold text-gray-900">
                Activity Log
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 sm:space-y-6">
                {/* Today */}
                <div>
                  <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    Today
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="text-xs text-gray-500 w-12 flex-shrink-0">
                        {new Date().toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div className="text-sm text-gray-700 flex-1 min-w-0">
                        Lead profile viewed
                      </div>
                    </div>
                  </div>
                </div>

                {/* Created */}
                <div>
                  <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    {new Date(lead.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="text-xs text-gray-500 w-12 flex-shrink-0">
                        {new Date(lead.createdAt).toLocaleTimeString("en-US", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                      <div className="text-sm text-gray-700 flex-1 min-w-0">
                        Lead created from {lead.source}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LeadProfile;
