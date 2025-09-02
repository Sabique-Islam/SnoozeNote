"use client"

import {
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useState } from "react";
import { AppLayout } from "@/components/ui/AppLayout";
import { dreamEntries, upcomingEvents } from "@/data/mock";

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-20"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dreamEntry = dreamEntries.find(entry => entry.date === day);
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentDate.getMonth() && 
                     new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div key={day} className={`h-20 border border-teal-100 p-2 hover:bg-teal-50 transition-colors relative ${isToday ? 'bg-teal-100 border-teal-300' : ''}`}>
          <div className="flex justify-between items-start">
            <span className={`text-sm font-medium ${isToday ? 'text-teal-800' : 'text-gray-700'}`}>
              {day}
            </span>
            {dreamEntry && (
              <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
            )}
          </div>
          {dreamEntry && (
            <div className="mt-1">
              <div className="text-xs bg-teal-100 text-teal-800 px-1 py-0.5 rounded truncate">
                Dream: {dreamEntry.mood}
              </div>
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  return (
    <AppLayout title="Calendar">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Snooze Calendar</h1>
              <p className="text-gray-600 mt-1">Track your dreams and sleep patterns over time</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
              <Plus className="size-4 mr-2" />
              Add Event
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-teal-200 shadow-sm">
                {/* Calendar Header */}
                <div className="p-6 border-b border-teal-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => navigateMonth('prev')}
                        className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <button
                        onClick={() => setCurrentDate(new Date())}
                        className="px-3 py-1 text-sm text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        Today
                      </button>
                      <button
                        onClick={() => navigateMonth('next')}
                        className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="p-6">
                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-0 mb-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                      <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                        {day}
                      </div>
                    ))}
                  </div>
                  {/* Calendar days */}
                  <div className="grid grid-cols-7 gap-0 border border-teal-200 rounded-lg overflow-hidden">
                    {renderCalendarDays()}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Legend */}
              <div className="bg-white rounded-lg border border-teal-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Legend</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-600 rounded-full"></div>
                    <span className="text-sm text-gray-700">Dream recorded</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-teal-200 rounded-full"></div>
                    <span className="text-sm text-gray-700">Today</span>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-white rounded-lg border border-teal-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming</h3>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg border border-teal-100 hover:bg-teal-50 transition-colors">
                      <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{event.title}</p>
                        <p className="text-xs text-gray-500">{event.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg border border-teal-200 shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">This Month</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Dreams recorded</span>
                    <span className="text-sm font-medium text-teal-700">{dreamEntries.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Dream streak</span>
                    <span className="text-sm font-medium text-teal-700">5 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg. mood</span>
                    <span className="text-sm font-medium text-teal-700">Peaceful</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
