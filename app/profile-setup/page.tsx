"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Vector from "../components/Vector";

export default function ProfileSetupPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071426] to-black text-white flex justify-center">
      <div className="w-full max-w-sm px-6 pt-6">
        {/* ===== iOS Status Bar ===== */}
        <div className="flex justify-between items-center text-xs opacity-80 mb-6">
        </div>

        {/* Vector */}
        <div className="flex justify-center mb-8">
          <Vector />
        </div>

        {/* Title */}

        <h1 className="text-center font-bold mb-8 tracking-wide">
          FINISH SETTING UP YOUR ACCOUNT
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <Image
              src="/Profile1.jpg" // change to your image name
              alt="profile"
              width={120}
              height={120}
              className="relative z-10 rounded-full object-cover border-2 border-gray-600"
            />

            {/* Camera badge */}
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-2 right-2 bg-pink-300 p-2 rounded-full z-20"
            >
              <Camera size={16} className="text-red-700" />
            </button>

            <input
              ref={fileRef}
              type="file"
              className="hidden"
              accept="image/*"
            />
          </div>
        </div>

        {/* Form fields */}
        <div className="space-y-5">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              placeholder="Maxwell Afrah"
              className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Username */}
          <div>
            <label className="text-sm text-gray-300">Username</label>
            <input
              type="text"
              placeholder="@max_360"
              className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="text-sm text-gray-300">Gender</label>
            <select className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white">
              <option className="bg-black">Male</option>
              <option className="bg-black">Female</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-sm text-gray-300">Date of birth</label>
            <input
              type="date"
              className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="johndoe@email.com"
              className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white"
            />
          </div>

          {/* Continue button */}
          <button 
            onClick={() => router.push('/home-news/news')}
            className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-full py-3 font-semibold mt-4 mb-10"
          >
            Continue
          </button>

            {/* Link to News Page
            <div className="w-full mb-10">
              <a href="/home-news/news" className="block bg-green-600 hover:bg-green-700 transition rounded-full py-3 font-semibold text-center">
                Go to News Page
              </a>
            </div> */}
        </div>
      </div>
    </div>
  );
}
