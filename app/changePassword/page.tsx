"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPhonePage() {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    console.log("Reset phone:", phone);
    // send verification code logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071426] to-black text-white flex flex-col px-6">
      <div className="w-full max-w-sm mx-auto pt-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center mb-10">
          <Link href="/forgotPassword" className="mr-4">
            <ArrowLeft size={26} />
          </Link>
          
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide mb-2">
          FORGOT PASSWORD
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Please enter your phone number to receive a verification code.
        </p>

        {/* Phone input */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Phone</label>

          <div className="mt-2 flex items-center gap-3 bg-transparent border border-gray-600 rounded-3xl px-4 py-3 focus-within:border-blue-500">
            {/* Ghana flag with dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-2xl">🇬🇭</span>
              <span className="text-gray-400">▼ </span>
            </div>

            <span className="text-white">+233</span>

            <input
              type="tel"
              placeholder=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-transparent outline-none text-white placeholder-gray-500"
            />
          </div>
        </div>

        {/* Use email instead */}
        <div className="text-center mb-10">
          <Link
            href="/forgotPassword"
            className="text-sm text-blue-500 hover:underline"
          >
            Use email rather?
          </Link>
        </div>

        {/* Spacer to push button to bottom */}
        <div className="flex-1"></div>

        {/* Send button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-3xl py-3 font-semibold mb-6"
        >
          Send
        </button>
      </div>
    </div>
  );
}
