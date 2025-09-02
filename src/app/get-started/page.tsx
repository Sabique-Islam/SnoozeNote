"use client"

import {
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { AppLayout } from "@/components/ui/AppLayout";

export default function GetStartedPage() {
  return (
    <AppLayout title="Getting Started">
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-bold mb-6 text-black">Welcome to SnoozeNote!</h1>
          <div className="mt-8">
            <Link 
              href="/dashboard" 
              className="inline-flex items-center px-6 py-3 bg-teal-800 text-white rounded-lg hover:bg-teal-900 transition-colors"
            >
              Go to Dashboard
              <ChevronUp className="ml-2 size-4 rotate-90" />
            </Link>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}