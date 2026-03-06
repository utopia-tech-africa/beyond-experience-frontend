import WeekDaysStrip from "@/components/custom/calender";
import EventCard from "@/components/custom/event-card";
import NavBar from "@/components/custom/nav-bar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    title: "BTL Annual Conference 2025",
    imgUrl: "/images/event-image.png",
    description: "8:00 AM Till late",
    location: "Kempinski, Accra",
  },
  {
    id: 2,
    title: "Ghana Tech Summit",
    imgUrl: "/images/event-image.png",
    description: "9:00 AM - 6:00 PM",
    location: "Accra International Conference Centre",
  },
  {
    id: 3,
    title: "Creative Arts Festival",
    imgUrl: "/images/event-image.png",
    description: "10:00 AM Till late",
    location: "National Theatre, Accra",
  },
  {
    id: 4,
    title: "Startup Pitch Night",
    imgUrl: "/images/event-image.png",
    description: "5:00 PM - 9:00 PM",
    location: "Impact Hub, Osu",
  },
  {
    id: 5,
    title: "Afrobeats Live Concert",
    imgUrl: "/images/event-image.png",
    description: "7:00 PM Till late",
    location: "Labadi Beach Hotel",
  },
  {
    id: 6,
    title: "Food & Culture Fair",
    imgUrl: "/images/event-image.png",
    description: "11:00 AM - 8:00 PM",
    location: "Independence Square, Accra",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col px-6 h-full py-2 space-y-5">
      {/* Fixed top */}
      <div className="shrink-0">
        <NavBar
          title="UPCOMING EVENTS"
          component={<CalendarDays className="text-white" size={24} />}
        />
      </div>
      <WeekDaysStrip />
      {/* Scrollable content */}
      <ScrollArea className="h-[calc(100vh-180px)] rounded-md">
        <div className="flex flex-col gap-3">
          {EVENTS.map((event) => (
            <EventCard
              key={event.id}
              imgUrl={event.imgUrl}
              title={event.title}
              description={event.description}
              location={event.location}
              id={event.id}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Page;
