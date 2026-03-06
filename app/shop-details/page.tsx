"use client";
import { ArrowLeftIcon, MapPinIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#060D18] text-white max-w-[375px] mx-auto relative"
      style={{
        transform: leaving ? "translateX(-100%)" : "translateX(0)",
        transition: leaving ? "transform 300ms ease-out" : undefined,
      }}
    >
      {/* Hero Image */}
      <div className="relative w-[375px] h-[357px]">
        <Image
          src="/images/marketplace-image.png"
          fill
          className="object-cover"
          alt="Beyond Marketing Market Day"
        />
        {/* Gradient fade into background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A253B]/70 via-transparent to-[#000000]" />

        {/* Header overlaid on image */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 pt-12">
          <ArrowLeftIcon
            size={24}
            onClick={() => router.push("/app/events")}
            className="cursor-pointer text-white transition-transform ease-out duration-500 hover:-translate-x-1"
          />
          <h1 className="text-white font-bold text-sm tracking-widest uppercase">
            Event Details
          </h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Content Card — overlaps image with negative margin */}
      <div className="relative -mt-20 px-4 pt-6 pb-28 rounded-t-3xl bg-[#060D18] flex flex-col gap-4 min-h-[536px]">
        {/* Title */}
        <h1 className="text-white font-extrabold text-2xl tracking-tight uppercase leading-tight">
          Beyond Marketing: Market Day 2025
        </h1>

        {/* Time */}
        <p className="text-white font-bold text-sm -mt-2">8:00PM Till late</p>

        {/* Location */}
        <div className="flex items-center gap-1 -mt-2">
          <MapPinIcon size={15} className="text-gray-400" />
          <p className="text-gray-300 text-sm">The Grill Pub</p>
        </div>

        {/* About event */}
        <div>
          <p className="text-white font-bold text-sm mb-1">About event</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus.
          </p>
        </div>
      </div>

      {/* Fixed Buy Ticket Button */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[343px]">
        <button className="w-full bg-[#0E2B77] hover:bg-[#2248A8] cursor-pointer transition-colors text-white font-semibold text-base py-4 rounded-full">
          Buy ticket
        </button>
      </div>
    </div>
  );
};

export default Page;
