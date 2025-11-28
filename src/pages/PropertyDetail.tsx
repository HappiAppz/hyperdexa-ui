import React, { useState, useEffect, useRef } from "react";
import {
  Calendar,
  MessageSquare,
  Heart,
  UserPlus,
  Home,
  Search,
  ArrowRight,
  Bed,
  Bath,
  Square,
  Zap,
  Snowflake,
  Grid,
  Plus,
  Car,
  Dumbbell,
  Waves,
  Loader2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  DollarSign,
  Building,
  TrendingUp,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

interface PropertyData {
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
  handoverStatus: string | null;
  occupancyStatus: string | null;
  amenities: Array<{
    type: string;
    items: string[];
  }> | null;
  hasBalcony: boolean;
  hasParkingSpace: boolean;
  hasGym: boolean;
  hasSwimmingPool: boolean;
  hasElectricityBackup: boolean;
  hasCentralAC: boolean;
  hasDoubleGlazedWindows: boolean;
  view: string | null;
  projectName: string;
  developerName: string;
  agencyName: string;
  agentName: string;
  agentContact: string;
  media: {
    cover_photo: string;
    photo_count: number;
    photos: string[];
    cover_video: string;
    video_count: number;
    videos: string[];
    panorama_count: number;
  } | null;
  permitNumber: string;
  isVerified: boolean;
  buildingName: string;
  portal: string;
  portalUrl: string;
  createdAt: string;
  updatedAt: string;
}

interface MatchedLead {
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

interface MatchMetrics {
  overallScore: number;
  priceScore: number;
  propertyTypeScore: number;
  locationScore: number;
  matchReason: string;
  matchQuality: "EXCELLENT" | "GOOD" | "FAIR" | "POOR";
}

interface LeadMatch {
  lead: MatchedLead;
  matchMetrics: MatchMetrics;
}

const PropertyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<PropertyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [matchedLeads, setMatchedLeads] = useState<LeadMatch[]>([]);
  const [matchedLoading, setMatchedLoading] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:8081/api/properties");
        const result = await response.json();
        
        if (result.success && result.data) {
          const foundProperty = result.data.find(
            (p: PropertyData) => p.bayutId.toString() === id
          );
          setProperty(foundProperty || null);
        }
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  // Fetch matched leads using internal property ID
  useEffect(() => {
    const fetchMatchedLeads = async () => {
      if (!property?.id) return;
      
      try {
        setMatchedLoading(true);
        const response = await fetch(
          `http://localhost:8081/api/match/matchForProperty/${property.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const result = await response.json();

        if (result.success && result.data) {
          setMatchedLeads(result.data);
        }
      } catch (error) {
        console.error("Error fetching matched leads:", error);
      } finally {
        setMatchedLoading(false);
      }
    };

    fetchMatchedLeads();
  }, [property?.id]);

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

  const formatLeadPrice = (price: { min: number; max: number }) => {
    const formatNum = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `AED ${formatNum(price.min)} - ${formatNum(price.max)}`;
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
            <Skeleton className="w-full h-80 rounded-xl" />
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

  if (!property) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center py-20">
          <Home className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Property not found</h3>
          <Link to="/properties">
            <Button className="mt-4">Back to Properties</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const propertyImages = property.media?.photos || [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ];

  const getAmenityIcon = (name: string) => {
    const iconMap: { [key: string]: any } = {
      "Electricity Backup": Zap,
      "Centrally Air-Conditioned": Snowflake,
      "Double Glazed Windows": Grid,
      "Parking": Car,
      "Gym or Health Club": Dumbbell,
      "Swimming Pool": Waves,
    };
    return iconMap[name] || Grid;
  };

  const topAmenities = (property.amenities || [])
    .flatMap((category) => category.items)
    .slice(0, 3)
    .map((name) => ({
      name,
      icon: getAmenityIcon(name),
    }));

  const totalAmenities = (property.amenities || []).reduce(
    (total, category) => total + category.items.length,
    0
  );

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Layout>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Property Images */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Main Image */}
            <div className="sm:col-span-3">
              <img
                src={propertyImages[0]}
                alt={property.title}
                className="w-full h-48 sm:h-80 object-cover rounded-xl border border-gray-200 shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                }}
              />
            </div>
            {/* Thumbnail Images */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              {propertyImages.slice(1, 3).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${property.title} ${index + 2}`}
                  className="w-full h-24 sm:h-36 object-cover rounded-xl border border-gray-200 shadow-sm"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              ))}
            </div>
          </div>

          {/* Property Info */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {property.title}
                </h1>
                <Button
                  variant="outline"
                  className="text-blue-900 border-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 font-semibold flex items-center justify-center sm:justify-start"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {property.agencyName || "Contact Agent"}
                </Button>
              </div>

              <div className="flex items-start text-gray-600 mb-4 text-sm sm:text-base">
                <Home className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>
                  {[
                    property.subCommunity,
                    property.community,
                    property.city,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </span>
              </div>

              {property.description && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    Description
                  </h3>
                  <p className="text-gray-600 text-sm whitespace-pre-line line-clamp-6">
                    {property.description}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Price</div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    AED {property.price.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Completion</div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {formatDate(property.completionDate)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Status</div>
                  <div className="text-lg sm:text-xl font-bold text-gray-900">
                    {property.completionStatus === "completed"
                      ? "Ready"
                      : "Off-Plan"}
                  </div>
                </div>
              </div>

              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg text-base sm:text-lg font-semibold shadow">
                Make PPT
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Property Information */}
          <Card className="rounded-2xl border border-gray-200 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-base sm:text-lg font-bold text-gray-900">
                Property Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 sm:space-y-4 pt-0">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Type</span>
                <span className="font-medium text-gray-900">
                  {property.propertyType}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Purpose</span>
                <span className="font-medium text-gray-900">
                  {property.purpose === "for-rent" ? "For Rent" : "For Sale"}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Completion</span>
                <span className="font-medium text-gray-900">
                  {property.completionStatus === "completed"
                    ? "Completed"
                    : "Off-Plan"}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-gray-600">Furnishing</span>
                <span className="font-medium text-gray-900">
                  {property.isFurnished ? "Furnished" : "Unfurnished"}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Property Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-3 sm:p-4 text-center">
                <Bed className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-base sm:text-lg font-bold text-gray-900">
                  {property.bedrooms}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">bed</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-3 sm:p-4 text-center">
                <Bath className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-base sm:text-lg font-bold text-gray-900">
                  {property.bathrooms}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">bath</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-3 sm:p-4 text-center">
                <Square className="w-6 h-6 sm:w-8 sm:h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-base sm:text-lg font-bold text-gray-900">
                  {property.builtUpAreaSqft.toLocaleString()}
                </div>
                <div className="text-xs sm:text-sm text-gray-500">sq ft</div>
              </CardContent>
            </Card>
          </div>

          {/* Amenities */}
          <Card className="rounded-2xl border border-gray-200 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-base sm:text-lg font-bold text-gray-900">
                Amenities and Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              {topAmenities.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                  {topAmenities.map((amenity, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <amenity.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
                      </div>
                      <div className="text-xs text-gray-600">{amenity.name}</div>
                    </div>
                  ))}
                </div>
              )}
              {totalAmenities > 3 && (
                <Button
                  variant="outline"
                  className="w-full text-blue-900 border-blue-900 hover:bg-blue-50 rounded-lg font-semibold"
                >
                  +{totalAmenities - 3} more amenities
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Matched For Section - Scrollable Carousel */}
      <div className="mt-8 sm:mt-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Matched Leads
            {matchedLeads.length > 0 && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({matchedLeads.length} found)
              </span>
            )}
          </h2>
          {matchedLeads.length > 4 && (
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
        </div>

        {matchedLoading ? (
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="min-w-[280px]">
                <Skeleton className="h-48 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : matchedLeads.length === 0 ? (
          <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-xl">
            <UserPlus className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p>No matching leads found for this property</p>
          </div>
        ) : (
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent snap-x snap-mandatory"
            style={{ scrollbarWidth: "thin" }}
          >
            {matchedLeads.map((match) => (
              <div
                key={match.lead.id}
                onClick={() => navigate(`/lead/${match.lead.id}`)}
                className="min-w-[300px] max-w-[300px] cursor-pointer snap-start"
              >
                <Card className="rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full">
                  <CardContent className="p-4 flex flex-col gap-3">
                    {/* Header with Avatar and Match Score */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10 bg-gradient-to-br from-[#667eea] to-[#764ba2]">
                          <AvatarFallback className="text-white font-semibold text-sm">
                            {getInitials(match.lead.leadName)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">
                            {match.lead.leadName}
                          </div>
                          <div className="text-xs text-gray-500">
                            {match.lead.source}
                          </div>
                        </div>
                      </div>
                      <Badge
                        className={`${getMatchQualityColor(
                          match.matchMetrics.matchQuality
                        )} text-xs font-medium`}
                      >
                        {match.matchMetrics.overallScore}%
                      </Badge>
                    </div>

                    {/* Requirement */}
                    <div className="text-sm text-gray-700 line-clamp-2">
                      {match.lead.description || match.lead.requirement}
                    </div>

                    {/* Lead Details */}
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <MapPin className="w-3.5 h-3.5 text-blue-900 flex-shrink-0" />
                        <span className="truncate">{match.lead.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <Building className="w-3.5 h-3.5 text-blue-900 flex-shrink-0" />
                        <span>{match.lead.propertyType}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <DollarSign className="w-3.5 h-3.5 text-blue-900 flex-shrink-0" />
                        <span>{formatLeadPrice(match.lead.price)}</span>
                      </div>
                    </div>

                    {/* Match Reason */}
                    <div className="bg-blue-50 rounded-lg p-2">
                      <div className="flex items-start gap-1.5">
                        <TrendingUp className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-blue-700 line-clamp-2">
                          {match.matchMetrics.matchReason}
                        </p>
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="flex gap-2 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-blue-900 border-blue-900 hover:bg-blue-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `mailto:${match.lead.email}`;
                        }}
                      >
                        <Mail className="w-3.5 h-3.5 mr-1" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-blue-900 border-blue-900 hover:bg-blue-50"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = `tel:${match.lead.mobileNo}`;
                        }}
                      >
                        <Phone className="w-3.5 h-3.5 mr-1" />
                        Call
                      </Button>
                    </div>

                    {/* View Profile Button */}
                    <Button
                      className="w-full bg-blue-900 text-white hover:bg-blue-800"
                      size="sm"
                    >
                      <ArrowRight className="w-3.5 h-3.5 mr-1" />
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default PropertyDetail;
