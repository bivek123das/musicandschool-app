"use client";

import React, { Suspense } from "react";
import ClientDashboard from "@/components/ClientDashboard";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 dark:bg-gray-900 py-8 sm:py-12 lg:py-20 relative px-2 sm:px-6">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <Suspense
        fallback={
          <div className="text-white text-center mt-20 text-sm sm:text-base">
            Loading...
          </div>
        }
      >
        <ClientDashboard />
      </Suspense>
    </div>
  );
}






