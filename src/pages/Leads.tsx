import React, { useState, useEffect } from "react";
import {
  Calendar,
  MessageSquare,
  Heart,
  Plus,
  UserPlus,
  Home,
  Search,
  ArrowRight,
  Loader2,
  MapPin,
  DollarSign,
  FileText,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
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

const Leads = () => {
  const location = useLocation();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    leadName: "",
    email: "",
    mobileNo: "",
    requirement: "",
    description: "",
    location: "",
    priceMin: "",
    priceMax: "",
    propertyType: "Apartment",
    source: "Website",
  });

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8081/api/leads", {
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json();

      if (result.success && result.data) {
        setLeads(result.data);
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Auto-open modal when navigating with openAddModal state
  useEffect(() => {
    const state = location.state as { openAddModal?: boolean } | null;
    if (state?.openAddModal) {
      setShowFormModal(true);
      // Clear the state to prevent re-opening on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleOpenForm = () => setShowFormModal(true);
  const handleCloseForm = () => {
    setShowFormModal(false);
    setForm({
      leadName: "",
      email: "",
      mobileNo: "",
      requirement: "",
      description: "",
      location: "",
      priceMin: "",
      priceMax: "",
      propertyType: "Apartment",
      source: "Website",
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePropertyType = (type: string) =>
    setForm((prev) => ({ ...prev, propertyType: type }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        leadName: form.leadName,
        requirement: form.requirement,
        description: form.description,
        location: form.location,
        price: {
          min: parseFloat(form.priceMin) || 0,
          max: parseFloat(form.priceMax) || 0,
        },
        propertyType: form.propertyType,
        email: form.email,
        mobileNo: form.mobileNo,
        source: form.source,
      };

      const response = await fetch("http://localhost:8081/api/leads/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setShowFormModal(false);
        setShowConfirmation(true);
        setForm({
          leadName: "",
          email: "",
          mobileNo: "",
          requirement: "",
          description: "",
          location: "",
          priceMin: "",
          priceMax: "",
          propertyType: "Apartment",
          source: "Website",
        });
        // Refresh leads list
        await fetchLeads();
      } else {
        console.error("Error adding lead:", result.message);
        alert("Failed to add lead. Please try again.");
      }
    } catch (error) {
      console.error("Error adding lead:", error);
      alert("Failed to add lead. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDone = () => setShowConfirmation(false);

  const formatPrice = (price: { min: number; max: number }) => {
    const formatNum = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `${formatNum(price.min)}-${formatNum(price.max)}`;
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <Layout onAddLeadClick={handleOpenForm}>
      {/* Leads Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-[#fffcf4] rounded-2xl border border-slate-300 p-6 h-[280px]"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <Skeleton className="w-9 h-9 rounded-full" />
                </div>
                <Skeleton className="h-16 w-full" />
              </div>
              <div className="flex flex-row justify-between items-center mt-auto pt-4">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
              </div>
            </div>
          ))}
        </div>
      ) : leads.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <UserPlus className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            No leads found
          </h3>
          <p className="text-gray-500">Add your first lead to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[calc(100vh-120px)] animate-fade-in">
          {leads.map((lead) => (
            <Link key={lead.id} to={`/lead/${lead.id}`}>
              <div className="bg-[#fffcf4] rounded-2xl border border-slate-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between p-6 h-[280px]">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <div className="text-blue-950 text-xl font-semibold tracking-tight truncate max-w-[180px]">
                        {lead.leadName}
                      </div>
                      <div className="text-neutral-500 text-xs font-normal">
                        Added {getTimeAgo(lead.createdAt)}
                      </div>
                    </div>
                    <div className="w-9 h-9 bg-blue-950 rounded-full flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="w-full text-blue-950 text-sm font-medium leading-relaxed line-clamp-3">
                    {lead.description || lead.requirement}
                  </div>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="text-neutral-500 text-xs font-normal">
                      Location
                    </div>
                    <div className="text-blue-950 text-sm font-bold truncate max-w-[80px]">
                      {lead.location || "N/A"}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="text-neutral-500 text-xs font-normal">
                      Type
                    </div>
                    <div className="text-blue-950 text-sm font-bold">
                      {lead.propertyType}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="text-neutral-500 text-xs font-normal">
                      Price
                    </div>
                    <div className="text-blue-950 text-sm font-bold">
                      {formatPrice(lead.price)}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Add Lead Modal */}
      {showFormModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <form
            className="w-full max-w-[695px] mx-4 p-4 sm:p-6 bg-stone-50/90 rounded-xl backdrop-blur-lg flex flex-col justify-center items-end gap-3.5 relative animate-fade-in max-h-[90vh] overflow-y-auto"
            onSubmit={handleSubmit}
            style={{ boxShadow: "0 0 41.7px 0 rgba(2,34,104,0.10)" }}
          >
            {/* Header */}
            <div className="self-stretch flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6 text-blue-950" />
                <div className="text-blue-950 text-lg sm:text-xl font-medium leading-loose tracking-tight">
                  Add a new lead
                </div>
              </div>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-between items-center gap-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-32 px-6 py-2.5 bg-blue-950 rounded-[51px] shadow outline outline-1 outline-offset-[-1px] outline-blue-950 flex justify-center items-center gap-2 text-stone-50 text-base sm:text-lg font-medium leading-snug tracking-tight hover:bg-blue-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
                <button
                  type="button"
                  className="w-full sm:w-32 px-6 py-2 rounded-[51px] flex justify-center items-center gap-2 text-neutral-700 text-lg sm:text-xl font-semibold leading-snug tracking-tight hover:bg-neutral-200 transition-all"
                  onClick={handleCloseForm}
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Lead Name */}
            <div className="self-stretch sm:pr-52 py-2 border-b border-blue-950 flex items-center gap-2">
              <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                placeholder="Lead Name"
                name="leadName"
                value={form.leadName}
                onChange={handleFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Email & Mobile */}
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-12">
              <div className="w-full flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                  placeholder="E-mail"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="w-full flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                  placeholder="Mobile Number"
                  name="mobileNo"
                  value={form.mobileNo}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Requirement */}
            <div className="self-stretch py-2 border-b border-blue-950 flex items-center gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                placeholder="Requirement (e.g., Looking for a 3BHK apartment)"
                name="requirement"
                value={form.requirement}
                onChange={handleFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Description */}
            <div className="self-stretch py-2 border-b border-blue-950 flex items-start gap-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40 mt-1" />
              <textarea
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40 resize-none min-h-[60px]"
                placeholder="Description (detailed requirements)"
                name="description"
                value={form.description}
                onChange={handleFormChange}
                disabled={isSubmitting}
              />
            </div>

            {/* Location */}
            <div className="self-stretch py-2 border-b border-blue-950 flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                placeholder="Preferred Location"
                name="location"
                value={form.location}
                onChange={handleFormChange}
                required
                disabled={isSubmitting}
              />
            </div>

            {/* Price Range */}
            <div className="self-stretch flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-12">
              <div className="w-full flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                  placeholder="Min Price (AED)"
                  name="priceMin"
                  type="number"
                  value={form.priceMin}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="w-full flex-1 py-2 border-b border-blue-950 flex items-center gap-2">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
                <input
                  className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                  placeholder="Max Price (AED)"
                  name="priceMax"
                  type="number"
                  value={form.priceMax}
                  onChange={handleFormChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>

            {/* Source */}
            <div className="self-stretch py-2 border-b border-blue-950 flex items-center gap-2">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
              <select
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal"
                name="source"
                value={form.source}
                onChange={handleFormChange}
                disabled={isSubmitting}
              >
                <option value="Website">Website</option>
                <option value="Referral">Referral</option>
                <option value="Social Media">Social Media</option>
                <option value="Walk-in">Walk-in</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="self-stretch py-2 flex flex-col items-start gap-4 sm:gap-6">
              <div className="text-blue-950 text-base sm:text-lg font-normal leading-loose tracking-tight">
                Select Property Type
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
                <button
                  type="button"
                  className={`w-full sm:w-44 px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-lg sm:text-xl font-medium leading-snug tracking-tight transition-all ${
                    form.propertyType === "Apartment"
                      ? "bg-blue-950 text-stone-50"
                      : "bg-blue-950/40 text-stone-50/80"
                  }`}
                  onClick={() => handlePropertyType("Apartment")}
                  disabled={isSubmitting}
                >
                  Apartment
                </button>
                <button
                  type="button"
                  className={`w-full sm:w-44 px-6 py-2.5 rounded-xl flex justify-center items-center gap-2 text-lg sm:text-xl font-medium leading-snug tracking-tight transition-all ${
                    form.propertyType === "Villa"
                      ? "bg-blue-950 text-stone-50"
                      : "bg-blue-950/40 text-stone-50/80"
                  }`}
                  onClick={() => handlePropertyType("Villa")}
                  disabled={isSubmitting}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
          <div className="w-full max-w-64 mx-4 h-auto min-h-36 pt-3.5 bg-stone-50/60 rounded-2xl backdrop-blur-xl flex flex-col justify-between items-center animate-fade-in">
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <CheckCircleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-950" />
            </div>
            <div className="py-4 flex flex-col items-center">
              <div className="text-center text-blue-950 text-sm sm:text-base font-bold leading-snug">
                New Lead Added
              </div>
            </div>
            <button
              className="self-stretch p-2.5 border-t border-slate-300 flex justify-center items-center text-blue-950 text-base sm:text-lg font-medium leading-snug tracking-tight hover:bg-blue-100 transition-all rounded-b-2xl"
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
