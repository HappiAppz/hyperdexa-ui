import React, { useState, useEffect } from "react";
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
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";

interface Property {
  id: number;
  bayutId: number;
  title: string;
  description: string;
  propertyType: string;
  city: string;
  community: string;
  subCommunity: string;
  price: number;
  purpose: string;
  bedrooms: number;
  bathrooms: number;
  builtUpAreaSqft: number;
  agencyName: string;
  agentName: string;
  developerName: string;
  projectName: string;
  buildingName: string;
  media: {
    cover_photo: string;
    photos: string[];
  } | null;
  portalUrl: string;
}

const Properties = () => {
  const location = useLocation();
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [propertyUrl, setPropertyUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8081/api/properties");
      const result = await response.json();
      
      if (result.success && result.data) {
        setProperties(result.data);
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
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
    setPropertyUrl("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("http://localhost:8081/api/properties/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: propertyUrl }),
      });

      const result = await response.json();
      
      if (result.success || response.ok) {
        setShowFormModal(false);
        setShowConfirmation(true);
        setPropertyUrl("");
        // Refresh properties list
        await fetchProperties();
      } else {
        console.error("Error adding property:", result.message);
        alert("Failed to add property. Please try again.");
      }
    } catch (error) {
      console.error("Error adding property:", error);
      alert("Failed to add property. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDone = () => setShowConfirmation(false);

  const getPropertyImage = (property: Property) => {
    if (property.media?.cover_photo) {
      return property.media.cover_photo;
    }
    return "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
  };

  const getPropertyLocation = (property: Property) => {
    const parts = [property.subCommunity, property.community, property.city].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <Layout onAddPropertyClick={handleOpenForm}>
      {/* Properties Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-[#fffcf4] rounded-2xl border border-slate-300 overflow-hidden h-[320px]">
              <Skeleton className="w-full h-full" />
            </div>
          ))}
        </div>
      ) : properties.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Home className="w-16 h-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No properties found</h3>
          <p className="text-gray-500">Add your first property to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {properties.map((property) => (
            <Link key={property.bayutId} to={`/property/${property.bayutId}`}>
              <div className="bg-[#fffcf4] rounded-2xl border border-slate-300 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden h-[320px] relative">
                <div className="relative h-full">
                  <img
                    src={getPropertyImage(property)}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80";
                    }}
                  />
                  <div className="absolute top-3 right-3">
                    <Heart className="w-6 h-6 text-white drop-shadow-lg" />
                  </div>

                  {/* Property details overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent backdrop-blur-sm">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-white truncate flex-1">
                        {property.title}
                      </h3>
                      <div className="bg-white rounded-full p-2 ml-2">
                        <ArrowRight className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                    <p className="text-sm text-white/80 mb-1 truncate">
                      {property.agencyName || property.developerName || "Property"}
                    </p>
                    <div className="flex items-center text-xs text-white/70 mb-2">
                      <Home className="w-3 h-3 mr-1" />
                      {getPropertyLocation(property)}
                    </div>
                    <div className="flex items-center justify-between text-xs text-white">
                      <span className="font-semibold">AED {property.price.toLocaleString()}</span>
                      <span className="bg-white/20 px-2 py-1 rounded">
                        {property.bedrooms} bed • {property.bathrooms} bath
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Add Property Modal */}
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
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-blue-950" />
                <div className="text-blue-950 text-lg sm:text-xl font-medium leading-loose tracking-tight">
                  Add a new property
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
            
            {/* Property URL Input */}
            <div className="self-stretch sm:pr-12 py-2 border-b border-blue-950 flex items-center gap-2">
              <Home className="w-4 h-4 sm:w-5 sm:h-5 text-blue-950/40" />
              <input
                className="w-full bg-transparent outline-none text-blue-950/80 text-sm sm:text-base font-normal placeholder:text-blue-950/40"
                placeholder="Paste Property URL"
                name="url"
                value={propertyUrl}
                onChange={(e) => setPropertyUrl(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>

            <p className="self-stretch text-blue-950/60 text-xs sm:text-sm">
              Paste the URL from Bayut.com to import property details automatically
            </p>
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
                New Property Added
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

// Helper icon for check circle
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

export default Properties;
