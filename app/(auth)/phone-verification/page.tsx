"use client";

import { ArrowLeft } from "lucide-react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Link from "next/link";
import { useState } from "react";
import Vector from "@/components/custom/vector";
import { useRouter } from "next/navigation";

export default function PhoneVerification() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleSendOtp = () => {
    sessionStorage.setItem("phoneNumber", phone);
    console.log("Sending OTP to:", phone);
    router.push("/otp-verification");
  };

  return (
    <div className="text-white h-full pb-16 px-6 lg:px-0 flex flex-col">
      <div className="grid grid-cols-3 pb-12 pt-5 relative">
        <button onClick={() => router.back()}>
          <ArrowLeft size={30} className="cursor-pointer" />
        </button>

        <div className="flex justify-center">
          <Vector />
        </div>
      </div>
      <h1 className="text-3xl font-extrabold uppercase mb-8 tracking-tight">
        Verify Your Number
      </h1>
      <div className="space-y-2 mb-4">
        <label className="text-white font-medium">Phone:</label>
        <PhoneInput
          defaultCountry="GH"
          value={phone}
          onChange={(val) => setPhone(val as string)}
          className="phone-input flex items-center rounded-full border border-gray-500 px-4 py-3 bg-transparent"
        />
      </div>
      {/* Send code button */}
      <button
        onClick={handleSendOtp}
        className="w-full bg-[#0E2B77] hover:bg-[#0C2563] transition rounded-full py-3 font-semibold inline-block text-center"
      >
        Send code
      </button>
    </div>
  );
}
