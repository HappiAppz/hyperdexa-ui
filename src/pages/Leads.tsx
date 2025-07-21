import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
  ArrowRight,
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
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
    {
      name: "Josephine Gordon",
      sent: "2 days ago",
      description: "2 Bedroom apartment with a balcony and attached bathrooms",
      location: "Reem Island",
      requirement: "2 bedroom",
      price: "1M-2M",
    },
  ];

  return (
    <Layout>
      {/* Leads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[calc(100vh-120px)]">
        {leads.map((lead, index) => (
          <Link key={index} to={`/lead/${index}`}>
            <div className="bg-[#fffcf4] rounded-2xl border border-slate-300 hover:shadow-lg transition-shadow flex flex-col justify-between p-6 h-[280px]">
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <div className="text-blue-950 text-xl font-semibold tracking-tight">
                      {lead.name}
                    </div>
                    <div className="text-neutral-500 text-xs font-normal">
                      Added {lead.sent}
                    </div>
                  </div>
                  <div className="w-9 h-9 bg-blue-950 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="w-full text-blue-950 text-sm font-medium leading-relaxed">
                  {lead.description}
                </div>
              </div>

              <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="text-neutral-500 text-xs font-normal">
                    Location
                  </div>
                  <div className="text-blue-950 text-sm font-bold">
                    {lead.location}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="text-neutral-500 text-xs font-normal">
                    Requirement
                  </div>
                  <div className="text-blue-950 text-sm font-bold">
                    {lead.requirement}
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="text-neutral-500 text-xs font-normal">
                    Price
                  </div>
                  <div className="text-blue-950 text-sm font-bold">
                    {lead.price}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Leads;
