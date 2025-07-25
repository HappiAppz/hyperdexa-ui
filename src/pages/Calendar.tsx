import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Edit3, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";
import CalendarInactiveIcon from "@/assets/icons/calendar_inactive.svg";
import { useIsMobile } from "@/hooks/use-mobile";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 25)); // June 25, 2025
  const [showMiniCalendar, setShowMiniCalendar] = useState(false);
  const isMobile = useIsMobile();

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    let startingDayOfWeek = firstDay.getDay();
    startingDayOfWeek = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
    const days = [];

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const days = getDaysInMonth(selectedDate);
  const monthYear = selectedDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const events = [
    {
      date: 24,
      title: "Holiday",
      allDay: true,
      color: "bg-purple-100 text-purple-700",
    },
    {
      date: 25,
      title: "Call Tina at Starbucks regarding Reem Hills Property",
      time: "12:00 PM - 1:00PM",
      color: "bg-orange-100 text-orange-700",
      hasLocation: true,
    },
    {
      date: 28,
      title: "Call Tina at Starbucks regarding Reem Hills Property",
      time: "12:00 PM - 1:00PM",
      color: "bg-orange-100 text-orange-700",
    },
  ];

  const weekEvents = [
    { day: "Jun, Mon", date: 23 },
    { day: "Jun, Tue", date: 24, isHoliday: true },
    {
      day: "Jun, Wed",
      date: 25,
      events: [
        {
          title: "Call Tina at Starbucks regarding Reem Hills Property",
          time: "12:00 PM - 1:00PM, 25 June, Wednesday",
          color: "orange",
        },
      ],
    },
    { day: "Jun, Thu", date: 26 },
    { day: "Jun, Fri", date: 27 },
    {
      day: "Jun, Sat",
      date: 28,
      events: [
        {
          title: "Call Tina at Starbucks regarding Reem Hills Property",
          time: "12:00 PM - 1:00PM",
          color: "orange",
        },
      ],
    },
    { day: "Jun, Sun", date: 29 },
    { day: "Jun, Sun", date: 30 },
  ];

  // Month navigation handlers
  const handlePrevMonth = () => {
    setSelectedDate((prev) => {
      const prevMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return prevMonth;
    });
  };
  const handleNextMonth = () => {
    setSelectedDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  // Helper to get the start (Monday) and days of the week for a given date
  const getWeekDays = (date) => {
    const curr = new Date(date);
    // JS: 0=Sun, 1=Mon, ..., 6=Sat. We want week to start on Monday
    const day = curr.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    const monday = new Date(curr);
    monday.setDate(curr.getDate() + diffToMonday);
    // Build week array (Mon-Sun)
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);
      return d;
    });
  };

  // Move week by n weeks (n can be negative)
  const moveWeek = (n) => {
    setSelectedDate((prev) => {
      const newDate = new Date(prev);
      newDate.setDate(prev.getDate() + n * 7);
      return newDate;
    });
  };

  // Go to today
  const goToToday = () => {
    setSelectedDate(new Date());
  };

  // Events keyed by YYYY-MM-DD for demo
  const eventsByDate = {
    "2025-06-24": [
      {
        title: "Holiday",
        allDay: true,
        color: "bg-purple-100 text-purple-700",
        type: "holiday",
      },
    ],
    "2025-06-25": [
      {
        title: "Call Tina at Starbucks regarding Reem Hills Property",
        time: "12:00 PM - 1:00PM",
        color: "bg-orange-100 text-orange-700",
        hasLocation: true,
        type: "event",
      },
      {
        title: "Send Reem Hills Property to Kevin",
        time: "2:00 PM - 4:00PM",
        color: "bg-purple-100 text-purple-700",
        type: "event",
      },
    ],
    "2025-06-28": [
      {
        title: "Call Tina at Starbucks regarding Reem Hills Property",
        time: "12:00 PM - 1:00PM",
        color: "bg-orange-100 text-orange-700",
        type: "event",
      },
    ],
  };

  // Helper to format date as YYYY-MM-DD
  const formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const weekDaysArr = getWeekDays(selectedDate);
  const weekRangeLabel = `${weekDaysArr[0].getDate()} ${weekDaysArr[0].toLocaleString(
    "en-US",
    { month: "short" }
  )}-${weekDaysArr[6].getDate()} ${weekDaysArr[6].toLocaleString("en-US", {
    month: "short",
  })}`;

  const renderSidebar = () => (
    <div className="w-full lg:w-80 flex-shrink-0">
      <button className="w-full px-4 sm:px-6 py-3 mt-3 mb-6 rounded-[51px] outline outline-1 outline-offset-[-1px] outline-blue-950 inline-flex justify-center items-center gap-3 sm:gap-5 hover:bg-gray-50 transition-colors">
        <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
          <img
            src={CalendarInactiveIcon}
            alt="Calendar"
            className="w-5 h-5 sm:w-6 sm:h-6"
          />
        </div>
        <div className="text-center justify-center text-blue-950 text-lg sm:text-xl font-medium leading-snug tracking-tight">
          Add new task
        </div>
      </button>

      {/* Mini Calendar */}
      <div className="bg-slate-200 rounded-xl p-3 sm:p-4 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-blue-950 text-sm sm:text-base">
            {monthYear}
          </h3>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button
              className="w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-1.5 bg-blue-950 rounded-3xl shadow-[0px_6.666666507720947px_14.666666030883789px_0px_rgba(0,0,0,0.22)] flex justify-center items-center hover:bg-blue-800 transition-colors"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-stone-50" />
            </button>
            <button
              className="w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-1.5 bg-blue-950 rounded-3xl shadow-[0px_6.666666507720947px_14.666666030883789px_0px_rgba(0,0,0,0.22)] flex justify-center items-center hover:bg-blue-800 transition-colors"
              onClick={handleNextMonth}
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-stone-50" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-xs text-center text-black font-medium py-1"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center"
            >
              {day && (
                <button
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-[37.74px] text-xs font-bold flex items-center justify-center transition-colors ${
                    day === selectedDate.getDate() &&
                    selectedDate.getMonth() ===
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        day
                      ).getMonth()
                      ? "bg-blue-950 text-stone-50"
                      : "bg-slate-200 text-neutral-700 hover:bg-slate-300"
                  }`}
                  onClick={() => {
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth(),
                        day
                      )
                    );
                  }}
                >
                  {day}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar Categories */}
      <div className="mt-6 space-y-4">
        <div>
          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronRight className="w-4 h-4" />
            <span>My calendars</span>
          </button>
          <div className="ml-6 mt-2 space-y-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span>Routine</span>
              </span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm flex items-center space-x-2">
                <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                <span>Events</span>
              </span>
            </label>
          </div>
        </div>

        <div>
          <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <ChevronRight className="w-4 h-4" />
            <span>Other calendars</span>
          </button>
          <div className="ml-6 mt-2">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded" />
              <span className="text-sm flex items-center space-x-2">
                <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                <span>Holidays</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Mobile Toggle for Calendar Sidebar */}
      {isMobile && (
        <div className="mb-4">
          <button
            onClick={() => setShowMiniCalendar(!showMiniCalendar)}
            className="w-full p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors touch-manipulation"
          >
            <span className="font-medium text-blue-950 text-base">
              Calendar & Controls
            </span>
            <ChevronRight
              className={`w-5 h-5 text-blue-950 transition-transform ${
                showMiniCalendar ? "rotate-90" : ""
              }`}
            />
          </button>

          {showMiniCalendar && (
            <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              {renderSidebar()}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Desktop Sidebar */}
        {!isMobile && renderSidebar()}

        {/* Main Calendar View */}
        <div className="flex-1 py-2 sm:py-5">
          <div className="pb-3 flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-3 sm:gap-5 order-2 sm:order-1">
              <button
                className="px-4 sm:px-5 py-2 rounded-full border border-blue-950/40 text-blue-950 text-base sm:text-lg hover:bg-gray-50 transition-colors touch-manipulation"
                onClick={goToToday}
              >
                Today
              </button>
              <div className="text-blue-950 text-xl sm:text-3xl font-medium">
                {weekRangeLabel}
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  className="hover:opacity-70 transition-opacity p-1 touch-manipulation"
                  onClick={() => moveWeek(-1)}
                >
                  <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-blue-950" />
                </button>
                <button
                  className="hover:opacity-70 transition-opacity p-1 touch-manipulation"
                  onClick={() => moveWeek(1)}
                >
                  <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-blue-950" />
                </button>
              </div>
            </div>
          </div>

          {/* Week Days */}
          <div className="space-y-3">
            {weekDaysArr.map((day, index) => {
              const dayLabel = `${day.toLocaleString("en-US", {
                month: "short",
              })}, ${day.toLocaleString("en-US", { weekday: "short" })}`;
              const dateNum = day.getDate();
              const dateKey = formatDate(day);
              const events = eventsByDate[dateKey] || [];

              return (
                <div
                  key={index}
                  className="p-3 sm:p-4 bg-slate-200/50 rounded-2xl sm:rounded-3xl border-2 border-slate-300 flex flex-col sm:flex-row items-start sm:items-center gap-3 min-h-[4rem]"
                >
                  <div className="w-full sm:w-36 flex items-center gap-2 flex-shrink-0">
                    <div className="w-10 h-8 sm:w-12 sm:h-10 rounded-full flex items-center justify-center">
                      <div className="text-blue-950 text-xl sm:text-2xl font-normal">
                        {dateNum}
                      </div>
                    </div>
                    <div className="text-blue-950 text-sm sm:text-base font-medium">
                      {dayLabel}
                    </div>
                  </div>

                  {events.length > 0 && (
                    <div className="flex-1 w-full flex flex-col gap-3">
                      {events.map((event, eventIndex) => {
                        // Holiday event
                        if (event.type === "holiday") {
                          return (
                            <div
                              key={eventIndex}
                              className="p-3 sm:p-4 bg-violet-400/20 rounded-xl flex items-center gap-3 sm:gap-4"
                            >
                              <div className="w-4 h-4 sm:w-5 sm:h-5 bg-violet-400 rounded flex-shrink-0" />
                              <div className="w-24 sm:w-36 text-neutral-700 text-sm sm:text-lg">
                                All day
                              </div>
                              <div className="flex-1 text-blue-950 text-sm sm:text-lg font-medium">
                                {event.title}
                              </div>
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-zinc-300 rounded flex-shrink-0" />
                              <div className="w-2 h-1 sm:w-3 sm:h-1.5 bg-blue-950 flex-shrink-0" />
                            </div>
                          );
                        }

                        // Regular events
                        const isExpandedEvent =
                          dateNum === 25 &&
                          eventIndex === 0 &&
                          event.hasLocation;
                        const bgColor = event.title.includes("Send Reem Hills")
                          ? "bg-fuchsia-400/20"
                          : "bg-orange-300/20";
                        const dotColor = event.title.includes("Send Reem Hills")
                          ? "bg-fuchsia-400"
                          : "bg-orange-300";

                        if (isExpandedEvent) {
                          // Expanded event view for first event on June 25th
                          return (
                            <div
                              key={eventIndex}
                              className="h-auto sm:h-40 flex flex-col gap-3"
                            >
                              <div className="p-3 sm:p-4 bg-orange-300/20 rounded-xl flex flex-col gap-6 sm:gap-10">
                                <div className="flex items-start gap-3 sm:gap-4">
                                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-orange-300 rounded flex-shrink-0" />
                                  <div className="flex-1 flex flex-col">
                                    <div className="text-blue-950 text-sm sm:text-lg font-medium">
                                      {event.title}
                                    </div>
                                    <div className="text-neutral-700 text-sm sm:text-lg">
                                      12:00 PM - 1:00PM, 25 June, Wednesday
                                    </div>
                                  </div>
                                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-zinc-300 rounded flex-shrink-0" />
                                  <div className="w-2 h-1 sm:w-3 sm:h-1.5 bg-zinc-900 flex-shrink-0" />
                                </div>
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-2">
                                  <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 rounded-full border border-blue-950/40 flex items-center justify-center sm:justify-start gap-2 hover:bg-gray-50 transition-colors touch-manipulation">
                                    <MapPin className="w-4 h-4 text-blue-950" />
                                    <span className="text-blue-950 text-sm sm:text-lg font-medium">
                                      Location
                                    </span>
                                  </button>
                                  <div className="flex items-center gap-2">
                                    <button className="w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors touch-manipulation">
                                      <Edit3 className="w-4 h-4 text-blue-950" />
                                    </button>
                                    <button className="w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors touch-manipulation">
                                      <Trash2 className="w-4 h-4 text-blue-950" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        } else {
                          // Regular event view
                          return (
                            <div
                              key={eventIndex}
                              className={`p-3 sm:p-4 ${bgColor} rounded-xl flex items-center gap-3 sm:gap-4`}
                            >
                              <div
                                className={`w-4 h-4 sm:w-5 sm:h-5 ${dotColor} rounded flex-shrink-0`}
                              />
                              <div className="w-32 sm:w-40 text-neutral-700 text-sm sm:text-lg">
                                {event.time}
                              </div>
                              <div
                                className={`flex-1 text-sm sm:text-lg font-medium ${
                                  event.title.includes("Send Reem Hills")
                                    ? "text-black"
                                    : "text-blue-950"
                                }`}
                              >
                                {event.title}
                              </div>
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-zinc-300 rounded flex-shrink-0" />
                              <div className="w-2 h-1 sm:w-3 sm:h-1.5 bg-blue-950 flex-shrink-0" />
                            </div>
                          );
                        }
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
