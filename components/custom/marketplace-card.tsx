"use client";
import { FadersHorizontalIcon, MapPinIcon } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const MarketplaceCard = ({
  title,
  imageUrl,
  description,
  time,
  location,
}: {
  title: string;
  imageUrl: string;
  description: string;
  time?: string;
  location: string;
}) => {
  return (
    <div className=" rounded-lg p-3 bg-[#ADADAD1A]">
      <Image
        src={imageUrl}
        alt={title}
        width={319}
        height={160}
        className="w-full h-48 rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex flex-row justify-between items-center text-white font-semibold mt-2">
          <p>{title}</p>
          <p>{time}</p>
        </div>
        <p className="text-sm text-[#697175] line-clamp-2 mt-1">
          {description}
        </p>
        <div className="flex items-center gap-1 text-sm text-[#CAD2D9] ">
          <MapPinIcon size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketplaceCard;
