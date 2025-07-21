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
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-blue-900">{monthYear}</h3>
              <div className="flex space-x-1">
                <button
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={handlePrevMonth}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  className="p-1 hover:bg-gray-100 rounded"
                  onClick={handleNextMonth}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {weekDays.map((day) => (
                <div
                  key={day}
                  className="text-xs text-center text-gray-500 py-1"
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
                      className={`w-8 h-8 rounded-full text-sm hover:bg-gray-100 ${
                        day === selectedDate.getDate() &&
                        selectedDate.getMonth() ===
                          new Date(
                            selectedDate.getFullYear(),
                            selectedDate.getMonth(),
                            day
                          ).getMonth() &&
                        "bg-blue-900 text-white hover:bg-blue-800"
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
        <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200"
                onClick={goToToday}
              >
                Today
              </button>
              <div className="flex items-center space-x-4">
                <h2 className="text-xl font-semibold">{weekRangeLabel}</h2>
                <div className="flex space-x-1">
                  <button
                    className="p-2 hover:bg-gray-100 rounded"
                    onClick={() => moveWeek(-1)}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    className="p-2 hover:bg-gray-100 rounded"
                    onClick={() => moveWeek(1)}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Week View */}
            <div className="space-y-1">
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
                    className="flex border-b border-gray-100 pb-1"
                  >
                    <div className="w-24 py-3 text-sm text-gray-600">
                      <div className="font-semibold text-lg">{dateNum}</div>
                      <div className="text-xs">{dayLabel}</div>
                    </div>
                    <div className="flex-1 py-3">
                      {events.map((event, eventIndex) => (
                        <div
                          key={eventIndex}
                          className={
                            event.type === "holiday"
                              ? "bg-purple-100 rounded-lg p-3 flex items-center justify-between mb-2"
                              : "bg-orange-50 rounded-lg p-3 mb-2"
                          }
                        >
                          <div className="flex items-start justify-between w-full">
                            <div>
                              <div className="flex items-center space-x-2 mb-2">
                                <div
                                  className={
                                    event.color.split(" ")[0] +
                                    " w-4 h-4 rounded"
                                  }
                                ></div>
                                <span className="font-medium text-sm">
                                  {event.title}
                                </span>
                              </div>
                              {event.time && (
                                <div className="text-xs text-gray-600 mb-2">
                                  {event.time}
                                </div>
                              )}
                              {event.hasLocation && (
                                <button className="px-3 py-1 bg-white border border-gray-300 rounded-full text-xs flex items-center space-x-1 hover:bg-gray-50">
                                  <MapPin className="w-3 h-3" />
                                  <span>Location</span>
                                </button>
                              )}
                            </div>
                            {event.type === "event" && (
                              <div className="flex space-x-2">
                                <button className="p-1 hover:bg-orange-100 rounded">
                                  <Edit3 className="w-4 h-4" />
                                </button>
                                <button className="p-1 hover:bg-orange-100 rounded">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;
