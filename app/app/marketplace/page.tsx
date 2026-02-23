import MarketplaceCard from "@/components/custom/marketplace-card";
import NavBar from "@/components/custom/nav-bar";
import { SearchBar } from "@/components/custom/search-bar";
import { CalendarDays } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full space-y-5 py-2">
      <NavBar title="DWAM" />
      <SearchBar />
      <MarketplaceCard
        title="MCB rentals"
        imageUrl="/images/marketplace-image.png"
        description="Camera rental"
        time="8:00 am - 9:00 pm"
        location="Lapaz, Accra"
      />
      {/* <MarketplaceCard
        title="MCB rentals"
        imageUrl="/images/marketplace-image.png"
        description="Camera rental"
        time="8:00 am - 9:00 pm"
        location="Lapaz, Accra"
      /> */}
    </div>
  );
};

export default page;
