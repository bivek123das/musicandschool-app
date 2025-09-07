"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { webinarsData } from "@/data/webinarsData";
import { BackgroundBeams } from "@/components/ui/background-beams";

interface Webinars {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-black py-8 sm:py-12 pt-28 sm:pt-36 px-2 sm:px-6 relative">
      <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center font-sans font-bold mb-6 sm:mb-8 text-white">
        All Webinars ({webinarsData.length})
      </h1>

      <div className="flex flex-wrap justify-center">
        {webinarsData.map((webinar: Webinars, index: number) => (
          <CardContainer key={index} className="m-2 sm:m-4">
            <CardBody className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[22rem] md:w-[28rem] h-auto rounded-xl p-4 sm:p-6 border relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
              <CardItem
                translateZ="50"
                className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white text-center"
              >
                {webinar.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-300 mt-2 text-center"
              >
                {webinar.description}
              </CardItem>
              <CardItem
                as="p"
                translateZ="40"
                className="text-xs sm:text-sm text-emerald-400 mt-1 text-center"
              >
                📅 {webinar.date}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={webinar.image}
                  height={1000}
                  width={1000}
                  className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={webinar.title}
                />
              </CardItem>
              <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-4 sm:mt-6 gap-2 sm:gap-0">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white w-full sm:w-auto"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-3 sm:px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold w-full sm:w-auto"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
}

