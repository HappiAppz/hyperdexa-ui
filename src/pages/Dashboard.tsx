import { CheckIcon } from '@heroicons/react/20/solid';
import { Plus,ArrowUpRight} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const appointments = [
    { title: 'Call Zack regarding Highland Park property', time: '01:00 PM - 02:00 PM', completed: true }, // Add a 'completed' property
    { title: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', completed: false },
    { title: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', completed: false },
    { title: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', completed: false },
    { title: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', completed: false },
    { title: 'Meet Tina at Elm Street listing', time: '01:00 PM - 02:00 PM', completed: false },
  ];

  const followUps = [
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
    { client: "John", inactive: "4 days" },
  ];

  return (
    <Layout>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_0.8fr] gap-8">
        {/* Appointments Card */}
        <div
          className="rounded-2xl p-7 shadow-xl relative overflow-hidden"
          style={{
            background: "linear-gradient(45deg, #022268 20%, #FFFBF5 140%)",
          }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">
              Today's Appointments
            </h2>
            <button className="w-9 h-9 rounded-full bg-white text-[#012267]] flex items-center justify-center text-2xl hover:bg-white/30 transition-transform rotate-0 hover:rotate-90">
              <Plus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-7 relative">
              {appointments.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 relative">
                  {/* Timeline vertical line */}
                  {idx < appointments.length - 1 && (
                    <div className="absolute left-[10px] top-[12px] bottom-[-38px] w-0.5 bg-white/30 z-0" />
                  )}
                  {/* Timeline dot/icon */}
                  <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-white flex items-center justify-center z-10">
                    {item.completed ? ( // Conditional rendering for the tick icon
                      <CheckIcon className="h-4 w-4 text-[#012267]" /> // Tailwind classes for size and color
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-[#012267]" /> // Original inner dot
                    )}
                  </div>

                  {/* Text content div - added ml-7 here to create the spacing */}
                  <div className="flex-1 ml-7">
                    <div className="text-sm font-medium text-white mb-1">
                      {item.title}
                    </div>
                    <div className="text-xs text-white/80">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Follow Ups Card */}
        <div className=" flex flex-col justify-between">
          <div className='rounded-2xl p-5 border-2 border-[#e8eaf6]'>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-bold text-[#012267]">
                Follow Ups
              </h2>
              <button className="w-9 h-9 rounded-full bg-[#fffcf4] text-[#012267] border-[1px] border-[#012267] flex items-center justify-center text-2xl hover:bg-[#e0e0e0] transition-transform rotate-0 hover:rotate-90">
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <div className="relative h-64 overflow-hidden">
              <div
                className="h-full overflow-y-scroll scrollbar-hide"
                style={{ width: "calc(100% + 20px)" }}
                onScroll={(e) => {
                  const el = e.currentTarget;
                  const thumb = document.getElementById(
                    "custom-followups-thumb"
                  );
                  if (thumb) {
                    const scrollRatio =
                      el.scrollTop / (el.scrollHeight - el.clientHeight);
                    const maxThumbTop = el.clientHeight - 44; // 44px = h-11
                    thumb.style.top = `${scrollRatio * maxThumbTop}px`;
                  }
                }}
                id="followups-scrollable"
              >
                <div style={{ paddingRight: "20px" }}>
                  {followUps.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between py-4 border-b border-[#f0f0f0] last:border-b-0"
                    >
                      <div className='border-l-2 border-[#012267] pl-3'>
                        <div className="text-sm font-medium text-[#012267] mb-1">
                          Follow up with {item.client}
                        </div>
                        <div className="text-xs text-gray-400">
                          Inactive {item.inactive}
                        </div>
                      </div>
                      <Button className="rounded-lg border-2 border-[#1e3a8a] text-[#012267] bg-[#fffcf4] hover:bg-[#012267] hover:text-white px-5 py-2 font-medium text-sm transition-colors">
                        Message now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Custom scrollbar overlay */}
              <div className="pointer-events-none absolute top-0 right-0 h-full w-2.5 flex flex-col items-end">
                <div className="w-2.5 h-full bg-slate-300 rounded-[60px] absolute left-0 top-0" />
                <div
                  id="custom-followups-thumb"
                  className="w-2.5 h-11 bg-blue-950 rounded-[60px] absolute left-0"
                  style={{ top: 0 }}
                />
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="rounded-xl border-2 border-[#e8eaf6] text-center py-6 cursor-pointer hover:border-[#1e3a8a] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#012267]"> 465+</div>
              <div className="text-base font-medium text-[#012267]">
                Add new lead
              </div>
            </div>
            <div className="rounded-xl border-2 border-[#e8eaf6] text-center py-6 cursor-pointer hover:border-[#012267] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="text-3xl mb-2 text-[#012267]"> 3e0+</div>
              <div className="text-base font-medium text-[#012267]">
                Add new property
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col gap-8">
          <div className="rounded-2xl bg-white shadow-xl p-7 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#012267] text-lg font-semibold">
                Total Leads
              </span>
              <div className="w-10 h-10 bg-[#012267] rounded-full flex items-center justify-center text-xl">
                <ArrowUpRight className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
              125
            </div>
            <div className="text-xs text-gray-400 font-medium">2 new added</div>
          </div>
          <div className="rounded-2xl bg-white shadow-xl p-7 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#012267] text-lg font-semibold">
                Total Properties
              </span>
              <div className="w-10 h-10 bg-[#012267] rounded-full flex items-center justify-center text-xl">
                <ArrowUpRight className="w-6 h-6  text-white" />
              </div>
            </div>
            <div className="text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
              40
            </div>
            <div className="text-xs text-gray-400 font-medium">2 new added</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
