
import Layout from '@/components/Layout';
import { Plus, MessageSquare, Mic } from 'lucide-react';

const Dashboard = () => {
  const appointments = [
    { name: 'Call Zack regarding Highland Park property', time: '01:00 PM - 02:00 PM', active: false },
    { name: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', active: true },
    { name: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', active: false },
    { name: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', active: false },
    { name: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', active: false },
    { name: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', active: false },
  ];

  const followUps = [
    { name: 'Follow up with John', time: 'Yesterday 6 PM' },
    { name: 'Follow up with John', time: 'Yesterday 6 PM' },
    { name: 'Follow up with John', time: 'Yesterday 6 PM' },
    { name: 'Follow up with John', time: 'Yesterday 6 PM' },
    { name: 'Follow up with John', time: 'Yesterday 6 PM' },
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
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, Maria!</h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
              <span>Show all tasks</span>
              <span>→</span>
            </button>
            <button className="p-2 bg-white rounded-full border border-gray-200">
              <Mic className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's Appointments */}
          <div className="lg:col-span-1">
            <div className="bg-blue-900 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Today's Appointments</h2>
                <button className="p-1 bg-white bg-opacity-20 rounded-full">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-3 h-3 rounded-full mt-1 ${appointment.active ? 'bg-white' : 'bg-white bg-opacity-40'}`}></div>
                    <div className="flex-1">
                      <div className="text-sm font-medium mb-1">{appointment.name}</div>
                      <div className="text-xs text-blue-200">{appointment.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Follow Ups and Stats */}
          <div className="lg:col-span-2 space-y-6">
            {/* Follow Ups */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">Follow Ups</h2>
                <button className="p-1 bg-gray-100 rounded-full">
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="space-y-3">
                {followUps.map((followUp, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{followUp.name}</div>
                      <div className="text-xs text-gray-500">{followUp.time}</div>
                    </div>
                    <button className="bg-blue-100 text-blue-900 px-3 py-1 rounded-lg text-xs font-medium">
                      Message now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats and Action Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* Total Leads */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Total Leads</h3>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">125</div>
                <div className="text-xs text-gray-500">2 new added</div>
              </div>

              {/* Total Properties */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-gray-600">Total Properties</h3>
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">40</div>
                <div className="text-xs text-gray-500">2 new added</div>
              </div>

              {/* Add New Lead */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-sm font-medium text-gray-900">Add new lead</div>
              </div>

              {/* Add New Property */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Plus className="w-6 h-6 text-blue-900" />
                </div>
                <div className="text-sm font-medium text-gray-900">Add new property</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
