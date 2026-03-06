"use client";
import { ArrowLeftIcon, MapPinIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className=" text-white h-full bg-red-400">
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
            onClick={() => router.back()}
            className="cursor-pointer text-white transition-transform ease-out duration-500 hover:-translate-x-1"
          />
          <h1 className="text-white font-bold text-sm tracking-widest uppercase">
            Event Details
          </h1>
          <div className="w-6" />
        </div>
      </div>
      <div className="relative -top-20 px-4 pt-6 rounded-t-3xl bg-[#060D18] flex flex-col justify-between h-[calc(100%-277px)] pb-2">
        <div className="space-y-2">
          <h1 className="text-white font-extrabold text-2xl tracking-tight uppercase leading-tight">
            Beyond Marketing: Market Day 2025
          </h1>

          <p className="text-white font-bold text-sm">8:00PM Till late</p>

          <div className="flex items-center gap-1">
            <MapPinIcon size={15} className="text-gray-400" />
            <p className="text-gray-300 text-sm">The Grill Pub</p>
          </div>

          <div>
            <p className="text-white font-bold text-sm mb-1">About event</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus.
            </p>
          </div>
        </div>

        <button className="w-full bg-[#0E2B77] hover:bg-[#2248A8] cursor-pointer transition-colors text-white font-semibold text-base py-4 rounded-full">
          Buy ticket
        </button>
      </div>
    </div>
  );
};

export default Page;
