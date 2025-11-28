import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MessageSquare,
  Heart,
  UserPlus,
  Home,
  Search,
  Download,
  ArrowRight,
  ArrowLeft,
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
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link, useParams, useNavigate } from "react-router-dom";
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

interface MatchedProperty {
  id: number;
  bayutId: number;
  title: string;
  description: string;
  referenceNumber: string;
  propertyType: string;
  propertySubType: string;
  city: string;
  community: string;
  subCommunity: string;
  latitude: number;
  longitude: number;
  price: number;
  purpose: string;
  bedrooms: number;
  bathrooms: number;
  builtUpAreaSqft: number;
  plotAreaSqft: number | null;
  areaUnit: string;
  isFurnished: boolean;
  completionStatus: string;
  completionDate: string;
  completionPercentage: number | null;
  hasBalcony: boolean;
  hasParkingSpace: boolean;
  hasGym: boolean;
  hasSwimmingPool: boolean;
  hasElectricityBackup: boolean;
  hasCentralAC: boolean;
  hasDoubleGlazedWindows: boolean;
  view: string | null;
  projectName: string | null;
  developerName: string | null;
  agencyName: string;
  agentName: string;
  agentContact: string;
  media: {
    cover_photo: string;
    photo_count: number;
    photos: string[];
  } | null;
  permitNumber: string;
  isVerified: boolean;
  buildingName: string | null;
  portal: string;
  portalUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface MatchMetrics {
  overallScore: number;
  priceScore: number;
  propertyTypeScore: number;
  locationScore: number;
  matchReason: string;
  matchQuality: "EXCELLENT" | "GOOD" | "FAIR" | "POOR";
}

interface PropertyMatch {
  property: MatchedProperty;
  matchMetrics: MatchMetrics;
}

const LeadProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [matchedProperties, setMatchedProperties] = useState<PropertyMatch[]>([]);
  const [matchedLoading, setMatchedLoading] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

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

  // Fetch matched properties
  useEffect(() => {
    const fetchMatchedProperties = async () => {
      if (!id) return;
      
      try {
        setMatchedLoading(true);
        const response = await fetch(
          `http://localhost:8081/api/match/matchForLead/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();

        if (result.success && result.data) {
          setMatchedProperties(result.data);
        }
      } catch (error) {
        console.error("Error fetching matched properties:", error);
      } finally {
        setMatchedLoading(false);
      }
    };

    fetchMatchedProperties();
  }, [id]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getMatchQualityColor = (quality: string) => {
    switch (quality) {
      case "EXCELLENT":
        return "bg-emerald-500 text-white";
      case "GOOD":
        return "bg-blue-500 text-white";
      case "FAIR":
        return "bg-amber-500 text-white";
      case "POOR":
        return "bg-red-400 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

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

          {/* Matched Properties - Scrollable Carousel */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base sm:text-lg font-bold text-blue-900">
                Matched Properties
                {matchedProperties.length > 0 && (
                  <span className="ml-2 text-sm font-normal text-gray-500">
                    ({matchedProperties.length} found)
                  </span>
                )}
              </CardTitle>
              {matchedProperties.length > 3 && (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-blue-900"
                    onClick={() => scrollCarousel("left")}
                  >
                    <ChevronLeft className="h-4 w-4 text-blue-900" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full border-blue-900"
                    onClick={() => scrollCarousel("right")}
                  >
                    <ChevronRight className="h-4 w-4 text-blue-900" />
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {matchedLoading ? (
                <div className="flex gap-4 overflow-hidden">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="min-w-[280px]">
                      <Skeleton className="h-32 w-full rounded-xl mb-3" />
                      <Skeleton className="h-4 w-3/4 mb-2" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  ))}
                </div>
              ) : matchedProperties.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Home className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No matching properties found</p>
                </div>
              ) : (
                <div
                  ref={carouselRef}
                  className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory"
                  style={{ scrollbarWidth: "thin" }}
                >
                  {matchedProperties.map((match) => (
                    <div
                      key={match.property.bayutId}
                      onClick={() => navigate(`/property/${match.property.bayutId}`)}
                      className="min-w-[280px] max-w-[280px] cursor-pointer snap-start"
                    >
                      <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden rounded-xl border border-gray-200 h-full">
                        <div className="relative h-32">
                          <img
                            src={
                              match.property.media?.cover_photo ||
                              match.property.media?.photos?.[0] ||
                              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            }
                            alt={match.property.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                            }}
                          />
                          <div className="absolute top-2 left-2">
                            <Badge
                              className={`${getMatchQualityColor(
                                match.matchMetrics.matchQuality
                              )} text-xs font-medium`}
                            >
                              {match.matchMetrics.overallScore}% Match
                            </Badge>
                          </div>
                          <div className="absolute top-2 right-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-7 w-7 bg-white/80 hover:bg-white rounded-full"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Heart className="w-4 h-4 text-gray-600" />
                            </Button>
                          </div>
                          <div className="absolute bottom-2 right-2">
                            <div className="bg-blue-900 rounded-full p-1.5">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-16" />
                          <div className="absolute bottom-2 left-2 text-white">
                            <div className="text-sm font-bold">
                              AED {match.property.price.toLocaleString()}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-3">
                          <h4 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-1">
                            {match.property.title}
                          </h4>
                          <p className="text-xs text-blue-600 mb-2 font-medium">
                            {match.property.agencyName || match.property.developerName || "Agency"}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mb-3">
                            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                            <span className="truncate">
                              {match.property.community}, {match.property.city}
                            </span>
                          </div>
                          
                          {/* Property Features */}
                          <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Bed className="w-3 h-3" />
                              <span>{match.property.bedrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Bath className="w-3 h-3" />
                              <span>{match.property.bathrooms}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Square className="w-3 h-3" />
                              <span>{match.property.builtUpAreaSqft} sqft</span>
                            </div>
                          </div>

                          {/* Match Reason */}
                          <div className="bg-blue-50 rounded-lg p-2 mb-3">
                            <div className="flex items-start gap-1.5">
                              <TrendingUp className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                              <p className="text-xs text-blue-700 line-clamp-2">
                                {match.matchMetrics.matchReason}
                              </p>
                            </div>
                          </div>

                          <Button
                            className="w-full bg-blue-900 text-white hover:bg-blue-800"
                            size="sm"
                          >
                            View Property
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              )}
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
