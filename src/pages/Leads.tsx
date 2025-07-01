
import Layout from '@/components/Layout';
import { Search, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Leads = () => {
  const leads = [
    {
      id: 1,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 2,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 3,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 4,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 5,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 6,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 7,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    },
    {
      id: 8,
      name: 'Josephine Gordon',
      description: '2 Bedroom apartment with a balcony and attached bathrooms',
      location: 'Reem Island',
      type: '2 bedroom',
      duration: '1M-2M'
    }
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
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Leads</h1>
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

        {/* Leads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leads.map((lead) => (
            <Link
              key={lead.id}
              to={`/leads/${lead.id}`}
              className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">{lead.name}</h3>
                <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">?</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{lead.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Location</span>
                  <span className="text-blue-900 font-medium">{lead.location}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Property Type</span>
                  <span className="text-blue-900 font-medium">{lead.type}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">Budget</span>
                  <span className="text-blue-900 font-medium">{lead.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Leads;
