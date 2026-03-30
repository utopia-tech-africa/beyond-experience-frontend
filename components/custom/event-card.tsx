"use client";

import { Pencil } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EventCard = ({
  imgUrl,
  title,
  description,
  location,
  id,
  onEdit,
  showEditButton = false,
}: {
  imgUrl: string;
  title: string;
  description: string;
  location: string;
  id: string | number;
  onEdit?: (e: React.MouseEvent) => void;
  showEditButton?: boolean;
}) => {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-3 text-white bg-[#ADADAD1A] rounded-lg cursor-pointer p-4"
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

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-[#CAD2D9]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_1615)">
                <path
                  d="M8.33352 4.6939C7.91535 4.62333 7.48557 4.68752 7.10627 4.87718C6.72696 5.06685 6.41776 5.37217 6.22333 5.74906C6.02889 6.12594 5.95929 6.55487 6.02457 6.9739C6.08986 7.39293 6.28665 7.78036 6.58652 8.08023C6.88639 8.3801 7.27382 8.57689 7.69285 8.64218C8.11188 8.70746 8.54081 8.63786 8.91769 8.44343C9.29458 8.24899 9.5999 7.93979 9.78957 7.56049C9.97923 7.18118 10.0434 6.7514 9.97285 6.33323"
                  stroke="#CAD2D9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3.33341 10.1437C2.90208 9.04101 2.66675 7.86701 2.66675 6.76167C2.66675 3.76367 5.05475 1.33301 8.00008 1.33301C10.9454 1.33301 13.3334 3.76367 13.3334 6.76167C13.3334 9.73634 11.6314 13.2083 8.97542 14.449C8.67014 14.592 8.33717 14.666 8.00008 14.666C7.66299 14.666 7.33003 14.592 7.02475 14.449C6.17675 14.053 5.42541 13.429 4.79608 12.6663"
                  stroke="#CAD2D9"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_1615">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>{location}</span>
          </div>

          {showEditButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit?.(e);
              }}
              className="p-2 flex items-center justify-center w-8 h-8 rounded-full bg-[#0074E5] hover:bg-blue-600 transition-colors"
            >
              <Pencil size={14} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;