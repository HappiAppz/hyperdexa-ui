import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Leads = () => {
  const leads = [
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      bedrooms: "2 bedroom",
      timeAgo: "1M-2M",
    },
  ];

  return (
    <Layout>
      {/* Leads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {leads.map((lead, index) => (
          <Link key={index} to={`/lead/${index}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {lead.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{lead.location}</span>
                    <span className="font-medium text-gray-900">
                      {lead.bedrooms}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Requirement</span>
                    <span className="font-medium text-gray-900">
                      {lead.timeAgo}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Leads;
