import React, { useState } from "react";
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
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    requirement: "",
    propertyType: "Apartment",
  });

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

  const handleOpenForm = () => setShowFormModal(true);
  const handleCloseForm = () => setShowFormModal(false);
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handlePropertyType = (type: string) =>
    setForm((prev) => ({ ...prev, propertyType: type }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFormModal(false);
    setShowConfirmation(true);
    // Here you would add the new lead to your leads array or make an API call
  };
  const handleDone = () => setShowConfirmation(false);

  return (
    <Layout onAddLeadClick={handleOpenForm}>
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

      {/* Add Lead Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <form
            className="w-[695px] p-6 bg-stone-50/90 rounded-xl backdrop-blur-lg flex flex-col justify-center items-end gap-3.5 relative animate-fade-in"
            onSubmit={handleSubmit}
            style={{ boxShadow: "0 0 41.7px 0 rgba(2,34,104,0.10)" }}
          >
            {/* Header */}
            <div className="self-stretch flex justify-between items-center">
              <div className="w-56 flex items-center gap-2">
                <UserPlus className="w-6 h-6 text-blue-950" />
                <div className="text-blue-950 text-xl font-medium leading-loose tracking-tight">
                  Add a new lead
                </div>
              </div>
              <div className="w-64 flex justify-between items-center gap-2">
                <button
                  type="submit"
                  className="w-32 px-6 py-2.5 bg-blue-950 rounded-[51px] shadow outline outline-1 outline-offset-[-1px] outline-blue-950 flex justify-center items-center gap-2 text-stone-50 text-lg font-medium leading-snug tracking-tight hover:bg-blue-900 transition-all"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="w-32 px-6 py-2 rounded-[51px] flex justify-center items-center gap-2 text-neutral-700 text-xl font-semibold leading-snug tracking-tight hover:bg-neutral-200 transition-all"
                  onClick={handleCloseForm}
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* Lead Name */}
            <div className="self-stretch pr-52 py-2 border-b border-blue-950 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-blue-950/40" />
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-base font-normal placeholder:text-blue-950/40"
                placeholder="Lead Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                required
              />
            </div>
            {/* Email & Mobile */}
            <div className="self-stretch flex justify-start items-center gap-12">
              <div className="flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-base font-normal placeholder:text-blue-950/40"
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <PhoneIcon className="w-5 h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-base font-normal placeholder:text-blue-950/40"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            {/* Requirement */}
            <div className="self-stretch pr-52 py-3 border-b border-blue-950 flex items-center gap-2">
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-base font-normal placeholder:text-blue-950/40"
                placeholder="Requirement"
                name="requirement"
                value={form.requirement}
                onChange={handleFormChange}
                required
              />
            </div>
            {/* Property Type */}
            <div className="self-stretch py-2 flex flex-col items-start gap-6">
              <div className="text-blue-950 text-lg font-normal leading-loose tracking-tight">
                Select Property Type
              </div>
              <div className="flex gap-8">
                <button
                  type="button"
                  className={`w-44 px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-xl font-medium leading-snug tracking-tight transition-all ${
                    form.propertyType === "Apartment"
                      ? "bg-blue-950 text-stone-50"
                      : "bg-blue-950/40 text-stone-50/80"
                  }`}
                  onClick={() => handlePropertyType("Apartment")}
                >
                  Apartment
                </button>
                <button
                  type="button"
                  className={`w-44 px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-xl font-medium leading-snug tracking-tight transition-all ${
                    form.propertyType === "Villa"
                      ? "bg-blue-950 text-stone-50"
                      : "bg-blue-950/40 text-stone-50/80"
                  }`}
                  onClick={() => handlePropertyType("Villa")}
                >
                  Villa
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="w-64 h-36 pt-3.5 bg-stone-50/60 rounded-2xl backdrop-blur-xl flex flex-col justify-between items-center animate-fade-in">
            <div className="w-10 h-10 flex items-center justify-center">
              <CheckCircleIcon className="w-8 h-8 text-blue-950" />
            </div>
            <div className="py-4 flex flex-col items-center">
              <div className="text-center text-blue-950 text-base font-bold leading-snug">
                New Lead Added
              </div>
            </div>
            <button
              className="self-stretch p-2.5 border-t border-slate-300 flex justify-center items-center text-blue-950 text-lg font-medium leading-snug tracking-tight hover:bg-blue-100 transition-all rounded-b-2xl"
              onClick={handleDone}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

// Helper icons for phone and check
const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h4.09a2 2 0 0 1 2 1.72c.13.81.26 1.61.4 2.41a2 2 0 0 1-1.1 2.18l-1.27.64a16 16 0 0 0 6.29 6.29l.64-1.27a2 2 0 0 1 2.18-1.1c.8.14 1.6.27 2.41.4A2 2 0 0 1 21 14.91V19a2 2 0 0 1-2 2h-1.08" />
  </svg>
);
const CheckCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2l4-4" />
  </svg>
);

export default Leads;
