"use client";
import {
  ArrowLeftIcon,
  ListBulletsIcon,
  MapPinIcon,
} from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  return (
    <div
      className=" h-full bg-[#060D18] text-white w-full relative"
      style={{
        transform: leaving ? "translateX(-100%)" : "translateX(0)",
        transition: leaving ? "transform 300ms ease-out" : undefined,
      }}
    >
      {/* Hero Image */}
      <div className="relative w-full h-89.25">
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
            onClick={() => router.push("/app/marketplace")}
            className="cursor-pointer text-white transition-transform ease-out duration-500 hover:-translate-x-1"
          />
          <h1 className="text-white font-bold text-sm tracking-widest uppercase">
            Marketplace Details
          </h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Content Card — overlaps image with negative margin */}
      <div className="relative -top-20 px-4 pt-6 rounded-t-3xl bg-[linear-gradient(180deg,rgba(10,37,59,0.7)_-2.64%,#000000_34.19%,#000000_78.79%)] flex flex-col justify-between h-[calc(100%-277px)] pb-2">
        {/* Title */}
        <div className="space-y-4">
          <div className="flex justify-between items-start">
            <h1 className="text-white font-extrabold text-2xl tracking-tight uppercase leading-tight">
              MCB rentals
            </h1>
            <div className="flex items-center gap-2 rounded-full bg-[#3B3C43] py-1 px-2">
              <div className="bg-[#1FC16B] w-1.5 h-1.5 rounded-full" />
              <p className="text-[10px]">available</p>
            </div>
          </div>

          {/* Time */}
          <p className="text-white font-bold text-sm -mt-2">Camera rental</p>

          {/* Location */}
          <div className="flex items-center gap-1 -mt-2">
            <MapPinIcon size={15} className="text-gray-400" />
            <p className="text-gray-300 text-sm">Lapaz</p>
          </div>

          {/* About event */}
          <div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex gap-2 items-center">
              <ListBulletsIcon size={12} weight="duotone" />
              <p>Services</p>
            </div>
            <ul className="list-disc text-[#9CAAB8] pl-5">
              <li>Lorem ipsum, dolor sit amet elit.</li>
              <li>Lorem ipsum, dolor sit amet elit.</li>
              <li>Lorem ipsum, dolor sit amet elit.</li>
              <li>Lorem ipsum, dolor sit amet elit.</li>
              <li>Lorem ipsum, dolor sit amet elit.</li>
            </ul>
          </div>
        </div>
        <button className="w-full bg-[#0E2B77] hover:bg-[#2248A8] cursor-pointer transition-colors text-white font-semibold text-base py-4 rounded-full">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Page;
