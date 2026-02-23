import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";

const EventCard = ({
  imgUrl,
  title,
  description,
  location,
}: {
  imgUrl: string;
  title: string;
  description: string;
  location: string;
}) => {
  return (
    <div className="flex flex-col gap-3 text-white bg-[#ADADAD1A] p-3 rounded-lg">
      <Image
        src={imgUrl}
        alt={title}
        width={319}
        height={160}
        className="w-full h-48 rounded-lg object-cover"
      />

      <div className="flex flex-col gap-2">
        <p className="font-semibold text-base">{title}</p>

        <p className="text-sm text-gray-300 line-clamp-2">{description}</p>

        <div className="flex items-center gap-1 text-sm text-[#CAD2D9]">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
