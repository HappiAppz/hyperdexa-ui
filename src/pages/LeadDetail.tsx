import Layout from "@/components/Layout";
import { MessageSquare, Heart, ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const LeadDetail = () => {
  const matchedProperties = [
    {
      id: 1,
      name: "The Bridges",
      company: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      name: "The Bridges",
      company: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      name: "The Bridges",
      company: "Aldar Properties",
      location: "Al Reem Island, Abu Dhabi",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop",
    },
  ];

  const activityLog = [
    { time: "10:15", action: "You send reem hills listing", day: "Today" },
    { time: "10:15", action: "You send reem hills listing", day: "Today" },
    { time: "10:15", action: "You send reem hills listing", day: "Today" },
    { time: "10:15", action: "You send reem hills listing", day: "Yesterday" },
    { time: "10:15", action: "You send reem hills listing", day: "Yesterday" },
    { time: "10:15", action: "You send reem hills listing", day: "Yesterday" },
    {
      time: "10:15",
      action: "You send reem hills listing",
      day: "25 June, Thursday",
    },
    {
      time: "10:15",
      action: "You send reem hills listing",
      day: "25 June, Thursday",
    },
    {
      time: "10:15",
      action: "You send reem hills listing",
      day: "25 June, Thursday",
    },
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Lead Profile */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Josephine Gordon
                </h2>
                <button className="flex items-center space-x-2 text-blue-900 bg-blue-50 px-4 py-2 rounded-lg">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Message</span>
                </button>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">Profile:</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  2-bedroom apartment in Reem Hills with a sea view. Preferably
                  something with a modern layout, good amenities, and ready to
                  move in within the next 2–3 months. Budget is around AED 1.4M.
                </p>
              </div>
            </div>

            {/* Matched Properties */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Matched Properties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {matchedProperties.map((property) => (
                  <Link
                    key={property.id}
                    to={`/properties/${property.id}`}
                    className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-full h-32 object-cover"
                      />
                      <button className="absolute top-2 right-2 p-1 bg-white rounded-full">
                        <Heart className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {property.name}
                        </h4>
                        <button className="p-1 bg-blue-900 rounded-full">
                          <ArrowRight className="w-3 h-3 text-white" />
                        </button>
                      </div>
                      <div className="text-xs text-gray-600 mb-1">
                        {property.company}
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mr-1"></span>
                        {property.location}
                      </div>
                      <div className="mt-3">
                        <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg text-sm font-medium">
                          View Property
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity Log */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Activity Log
            </h3>
            <div className="space-y-6">
              {["Today", "Yesterday", "25 June, Thursday"].map((day) => (
                <div key={day}>
                  <div className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                    {day}
                  </div>
                  <div className="space-y-3">
                    {activityLog
                      .filter((log) => log.day === day)
                      .map((log, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-500 mb-1">
                              {log.time}
                            </div>
                            <div className="text-sm text-gray-900">
                              {log.action}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LeadDetail;
