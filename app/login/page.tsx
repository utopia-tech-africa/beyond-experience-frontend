"use client";

import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import VideoOverlay from "../components/VideoOverlay";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071426] to-black text-white flex justify-center">
      {/* Mobile frame */}
      <div className="w-full max-w-sm px-6 pt-6">
        {/* ====== Fake iOS Status Bar ====== */}
        {/* <div className="flex justify-between items-center text-xs opacity-80 mb-6">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <div className="w-4 h-2 border border-white rounded-sm relative">
              <div className="absolute right-0 top-0 bottom-0 w-2 bg-yellow-400 rounded-sm" />
            </div>
          </div>
        </div> */}

        {/* Back arrow + logo */}
        <div className="flex items-center gap-10 justify-between mb-10">
          <Link href="/account">
            <ArrowLeft size={25} className="cursor-pointer" />
          </Link>
          {/* <div> <VideoOverlay/> </div> */}
          {/* <div className="text-lg font-bold tracking-widest">⚡</div> */}
          <div /> {/* spacer */}
          <VideoOverlay/> 
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-10 tracking-wide">
          WELCOME BACK!
        </h1>

        {/* Email */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="johndoe@email.com"
            className="mt-2 w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-white"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="text-sm text-gray-300">Password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full bg-transparent border border-gray-600 rounded-full px-5 py-3 pr-16 outline-none focus:border-white"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-8">
          <Link href="#" className="text-sm text-gray-400">
            Forgot password
          </Link>
        </div>

        {/* Login button */}
        <Link
          href="/profile-setup"
          className="w-full inline-block bg-blue-700 hover:bg-blue-800 transition rounded-full py-3 font-semibold text-center"
        >
          Login
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Social login buttons */}
        <div className="space-y-3">
          <a
            href="/api/auth/apple"
            role="button"
            aria-label="Login with Apple"
            className="w-full block bg-gray-800 rounded-full py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <img src="/apple.svg" alt="apple" className="w-5 h-5" />
            <span>Login with Apple</span>
          </a>

          <a
            href="/api/auth/google"
            role="button"
            aria-label="Login with Google"
            className="w-full block bg-gray-800 rounded-full py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <img src="/google.svg" alt="google" className="w-5 h-5" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}
