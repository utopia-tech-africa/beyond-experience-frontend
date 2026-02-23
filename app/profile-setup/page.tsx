"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useRef, useState } from "react";
import VideoOverlay from "@/components/custom/video-overlay";
import Vector from "@/components/custom/vector";
import PhoneInput from "react-phone-number-input/input";
import CustomInput from "@/components/ui/custom-input";
import CustomSelect from "@/components/ui/custom-select";
import { DatePicker } from "@/components/custom/date-picker";

export default function ProfileSetupPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  // Add these state variables inside your ProfileSetupPage component
const [day, setDay] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");

const days = Array.from({ length: 31 }, (_, i) => ({
  label: String(i + 1),
  value: String(i + 1),
}));

const months = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
].map((m, i) => ({ label: m, value: String(i + 1) }));

const years = Array.from({ length: 100 }, (_, i) => {
  const y = new Date().getFullYear() - i;
  return { label: String(y), value: String(y) };
});

  return (
    <div className="min-h-screen   text-white flex justify-center">
      <div className="w-full max-w-sm px-6 pt-6">
        {/* ===== iOS Status Bar ===== */}
        <div className="flex justify-between items-center text-xs opacity-80 mb-6"></div>

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
      <form
        id="profile-form"
     
      >
        <div className="space-y-4 text-white">
          <CustomInput
            label="Name"
            placeholder="Maxwell Attoh"

          />
          <CustomInput
            label="Username"
            placeholder="@max360"

          />
          <CustomSelect
            label="Gender"      
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
          <DatePicker label="Date of Birth" placeholder="07 September, 2000" />
          <CustomInput
            label="Email"
            placeholder="johndoe@email.com"
     
          />
          
         
        </div>
      </form>

          {/* Continue button */}
          <button className="w-full bg-[#0E2B77] hover:bg-blue-800 transition rounded-full py-3 font-semibold mt-4 mb-10">
            Continue
          </button>
        </div>
      </div>
    
  );
}
