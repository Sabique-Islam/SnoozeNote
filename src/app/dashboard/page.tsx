"use client"

import {
  Plus,
  TrendingUp,
  Clock,
  FileText,
  Bell,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { AppLayout } from "@/components/ui/AppLayout";
import { recentDreams, upcomingReminders } from "@/data/mock";

export default function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back!</h1>
              <p className="text-gray-600 mt-1">Here&apos;s what&apos;s happening with your dream journal</p>
            </div>
            <Link 
              href="/dreams" 
              className="inline-flex items-center px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors"
            >
              <Plus className="size-4 mr-2" />
              New Dream
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <FileText className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Dreams</p>
                  <p className="text-2xl font-bold text-gray-900">47</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <TrendingUp className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Week</p>
                  <p className="text-2xl font-bold text-gray-900">5</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <Clock className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg. Sleep</p>
                  <p className="text-2xl font-bold text-gray-900">7.5h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Dreams */}
            <div className="bg-white rounded-lg border border-teal-200 shadow-sm">
              <div className="p-6 border-b border-teal-100">
                <h2 className="text-xl font-semibold text-gray-900">Recent Dreams</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentDreams.map((dream) => (
                    <div key={dream.id} className="flex items-start space-x-4 p-4 rounded-lg border border-teal-100 hover:bg-teal-50 transition-colors">
                      <FileText className="size-5 text-teal-700 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{dream.title}</h3>
                        <div className="flex items-center space-x-4 mt-1">
                          <span className="text-sm text-gray-500">{dream.date}</span>
                          <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded-full">
                            {dream.mood}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/dreams" 
                  className="inline-flex items-center mt-4 text-teal-700 hover:text-teal-800 font-medium"
                >
                  View all dreams
                  <ChevronUp className="ml-1 size-4 rotate-90" />
                </Link>
              </div>
            </div>

            {/* Upcoming Reminders */}
            <div className="bg-white rounded-lg border border-teal-200 shadow-sm">
              <div className="p-6 border-b border-teal-100">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Reminders</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingReminders.map((reminder) => (
                    <div key={reminder.id} className="flex items-start space-x-4 p-4 rounded-lg border border-teal-100 hover:bg-teal-50 transition-colors">
                      <Bell className="size-5 text-teal-700 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{reminder.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{reminder.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/reminders" 
                  className="inline-flex items-center mt-4 text-teal-700 hover:text-teal-800 font-medium"
                >
                  Manage reminders
                  <ChevronUp className="ml-1 size-4 rotate-90" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
