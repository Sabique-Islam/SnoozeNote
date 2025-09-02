"use client"

import {
  Plus,
  Search,
  Filter,
  Star,
  FileText,
} from "lucide-react";
import { AppLayout } from "@/components/ui/AppLayout";
import { dreams } from "@/data/mock";

export default function DreamsPage() {
  const moodColors = {
    Peaceful: "bg-teal-100 text-teal-800",
    Happy: "bg-teal-100 text-teal-800",
    Curious: "bg-teal-100 text-teal-800",
    Excited: "bg-teal-100 text-teal-800",
  };

  return (
    <AppLayout title="My Dreams">
      <div className="p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Snooze Dreams</h1>
              <p className="text-gray-600 mt-1">Record and explore your dream experiences</p>
            </div>
            <button className="inline-flex items-center px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
              <Plus className="size-4 mr-2" />
              Add New Dream
            </button>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-teal-200 shadow-sm">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 size-4" />
              <input
                type="text"
                placeholder="Search your dreams..."
                className="w-full pl-10 pr-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-teal-200 text-teal-700 rounded-lg hover:bg-teal-50 transition-colors">
              <Filter className="size-4 mr-2" />
              Filter
            </button>
          </div>

          {/* Dreams Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {dreams.map((dream) => (
              <div key={dream.id} className="bg-white rounded-lg border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{dream.title}</h3>
                      <p className="text-sm text-gray-500">{dream.date}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < dream.rating ? 'text-teal-600 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{dream.content}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${moodColors[dream.mood as keyof typeof moodColors]}`}>
                        {dream.mood}
                      </span>
                      {dream.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                      {dream.tags.length > 2 && (
                        <span className="text-xs text-gray-500">+{dream.tags.length - 2} more</span>
                      )}
                    </div>
                    <button className="text-teal-700 hover:text-teal-800 font-medium text-sm">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State for when no dreams */}
          {dreams.length === 0 && (
            <div className="text-center py-12">
              <FileText className="size-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No dreams recorded yet</h3>
              <p className="text-gray-600 mb-6">Start your dream journal by recording your first dream experience.</p>
              <button className="inline-flex items-center px-6 py-3 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition-colors">
                <Plus className="size-4 mr-2" />
                Record Your First Dream
              </button>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
