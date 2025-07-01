
import Layout from '@/components/Layout';
import { Search, Plus, Heart, Mic, Bed, Bath, Grid3X3, Zap, Snowflake, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyDetail = () => {
  const amenities = [
    { icon: Zap, label: 'Electricity Backup' },
    { icon: Snowflake, label: 'Centrally Air-Conditioned' },
    { icon: ShieldCheck, label: 'Double Glazed Windows' }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-500">Wed, June</div>
            </div>
            <div className="flex items-center space-x-2 text-gray-500">
              <Link to="/properties" className="hover:text-gray-700">Your Properties</Link>
              <span>→</span>
              <span className="text-gray-900 font-semibold">Reem Hills</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for anything..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-1 rounded">
                <Search className="w-4 h-4" />
              </button>
            </div>
            <button className="p-2 bg-blue-900 text-white rounded-full">
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Images and Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=400&fit=crop" 
                  alt="Reem Hills Main View" 
                  className="w-full h-64 object-cover rounded-xl"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=200&fit=crop" 
                  alt="Reem Hills View 2" 
                  className="w-full h-24 object-cover rounded-xl"
                />
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop" 
                  alt="Reem Hills View 3" 
                  className="w-full h-24 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Reem Hills</h1>
                <button className="flex items-center space-x-2 text-blue-900 bg-blue-50 px-4 py-2 rounded-lg">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">123 Properties</span>
                </button>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                Amani, Reem Hills, Al Reem Island, Abu Dhabi
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Amara Reem Hills is an upcoming residential development by Ω Properties, situated in the scenic Reem Hills community 
                  on Al Reem Island, Abu Dhabi. The project is designed to offer a harmonious blend of modern living amidst natural 
                  beauty, with a focus on minimalist architecture and community-oriented amenities.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Price from</div>
                  <div className="text-xl font-bold text-gray-900">AED 1,350,000</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Completion</div>
                  <div className="text-xl font-bold text-gray-900">31-12-2026</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Handover</div>
                  <div className="text-xl font-bold text-gray-900">Q1 2026</div>
                </div>
              </div>

              <button className="w-full bg-blue-900 text-white py-3 rounded-xl font-semibold">
                Make PPT
              </button>
            </div>
          </div>

          {/* Right Column - Property Information and Features */}
          <div className="space-y-6">
            {/* Property Information Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Property Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Type</span>
                  <span className="font-medium text-gray-900">Apartment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Purpose</span>
                  <span className="font-medium text-gray-900">For Sale</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion</span>
                  <span className="font-medium text-gray-900">Off-Plan</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Furnishing</span>
                  <span className="font-medium text-gray-900">Unfurnished</span>
                </div>
              </div>
            </div>

            {/* Room Details */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <Bed className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
                <div className="text-xs text-gray-600">bed</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <Bath className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">2</div>
                <div className="text-xs text-gray-600">bath</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-200 text-center">
                <Grid3X3 className="w-8 h-8 text-blue-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">1,038</div>
                <div className="text-xs text-gray-600">sq ft</div>
              </div>
            </div>

            {/* Amenities and Features */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Amenities and Features</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                      <amenity.icon className="w-6 h-6 text-blue-900" />
                    </div>
                    <div className="text-xs text-gray-600 text-center">{amenity.label}</div>
                  </div>
                ))}
              </div>
              <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium">
                +11 more amenities
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetail;
