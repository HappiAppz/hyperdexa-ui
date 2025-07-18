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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const PropertyDetail = () => {
  const propertyImages = [
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  ];

  const amenities = [
    { name: "Electricity Backup", icon: Zap },
    { name: "Centrally Air-Conditioned", icon: Snowflake },
    { name: "Double Glazed Windows", icon: Grid },
  ];

  return (
    <Layout>
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Property Images */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <img
                src={propertyImages[0]}
                alt="Reem Hills"
                className="w-full h-80 object-cover rounded-xl border border-gray-200 shadow-sm"
              />
            </div>
            <div className="space-y-4">
              {propertyImages.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Reem Hills ${index + 2}`}
                  className="w-full h-36 object-cover rounded-xl border border-gray-200 shadow-sm"
                />
              ))}
            </div>
          </div>

          {/* Property Info */}
          <Card className="rounded-2xl shadow-md border border-gray-200">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Reem Hills</h1>
                <Button
                  variant="outline"
                  className="text-blue-900 border-blue-900 bg-blue-50 hover:bg-blue-100 rounded-lg px-4 py-2 font-semibold flex items-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />Q Properties
                </Button>
              </div>

              <div className="flex items-center text-gray-600 mb-4 text-base">
                <Home className="w-4 h-4 mr-2" />
                <span>Amara, Reem Hills, Al Reem Island, Abu Dhabi</span>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  Description
                </h3>
                <p className="text-gray-600 text-sm">
                  Amara Reem Hills is an upcoming residential development by Q
                  Properties, situated in the scenic Reem Hills community on Al
                  Reem Island, Abu Dhabi. This project is designed to offer a
                  harmonious blend of modern living amidst natural beauty, with
                  a focus on minimalist architecture and community-oriented
                  amenities.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Price from</div>
                  <div className="text-xl font-bold text-gray-900">
                    AED 1,350,000
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Completion</div>
                  <div className="text-xl font-bold text-gray-900">
                    31-12-2026
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Handover</div>
                  <div className="text-xl font-bold text-gray-900">Q1 2026</div>
                </div>
              </div>

              <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg text-lg font-semibold shadow">
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
              <CardTitle className="text-lg font-bold text-gray-900">
                Property Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Type</span>
                <span className="font-medium text-gray-900">Apartment</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Purpose</span>
                <span className="font-medium text-gray-900">For Sale</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Completion</span>
                <span className="font-medium text-gray-900">Off-Plan</span>
              </div>
              <div className="flex justify-between text-base">
                <span className="text-gray-600">Furnishing</span>
                <span className="font-medium text-gray-900">Unfurnished</span>
              </div>
            </CardContent>
          </Card>

          {/* Property Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-4 text-center">
                <Bed className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">1</div>
                <div className="text-sm text-gray-500">bed</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-4 text-center">
                <Bath className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">2</div>
                <div className="text-sm text-gray-500">bath</div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-gray-200 shadow-md">
              <CardContent className="p-4 text-center">
                <Square className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-lg font-bold text-gray-900">1,038</div>
                <div className="text-sm text-gray-500">sq ft</div>
              </CardContent>
            </Card>
          </div>

          {/* Amenities */}
          <Card className="rounded-2xl border border-gray-200 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold text-gray-900">
                Amenities and Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <amenity.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="text-xs text-gray-600">{amenity.name}</div>
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full text-blue-900 border-blue-900 hover:bg-blue-50 rounded-lg font-semibold"
              >
                +11 more amenities
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Matched For Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Matched for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((_, idx) => (
            <Card
              key={idx}
              className="rounded-2xl border border-gray-200 shadow-md p-4 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3 mb-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                <div className="font-semibold text-gray-900 text-base">
                  Josephine Gordon
                </div>
              </div>
              <div className="text-sm text-gray-700 mb-2">
                2 Bedroom apartment with a balcony and attached bathrooms
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                <div>
                  <span className="font-medium text-gray-900">Location</span>{" "}
                  Reem Island
                </div>
                <div>
                  <span className="font-medium text-gray-900">Requirement</span>{" "}
                  2 bedroom
                </div>
                <div>
                  <span className="font-medium text-gray-900">Price</span> 1M-2M
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
