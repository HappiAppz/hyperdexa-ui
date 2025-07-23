import { CheckIcon } from "@heroicons/react/20/solid";
import { Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Dashboard = () => {
  const appointments = [
    {
      title: "Call Zack regarding Highland Park property",
      time: "01:00 PM - 02:00 PM",
      completed: true,
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
      completed: false,
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
      completed: false,
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
      completed: false,
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
      completed: false,
    },
    {
      title: "Meet Tina at Elm Street listing",
      time: "01:00 PM - 02:00 PM",
      completed: false,
    },
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
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_0.8fr] gap-4 sm:gap-6 lg:gap-8">
        {/* Appointments Card */}
        <div className="appointments-card">
          {/* Header */}
          <div className="appointments-header">
            <h2 className="appointments-title">Today's Appointments</h2>
            <button className="appointments-add-btn">
              <Plus className="appointments-add-icon" />
            </button>
          </div>

          {/* Timeline Content */}
          <div className="appointments-content">
            {/* Timeline Column */}
            <div className="timeline-column">
              {appointments.map((item, idx) => (
                <div key={`timeline-${idx}`} className="timeline-item">
                  {/* Timeline Dot */}
                  <div
                    className={`timeline-dot ${
                      item.completed
                        ? "timeline-dot--completed"
                        : "timeline-dot--pending"
                    }`}
                  >
                    {item.completed ? (
                      <div className="timeline-checkmark" />
                    ) : (
                      <div className="timeline-circle" />
                    )}
                  </div>

                  {/* Connecting Line */}
                  {idx < appointments.length - 1 && (
                    <div className="timeline-line" />
                  )}
                </div>
              ))}
            </div>

            {/* Content Column */}
            <div className="content-column">
              {appointments.map((item, idx) => (
                <div key={`content-${idx}`} className="appointment-item">
                  <div className="appointment-title">{item.title}</div>
                  <div className="appointment-time">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Follow Ups Card */}
        <div className="flex flex-col justify-between">
          <div className="rounded-2xl p-4 sm:p-5 border-2 border-[#e8eaf6]">
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <h2 className="text-base sm:text-lg font-bold text-[#012267]">
                Follow Ups
              </h2>
              <button className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#fffcf4] text-[#012267] border-[1px] border-[#012267] flex items-center justify-center text-2xl hover:bg-[#e0e0e0] transition-transform rotate-0 hover:rotate-90">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
            <div className="relative h-48 sm:h-64 overflow-hidden">
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
                    const maxThumbTop = el.clientHeight - 44;
                    thumb.style.top = `${scrollRatio * maxThumbTop}px`;
                  }
                }}
                id="followups-scrollable"
              >
                <div style={{ paddingRight: "20px" }}>
                  {followUps.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-4 border-b border-[#f0f0f0] last:border-b-0 gap-3 sm:gap-0"
                    >
                      <div className="border-l-2 border-[#012267] pl-3">
                        <div className="text-xs sm:text-sm font-medium text-[#012267] mb-1">
                          Follow up with {item.client}
                        </div>
                        <div className="text-xs text-gray-400">
                          Inactive {item.inactive}
                        </div>
                      </div>
                      <Button className="rounded-lg border-2 border-[#1e3a8a] text-[#012267] bg-[#fffcf4] hover:bg-[#012267] hover:text-white px-3 sm:px-5 py-2 font-medium text-xs sm:text-sm transition-colors w-full sm:w-auto">
                        Message now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              {/* Custom scrollbar overlay - Hidden on mobile */}
              <div className="pointer-events-none absolute top-0 right-0 h-full w-2.5 flex flex-col items-end hidden sm:flex">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 sm:mt-8">
            <div className="rounded-xl border-2 border-[#e8eaf6] text-center py-4 sm:py-6 cursor-pointer hover:border-[#1e3a8a] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 text-[#012267]">
                465+
              </div>
              <div className="text-sm sm:text-base font-medium text-[#012267]">
                Add new lead
              </div>
            </div>
            <div className="rounded-xl border-2 border-[#e8eaf6] text-center py-4 sm:py-6 cursor-pointer hover:border-[#012267] hover:shadow-lg transition-all flex flex-col items-center">
              <div className="text-2xl sm:text-3xl mb-2 text-[#012267]">
                360+
              </div>
              <div className="text-sm sm:text-base font-medium text-[#012267]">
                Add new property
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <div className="rounded-2xl bg-white shadow-xl p-5 sm:p-7 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[#012267] text-base sm:text-lg font-semibold">
                Total Leads
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#012267] rounded-full flex items-center justify-center text-xl">
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl sm:text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
              125
            </div>
            <div className="text-xs text-gray-400 font-medium">2 new added</div>
          </div>
          <div className="rounded-2xl bg-white shadow-xl p-5 sm:p-7 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <span className="text-[#012267] text-base sm:text-lg font-semibold">
                Total Properties
              </span>
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#012267] rounded-full flex items-center justify-center text-xl">
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl sm:text-[48px] font-bold text-[#1e3a8a] leading-none mb-2">
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
