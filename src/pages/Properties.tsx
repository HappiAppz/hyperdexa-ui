
import Layout from '@/components/Layout';
import { Search, Plus, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Properties = () => {
  const properties = [
    {
      id: 1,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    },
    {
      id: 5,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop'
    },
    {
      id: 6,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop'
    },
    {
      id: 7,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop'
    },
    {
      id: 8,
      name: 'The Bridges',
      company: 'Aldar Properties',
      location: 'Al Reem Island, Abu Dhabi',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop'
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
              <h1 className="text-3xl font-bold text-gray-900">Your Properties</h1>
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

        {/* Price Range Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            <div className="w-96 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">1M</span>
                <span className="text-sm text-gray-600">50M</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-gray-200 rounded-full"></div>
                <div className="absolute top-0 left-0 h-2 bg-blue-900 rounded-full" style={{ width: '60%' }}></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full" style={{ left: '20%' }}></div>
                <div className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full" style={{ left: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full">
                  <Heart className="w-4 h-4 text-gray-400" />
                </button>
                <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full">
                  <ArrowRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{property.name}</h3>
                  <button className="p-1 bg-blue-900 rounded-full">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </button>
                </div>
                <div className="text-sm text-gray-600 mb-2">{property.company}</div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
                  {property.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Properties;
