import MarketplaceCard from "@/components/custom/marketplace-card";
import NavBar from "@/components/custom/nav-bar";
import { SearchBar } from "@/components/custom/search-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const LISTINGS = [
  {
    id: 1,
    title: "MCB Rentals",
    imageUrl: "/images/marketplace-image.png",
    description: "Camera rental",
    time: "8:00 am - 9:00 pm",
    location: "Lapaz, Accra",
  },
  {
    id: 2,
    title: "SoundWave Audio",
    imageUrl: "/images/marketplace-image.png",
    description: "Audio equipment",
    time: "9:00 am - 6:00 pm",
    location: "Osu, Accra",
  },
  {
    id: 3,
    title: "LightPro Studio",
    imageUrl: "/images/marketplace-image.png",
    description: "Lighting rental",
    time: "7:00 am - 8:00 pm",
    location: "East Legon, Accra",
  },
  {
    id: 4,
    title: "DroneVision GH",
    imageUrl: "/images/marketplace-image.png",
    description: "Drone rental",
    time: "8:00 am - 5:00 pm",
    location: "Tema, Accra",
  },
  {
    id: 5,
    title: "StageSet Rentals",
    imageUrl: "/images/marketplace-image.png",
    description: "Stage & decor",
    time: "10:00 am - 7:00 pm",
    location: "Kumasi",
  },
];

const Page = () => {
  return (
    <div className="h-full space-y-5 py-2">
      <NavBar title="DWAM" />
      <SearchBar />
      <ScrollArea className="h-[calc(100vh-180px)] rounded-md border p-4">
        <div className="space-y-3">
          {LISTINGS.map((item) => (
            <MarketplaceCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              description={item.description}
              time={item.time}
              location={item.location}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Page;
