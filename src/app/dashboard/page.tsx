"use client";

import React, { Suspense } from "react";
import ClientDashboard from "@/components/ClientDashboard";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 dark:bg-gray-900 py-12 sm:py-20 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <Suspense fallback={<div className="text-white text-center mt-20">Loading...</div>}>
        <ClientDashboard />
      </Suspense>
    </div>
  );
}





