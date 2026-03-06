"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EventCard = ({
  imgUrl,
  title,
  description,
  location,
  id,
}: {
  imgUrl: string;
  title: string;
  description: string;
  location: string;
  id: string | number;
}) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-3 text-white bg-[#ADADAD1A] rounded-lg cursor-pointer"
      onClick={() => router.push(`events/${id}`)}
    >
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
