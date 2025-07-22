import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Properties = () => {
  const properties = [
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
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 7,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 8,
      name: "The Bridges",
      developer: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <Layout>
      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <Link key={property.id} to={`/property/${property.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div className="absolute bottom-3 right-3">
                  <div className="bg-white rounded-full p-2">
                    <ArrowRight className="w-4 h-4 text-gray-900" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium">{property.name}</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">
                  {property.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {property.developer}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Home className="w-4 h-4 mr-1" />
                  {property.location}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Properties;
