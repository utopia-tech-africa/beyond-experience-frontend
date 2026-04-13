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
import { useRouter } from "next/navigation";

export default function ProfileSetupPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, i) => ({
    label: String(i + 1),
    value: String(i + 1),
  }));

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ].map((m, i) => ({ label: m, value: String(i + 1) }));

  const years = Array.from({ length: 100 }, (_, i) => {
    const y = new Date().getFullYear() - i;
    return { label: String(y), value: String(y) };
  });

  return (
    <div className="h-full   text-white flex justify-center">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Vector />
        </div>

        {/* Title */}

        <h1 className="text-center font-bold mb-8 tracking-wide">
          FINISH SETTING UP YOUR ACCOUNT
        </h1>

        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <Image
              src="/Profile1.jpg"
              alt="profile"
              width={120}
              height={120}
              className="relative z-10 rounded-full object-cover border-2 border-gray-600"
            />

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

        <form id="profile-form">
          <div className="space-y-4 text-white">
            <CustomInput label="Name" placeholder="Maxwell Attoh" />
            <CustomInput label="Username" placeholder="@max360" />
            <CustomSelect
              label="Gender"
              options={[
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
              ]}
            />
            <DatePicker
              label="Date of Birth"
              placeholder="07 September, 2000"
            />
            <CustomInput label="Email" placeholder="johndoe@email.com" />
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
            onClick={() => router.push("/home-news/news")}
            className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-full py-3 font-semibold mt-4 mb-10"
          >
            Continue
          </button>
        </form>

        {/* Link to News Page */}
        <div className="w-full mb-10">
          <a
            href="/home-news/news"
            className="block bg-green-600 hover:bg-green-700 transition rounded-full py-3 font-semibold text-center"
          >
            Go to News Page
          </a>
        </div>
      </div>
    </div>
  );
}
