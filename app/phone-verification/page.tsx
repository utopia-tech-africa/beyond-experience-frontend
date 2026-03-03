"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react"
import { useState } from "react"

export default function PhoneVerification() {
  const [phone, setPhone] = useState("")

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm px-6 text-white">

        {/* Back button */}
        <button className="mb-6">
          <ArrowLeft className="w-5 h-5 text-gray-300" />
        </button>

        {/* Avatar */}
        <div className="flex justify-center mb-6">
         
        </div>

        {/* Title */}
        <h1 className="text-center text-xl font-semibold mb-8">
          VERIFY YOUR NUMBER
        </h1>

        {/* Phone input */}
        <label className="block text-sm text-gray-400 mb-2">
          Phone:
        </label>

        <div className="flex items-center gap-2 bg-[#0f223a] rounded-full px-4 py-3 mb-6 border border-gray-700">
          <span className="text-lg">🇬🇭</span>
          <span className="text-gray-300 text-sm">+233</span>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-sm"
          />
        </div>

        {/* Send code button */}
        <Link
          href="/otp-verification"
          className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-full py-3 font-semibold inline-block text-center"
        >
          Send code
        </Link>

      </div>
    </div>
  )
}
