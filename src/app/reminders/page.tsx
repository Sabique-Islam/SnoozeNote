"use client"

import {
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Trash2,
  Edit,
  Bell,
} from "lucide-react";
import { useState } from "react";
import { AppLayout } from "@/components/ui/AppLayout";
import { pendingReminders, completedReminders } from "@/data/mock";

export default function RemindersPage() {
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  const priorityColors = {
    high: "bg-red-100 text-red-800 border-red-200",
    medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
    low: "bg-teal-100 text-teal-800 border-teal-200",
  };

  const categoryColors = {
    Review: "bg-teal-100 text-teal-800",
    Recording: "bg-teal-100 text-teal-800",
    Analysis: "bg-teal-100 text-teal-800",
    Health: "bg-teal-100 text-teal-800",
    Organization: "bg-teal-100 text-teal-800",
    Maintenance: "bg-teal-100 text-teal-800",
    Learning: "bg-teal-100 text-teal-800",
  };

  return (
    <AppLayout title="Reminders">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Snooze Reminders</h1>
              <p className="text-gray-600 mt-1">Stay on top of your dream journaling routine</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
              <Plus className="size-4 mr-2" />
              Add Reminder
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <AlertCircle className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">{pendingReminders.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <CheckCircle className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{completedReminders.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-teal-200 shadow-sm">
              <div className="flex items-center">
                <Clock className="size-8 text-teal-700" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Due Today</p>
                  <p className="text-2xl font-bold text-gray-900">1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-teal-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('pending')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'pending'
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Pending ({pendingReminders.length})
              </button>
              <button
                onClick={() => setActiveTab('completed')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'completed'
                    ? 'border-teal-600 text-teal-700'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Completed ({completedReminders.length})
              </button>
            </nav>
          </div>

          {/* Reminders List */}
          <div className="space-y-4">
            {activeTab === 'pending' && pendingReminders.map((reminder) => (
              <div key={reminder.id} className="bg-white rounded-lg border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{reminder.title}</h3>
                        {reminder.priority && (
                          <span className={`text-xs px-2 py-1 rounded-full ${priorityColors[reminder.priority]}`}>
                            {reminder.priority}
                          </span>
                        )}
                        <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[reminder.category as keyof typeof categoryColors]}`}>
                          {reminder.category}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{reminder.description}</p>
                      {reminder.time && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="size-4 mr-1" />
                          {reminder.time}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                        <CheckCircle className="size-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                        <Edit className="size-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'completed' && completedReminders.map((reminder) => (
              <div key={reminder.id} className="bg-white rounded-lg border border-gray-200 shadow-sm opacity-75">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-700 line-through">{reminder.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${categoryColors[reminder.category as keyof typeof categoryColors]}`}>
                          {reminder.category}
                        </span>
                      </div>
                      <p className="text-gray-500 mb-3">{reminder.description}</p>
                      {reminder.completedAt && (
                        <div className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="size-4 mr-1 text-teal-600" />
                          Completed {reminder.completedAt}
                        </div>
                      )}
                    </div>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {activeTab === 'pending' && pendingReminders.length === 0 && (
            <div className="text-center py-12">
              <Bell className="size-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No pending reminders</h3>
              <p className="text-gray-600 mb-6">You&apos;re all caught up! Create a new reminder to stay on track.</p>
              <button className="inline-flex items-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
                <Plus className="size-4 mr-2" />
                Create Your First Reminder
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
