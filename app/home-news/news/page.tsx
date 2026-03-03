"use client";
import React from "react";
import Vector from "../../components/Vector";
import {
  Search,
  Bell,
  Home,
  Calendar,
  Store,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
interface NewsItem {
  id: number;
  category: string;
  title: string;
  time: string;
  image: string;
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  // Split categories for custom placement
  const categories1 = ["All", "Sports", "Music", "Fashion", "Entertainment"];

  const news: NewsItem[] = [
    {
      id: 1,
      category: "Entertainment",
      title:
        "Young entrepreneurs connect and meet up held at Accra over the weekend.",
      time: "3 Hours ago",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      id: 2,
      category: "Entertainment",
      title:
        "The premiere of Silvertown Blues was held at Silverbird Cinemas, Accra Mall by MTN.",
      time: "6 Hours ago",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    },
    {
      id: 3,
      category: "Entertainment",
      title:
        "Music festival brings together top artists from across Africa.",
      time: "8 Hours ago",
      image:
        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    },
    {
      id: 4,
      category: "Digital",
      title:
        "EdTech Mondays by MEST is equipping young people with the skills and knowledge they need to thrive.",
      time: "3 Hours ago",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    },
    {
      id: 5,
      category: "Entertainment",
      title:
        "Fashion show highlights emerging designers from West Africa.",
      time: "5 Hours ago",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    },
    {
      id: 6,
      category: "Entertainment",
      title:
        "Annual film festival showcases local talent and creativity.",
      time: "7 Hours ago",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    },
    {
      id: 7,
      category: "Sports",
      title:
        "Ghana's Black Stars qualify for the next round of African Cup.",
      time: "2 Hours ago",
      image:
        "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    },
    {
      id: 8,
      category: "Sports",
      title:
        "Local basketball league finals draw massive crowds in Accra.",
      time: "4 Hours ago",
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
    },
    {
      id: 9,
      category: "Music",
      title:
        "Afrobeats artist wins international music award.",
      time: "1 Hour ago",
      image:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    },
    {
      id: 10,
      category: "Music",
      title:
        "New album release breaks streaming records across Africa.",
      time: "5 Hours ago",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    },
    {
      id: 11,
      category: "Fashion",
      title:
        "Accra Fashion Week showcases sustainable African designs.",
      time: "3 Hours ago",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    },
    {
      id: 12,
      category: "Fashion",
      title:
        "Local designer collaborates with international fashion house.",
      time: "6 Hours ago",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    },


    
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-[#071526] to-black text-white flex justify-center">
      <div className="w-full max-w-sm px-4 pb-24">
        {/* Header */}
        <div className="flex items-center justify-between pt-6">
          {/* Profile */}
          <img
          
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />

          {/* Vector in the middle */}
          <div className="flex-1 flex justify-center">
            <Vector className="font-medium" />
          </div>

          {/* Search and Bell */}
          <div className="flex gap-4 text-gray-300">
            <Search className="w-5 h-5" />
            <img src="/images/notification.png" alt="notification" className="w-5 h-5 filter invert brightness-100" />
          </div>
        </div>

        {/* Greeting below header */}
        <div className="mt-4 mb-2">
          <h1 className="text-lg font-bold leading-tight">HELLO, MAXWELL</h1>
          <p className="text-xs text-gray-400">Welcome back!</p>
        </div>

        {/* Section title */}
        <div className="mt-6 mb-4">
          <h3 className="text-lg font-semibold">What’s hot?</h3>
        </div>

        {/* News Cards with categories in between */}
        <div className="space-y-4">
          {(() => {
            const filteredNews = news.filter(
              (item) =>
                activeCategory === "All" || item.category === activeCategory,
            );
            const result: React.ReactNode[] = [];
            
            // Group news by category
            const entertainmentNews = filteredNews.filter(item => item.category === "Entertainment");
            const otherNews = filteredNews.filter(item => item.category !== "Entertainment");
            
            // Split entertainment into two groups - first 3 and rest
            const firstEntertainmentGroup = entertainmentNews.slice(0, 3);
            const secondEntertainmentGroup = entertainmentNews.slice(3);
            
            // Add first Entertainment cards as scrollable row (only if there are entertainment cards)
            if (firstEntertainmentGroup.length > 0) {
              result.push(
                <div key="entertainment-scroll-1" className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                  {firstEntertainmentGroup.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#0f223a] rounded-2xl overflow-hidden flex-shrink-0 w-[85%]"
                    >
                      <div className="relative">
                        <img
                          src={item.image}
                          alt=""
                          className="w-full h-40 object-cover"
                        />
                        <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </span>
                        {/* Overlay text at the bottom of the image */}
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-black/5">
                          <p className="text-xs text-gray-200 mb-1">{item.time}</p>
                          <p className="text-sm leading-relaxed text-white">{item.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }
            
            // Add categories buttons
            result.push(
              <div
                key="categories-btn-row"
                className="flex gap-2 pb-3 mt-2 overflow-x-auto hide-scrollbar"
              >
                {categories1.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs whitespace-nowrap transition
                      ${
                        activeCategory === cat
                          ? "bg-blue-600 text-white"
                          : "bg-[#0f223a] text-gray-300"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            );
            
            // Add other category cards (Digital, Sports, Music, Fashion) normally
            otherNews.forEach((item) => {
              result.push(
                <div
                  key={item.id}
                  className="bg-[#0f223a] rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    {/* Overlay text at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/5">
                      <p className="text-xs text-gray-200 mb-1">{item.time}</p>
                      <p className="text-sm leading-relaxed text-white">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            });
            
            // Add second Entertainment cards vertically
            secondEntertainmentGroup.forEach((item) => {
              result.push(
                <div
                  key={item.id}
                  className="bg-[#0f223a] rounded-2xl overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    {/* Overlay text at the bottom of the image */}
                    <div className="absolute bottom-0 left-0 w-full p-4 bg-black/5">
                      <p className="text-xs text-gray-200 mb-1">{item.time}</p>
                      <p className="text-sm leading-relaxed text-white">{item.title}</p>
                    </div>
                  </div>
                </div>
              );
            });
            
            return result;
          })()}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 w-full max-w-sm bg-[#0a1c2e] border-t border-gray-800 flex justify-around py-3">
        <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
        <NavItem icon={<Calendar className="w-5 h-5" />} label="Events" />
        <NavItem icon={<Store className="w-5 h-5" />} label="Marketplace" />
        <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Forum" />
      </div>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center text-xs">
      <div className={active ? "text-blue-500" : "text-gray-400"}>{icon}</div>
      <span className={active ? "text-blue-500" : "text-gray-400"}>
        {label}
      </span>
    </div>
  );
}
