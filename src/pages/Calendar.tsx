
import Layout from '@/components/Layout';

const Calendar = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">25</div>
              <div className="text-sm text-gray-500">Wed, June</div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Calendar</h1>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Calendar View</h2>
          <p className="text-gray-600">Calendar functionality coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
