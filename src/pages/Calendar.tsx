import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, Edit3, Trash2 } from "lucide-react";
import Layout from "@/components/Layout";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 5, 25)); // June 25, 2025

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

  return (
    <Layout>
      <div className="flex gap-6">
        {/* Left Sidebar */}
        <div className="w-80">
          <button className="w-full mb-6 bg-white border-2 border-gray-300 rounded-lg px-4 py-3 text-left flex items-center space-x-2 hover:bg-gray-50">
            <span className="text-gray-600">📅</span>
            <span className="font-medium">Add new task</span>
          </button>

          {/* Mini Calendar */}
          <div className="bg-slate-200 rounded-xl p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-950">{monthYear}</h3>
              <div className="flex space-x-1">
                <button
                  className="w-7 p-2.5 bg-blue-950 rounded-3xl shadow-[0px_6.666666507720947px_14.666666030883789px_0px_rgba(0,0,0,0.22)] flex justify-center items-center gap-1"
                  onClick={handlePrevMonth}
                >
                  <ChevronLeft className="w-4 h-4 text-stone-50" />
                </button>
                <button
                  className="w-7 p-2.5 bg-blue-950 rounded-3xl shadow-[0px_6.666666507720947px_14.666666030883789px_0px_rgba(0,0,0,0.22)] flex justify-center items-center gap-1"
                  onClick={handleNextMonth}
                >
                  <ChevronRight className="w-4 h-4 text-stone-50" />
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
                      className={`w-10 h-10 rounded-[37.74px] text-xs font-bold ${
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
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                <ChevronRight className="w-4 h-4" />
                <span>My calendars</span>
              </button>
              <div className="ml-6 mt-2 space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm flex items-center space-x-2">
                    <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
                    <span>Routine</span>
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" defaultChecked className="rounded" />
                  <span className="text-sm flex items-center space-x-2">
                    <span className="w-3 h-3 bg-orange-400 rounded-full"></span>
                    <span>Events</span>
                  </span>
                </label>
              </div>
            </div>

            <div>
              <button className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900">
                <ChevronRight className="w-4 h-4" />
                <span>Other calendars</span>
              </button>
              <div className="ml-6 mt-2">
                <label className="flex items-center space-x-2">
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

        {/* Main Calendar View */}
        <div className="flex-1 py-5 rounded-[20px] inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
          <div className="self-stretch pb-3 inline-flex justify-between items-start">
            <div className="flex justify-start items-center gap-5">
              <button
                className="px-5 py-2 rounded-[80px] outline outline-1 outline-offset-[-1px] outline-blue-950/40 flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50"
                onClick={goToToday}
              >
                <div className="justify-start text-blue-950 text-lg font-normal font-['Satoshi']">
                  Today
                </div>
              </button>
              <div className="justify-start text-blue-950 text-3xl font-medium font-['Satoshi']">
                {weekRangeLabel}
              </div>
              <div className="py-2 rounded-[80px] flex justify-start items-center gap-5 overflow-hidden">
                <button
                  className="w-6 h-6 bg-blue-950 hover:opacity-80"
                  onClick={() => moveWeek(-1)}
                >
                  <ChevronLeft className="w-4 h-4 text-white m-auto" />
                </button>
                <div className="w-2.5 h-5 bg-blue-950" />
                <button
                  className="w-6 h-6 bg-blue-950 hover:opacity-80"
                  onClick={() => moveWeek(1)}
                >
                  <ChevronRight className="w-4 h-4 text-white m-auto" />
                </button>
                <div className="w-2.5 h-5 bg-blue-950" />
              </div>
            </div>
          </div>

          {/* Week Days */}
          {weekDaysArr.map((day, index) => {
            const dayLabel = `${day.toLocaleString("en-US", {
              month: "short",
            })}, ${day.toLocaleString("en-US", { weekday: "short" })}`;
            const dateNum = day.getDate();
            const dateKey = formatDate(day);
            const events = eventsByDate[dateKey] || [];

            if (events.length === 0) {
              // Empty day
              return (
                <div
                  key={index}
                  className="self-stretch p-3 bg-slate-200/50 rounded-[20px] outline outline-2 outline-offset-[-2px] outline-slate-300 inline-flex justify-start items-start gap-3"
                >
                  <div className="w-36 flex justify-start items-center gap-2">
                    <div className="w-12 h-10 rounded-[80px] inline-flex flex-col justify-center items-center">
                      <div className="justify-start text-blue-950 text-2xl font-normal font-['Satoshi']">
                        {dateNum}
                      </div>
                    </div>
                    <div className="justify-start text-blue-950 text-base font-medium font-['Satoshi']">
                      {dayLabel}
                    </div>
                  </div>
                </div>
              );
            }

            // Day with events
            return (
              <div
                key={index}
                className="self-stretch p-3 bg-slate-200/50 rounded-[20px] inline-flex justify-start items-start gap-3"
              >
                <div className="w-36 flex justify-start items-center gap-2">
                  <div className="w-12 h-10 rounded-[80px] inline-flex flex-col justify-center items-center">
                    <div className="justify-start text-blue-950 text-2xl font-normal font-['Satoshi']">
                      {dateNum}
                    </div>
                  </div>
                  <div className="justify-start text-blue-950 text-base font-medium font-['Satoshi']">
                    {dayLabel}
                  </div>
                </div>

                {/* Events for this day */}
                <div className="flex-1 inline-flex flex-col justify-start items-start gap-3">
                  {events.map((event, eventIndex) => {
                    // Holiday event
                    if (event.type === "holiday") {
                      return (
                        <div
                          key={eventIndex}
                          className="self-stretch p-4 bg-violet-400/20 rounded-xl inline-flex justify-start items-center gap-4 overflow-hidden"
                        >
                          <div className="w-5 h-5 bg-violet-400 rounded-md" />
                          <div className="w-36 justify-start text-neutral-700 text-lg font-normal font-['Satoshi']">
                            All day
                          </div>
                          <div className="flex-1 justify-start text-blue-950 text-lg font-medium font-['Satoshi']">
                            {event.title}
                          </div>
                          <div className="w-6 h-6 bg-zinc-300" />
                          <div className="w-3 h-1.5 bg-blue-950" />
                        </div>
                      );
                    }

                    // Regular events - special handling for June 25th first event (expanded view)
                    const isExpandedEvent =
                      dateNum === 25 && eventIndex === 0 && event.hasLocation;
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
                          className="self-stretch h-40 flex flex-col justify-start items-start gap-3"
                        >
                          <div className="self-stretch p-4 bg-orange-300/20 rounded-xl flex flex-col justify-start items-start gap-10 overflow-hidden">
                            <div className="self-stretch inline-flex justify-start items-start gap-4">
                              <div className="w-5 h-5 bg-orange-300 rounded-md" />
                              <div className="flex-1 inline-flex flex-col justify-start items-start">
                                <div className="justify-start text-blue-950 text-lg font-medium font-['Satoshi']">
                                  {event.title}
                                </div>
                                <div className="justify-start text-neutral-700 text-lg font-normal font-['Satoshi']">
                                  12:00 PM - 1:00PM, 25 June, Wednesday
                                </div>
                              </div>
                              <div className="w-6 h-6 bg-zinc-300" />
                              <div className="w-3 h-1.5 bg-zinc-900" />
                            </div>
                            <div className="self-stretch inline-flex justify-end items-start gap-2">
                              <div className="px-12 py-2.5 rounded-[51px] shadow-[0px_0px_41.70000076293945px_0px_rgba(2,34,104,0.10)] outline outline-1 outline-offset-[-1px] outline-blue-950/40 flex justify-center items-center gap-2">
                                <div className="w-6 h-6 relative overflow-hidden">
                                  <div className="w-2.5 h-2.5 left-[7.25px] top-[5.25px] absolute bg-blue-950" />
                                  <div className="w-4 h-5 left-[3.49px] top-[1.25px] absolute bg-blue-950" />
                                </div>
                                <div className="text-center justify-center text-blue-950 text-lg font-medium font-['Neue_Haas_Grotesk_Display_Pro'] leading-snug tracking-tight">
                                  Location
                                </div>
                              </div>
                              <div className="flex-1 justify-start text-black text-lg font-normal font-['Inter']">
                                {" "}
                              </div>
                              <div className="w-11 h-11 p-4 rounded-[31.92px] flex justify-center items-center gap-1.5">
                                <div className="w-6 h-6 relative overflow-hidden">
                                  <div className="w-3.5 h-3.5 left-[7.06px] top-[2.25px] absolute bg-blue-950" />
                                  <div className="w-5 h-5 left-[2.56px] top-[2.54px] absolute bg-blue-950" />
                                </div>
                              </div>
                              <div className="p-2 rounded-[80px] outline outline-1 outline-offset-[-1px] flex justify-start items-center gap-2 overflow-hidden">
                                <div className="w-6 h-6 bg-zinc-300" />
                                <div className="w-4 h-4 bg-blue-950" />
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
                          className={`self-stretch p-4 ${bgColor} rounded-xl inline-flex justify-start items-center gap-4 overflow-hidden`}
                        >
                          <div className={`w-5 h-5 ${dotColor} rounded-md`} />
                          <div className="w-40 justify-start text-neutral-700 text-lg font-normal font-['Satoshi']">
                            {event.time}
                          </div>
                          <div
                            className={`flex-1 justify-start text-lg font-medium font-['Satoshi'] ${
                              event.title.includes("Send Reem Hills")
                                ? "text-black font-normal font-['Inter']"
                                : "text-blue-950"
                            }`}
                          >
                            {event.title}
                          </div>
                          <div className="w-6 h-6 bg-zinc-300" />
                          <div className="w-3 h-1.5 bg-blue-950" />
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
