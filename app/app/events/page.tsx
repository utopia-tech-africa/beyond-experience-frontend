import WeekDaysStrip from "@/components/custom/calender";
import EventCard from "@/components/custom/event-card";
import NavBar from "@/components/custom/nav-bar";
import { CalendarDays } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div className="h-full space-y-5 py-2">
      <NavBar
        title="UPCOMING EVENTS"
        component={<CalendarDays className="text-white" size={24} />}
      />
      <WeekDaysStrip />
      <EventCard
        imgUrl="/images/event-image.png"
        title="BTL Annual Conference 2025"
        description="8:00 AM Till late"
        location="Kempiski, Acrra"
      />
      {/* <EventCard
        imgUrl="/images/event-image.png"
        title="BTL Annual Conference 2025"
        description="8:00 AM Till late"
        location="Kempiski, Acrra"
      /> */}
    </div>
  );
};

export default page;
