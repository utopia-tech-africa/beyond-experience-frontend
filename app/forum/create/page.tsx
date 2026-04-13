"use client";

import { useRouter } from "next/navigation";
import { Camera, Image, FileText, MapPin, List, Smile, Mic } from "lucide-react";
import { useState } from "react";

export default function CreatePost() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [channel, setChannel] = useState("Beyond marketing internal");

  const handlePost = () => {
    // Handle post submission
    console.log({ text, channel });
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1929] to-black text-white flex justify-center">
      <div className="w-full max-w-md px-4 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center justify-between py-4">
          <button 
            onClick={() => router.back()}
            className="cursor-pointer"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M15 18L9 12L15 6" 
                stroke="white" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold tracking-wider">POST</h1>
          <button 
            onClick={handlePost}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium"
          >
            Post
          </button>
        </div>

        {/* Profile and Channel Selector */}
        <div className="flex items-start gap-3 mt-6">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="/images/profile-avatar.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            {/* Channel Dropdown */}
            <div className="relative mb-4">
              <select
                value={channel}
                onChange={(e) => setChannel(e.target.value)}
                className="bg-transparent border border-blue-500 rounded-full px-4 py-2 pr-10 text-sm outline-none cursor-pointer appearance-none w-full max-w-xs"
                style={{
                  color: 'white',
                  backgroundImage: 'url(/caret-down.png)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 12px center',
                  backgroundSize: '12px 12px',
                  filter: 'brightness(0) invert(1)'
                }}
              >
                <option value="Beyond marketing internal" className="bg-[#0a1929] text-white">
                  Beyond marketing internal
                </option>
                <option value="General" className="bg-[#0a1929] text-white">General</option>
                <option value="Announcements" className="bg-[#0a1929] text-white">Announcements</option>
              </select>
            </div>

            {/* Text Input */}
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="What's on your mind?"
              className="w-full bg-transparent outline-none text-base text-white placeholder-gray-500 resize-none min-h-[50px] mb-3"
            />

            {/* Media Icons */}
            <div className="flex items-center gap-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Camera className="w-7 h-7" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Image className="w-7 h-7" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors flex items-center justify-center">
                <div className="border-2 border-gray-400 rounded px-2 py-1 text-xs font-bold">
                  GIF
                </div>
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-7 h-7" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <List className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

        {/* Spacer to push footer to bottom */}
        <div className="flex-grow"></div>

        {/* Footer Info */}
        <div className="pb-4">
          <p className="text-gray-500 text-xs text-center">
            Anyone in the {channel} channel can reply
          </p>
        </div>

        {/* Bottom Icons */}
        <div className="flex items-center justify-between pb-6">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Smile className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Mic className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
