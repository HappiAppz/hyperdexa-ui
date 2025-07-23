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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const LeadProfile = () => {
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

  const activityLog = [
    { time: "10:15", action: "You saved reem hills listing", date: "Today" },
    { time: "10:15", action: "You saved reem hills listing", date: "Today" },
    { time: "10:15", action: "You saved reem hills listing", date: "Today" },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "Yesterday",
    },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "Yesterday",
    },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "Yesterday",
    },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "2R June, Thursday",
    },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "2R June, Thursday",
    },
    {
      time: "10:15",
      action: "You saved reem hills listing",
      date: "2R June, Thursday",
    },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Lead Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardContent className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                  Josephine Gordon
                </h2>
                <Button
                  variant="outline"
                  className="text-blue-900 border-blue-900 bg-blue-50 w-full sm:w-auto justify-center"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                  Profile:
                </h3>
                <p className="text-gray-600 text-sm">
                  2-bedroom apartment in Reem Hills with a sea view. Preferably
                  something with a modern layout, good amenities, and ready to
                  move in within the next 2—3 months. Budget is around AED 1.4M.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Matched Properties */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg font-bold text-blue-900">
                Matched Properties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchedProperties.map((property) => (
                  <Link key={property.id} to={`/property/${property.id}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                      <div className="relative h-28 sm:h-32">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2">
                          <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
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

        {/* Activity Log */}
        <Card>
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
                  {activityLog
                    .filter((item) => item.date === "Today")
                    .map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-xs text-gray-500 w-8 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div className="text-sm text-gray-700 flex-1 min-w-0">
                          {item.action}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Yesterday */}
              <div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  Yesterday
                </div>
                <div className="space-y-3">
                  {activityLog
                    .filter((item) => item.date === "Yesterday")
                    .map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-xs text-gray-500 w-8 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div className="text-sm text-gray-700 flex-1 min-w-0">
                          {item.action}
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Older */}
              <div>
                <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                  2R June, Thursday
                </div>
                <div className="space-y-3">
                  {activityLog
                    .filter((item) => item.date === "2R June, Thursday")
                    .map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="text-xs text-gray-500 w-8 flex-shrink-0">
                          {item.time}
                        </div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full mt-1.5 flex-shrink-0"></div>
                        <div className="text-sm text-gray-700 flex-1 min-w-0">
                          {item.action}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LeadProfile;
