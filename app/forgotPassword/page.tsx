"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Reset email:", email);
    // send verification code logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071426] to-black text-white flex justify-center px-6">
      <div className="w-full max-w-sm pt-6 flex flex-col min-h-screen">
        {/* Header */}
        <div className="flex items-center mb-10">
          <Link href="/login" className="mr-4">
            <ArrowLeft size={26} />
          </Link>
          
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold tracking-wide mb-2">
          FORGOT PASSWORD
        </h1>
        <p className="text-sm text-gray-400 mb-8">
          Please enter your email to receive a verification code.
        </p>

        {/* Email input */}
        <div className="mb-4">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Use phone instead */}
        <div className="text-center mb-10">
          <Link href="/changePassword" className="text-sm text-blue-500 hover:underline">
            Use phone rather?
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
