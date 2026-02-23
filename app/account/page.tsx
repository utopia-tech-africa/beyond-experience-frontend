"use client";

import { ArrowLeft } from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../components/Vector";

export default function CreateAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071426] to-black text-white flex justify-center">
      {/* Mobile container */}
      <div className="w-full max-w-sm px-6 pt-6">
        
        {/* Back arrow + logo */}
        <div className="flex items-center gap-10 justify-center mb-10 relative">
          <div className="absolute left-0">
            <Link href="/">
              <ArrowLeft size={30} className="cursor-pointer" />
            </Link>
          </div>
          <div> 
            <Vector />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-8 tracking-wide">
          CREATE ACCOUNT
        </h1>

        {/* Email */}
        <div className="mb-5">
          <label className="text-sm text-gray-300">Email</label>
          <input
            type="email"
            placeholder="john@email.com"
            className="mt-2 w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 outline-none focus:border-white"
          />
        </div>

        {/* Password */}
        <div className="mb-5">
          <label className="text-sm text-gray-300">Create password</label>
          <div className="relative mt-2">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 pr-12 outline-none focus:border-white"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="text-sm text-gray-300">Confirm password</label>
          <div className="relative mt-2">
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••"
              className="w-full bg-transparent border border-gray-600 rounded-3xl px-4 py-3 pr-12 outline-none focus:border-white"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 "
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Create account button */}
        <Link
          href="/login"
          className="w-full inline-block bg-blue-700 hover:bg-blue-800 transition rounded-3xl py-3 font-semibold mb-6 text-center"
        >
          Create account
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Social buttons */}
        <div className="space-y-3">
          <a
            href="/api/auth/apple"
            role="button"
            aria-label="Sign up with Apple"
            className="w-full block bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/apple.svg" alt="apple" width={20} height={20} />
            <span>Sign up with Apple</span>
          </a>

          <a
            href="/api/auth/google"
            role="button"
            aria-label="Sign up with Google"
            className="w-full block bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/google.svg" alt="google" width={20} height={20} />
            <span>Sign up with Google</span>
          </a>
        </div>

        {/* Login link */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Already a member?
          <Link href="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
