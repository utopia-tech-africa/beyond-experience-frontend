"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Vector from "@/components/custom/vector";
import CustomInput from "@/components/ui/custom-input";

export default function LoginPage() {
  return (
    <div className="text-white px-6 lg:px-0">
      <div className="grid grid-cols-3 pb-12 pt-5 relative">
        <Link href="/">
          <ArrowLeft size={30} className="cursor-pointer" />
        </Link>

        <div className="flex justify-center">
          <Vector />
        </div>
      </div>
      <div>
        {/* Title */}
        <h1 className="text-3xl font-bold mb-10 tracking-wide">
          WELCOME BACK!
        </h1>

        <div className="space-y-4">
          <CustomInput label="Email" placeholder="johndoe@email.com" />
          <CustomInput label="Password" placeholder="*******" type="password" />
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-8 mt-2">
          <Link href="/forgotPassword" className="text-sm text-gray-400">
            Forgot password
          </Link>
        </div>

        {/* Login button */}
        <Link
          href="/"
          className="w-full inline-block bg-[#0E2B77] hover:bg-blue-800 transition rounded-3xl py-3 font-semibold text-center"
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
        <div className="space-y-3 mb-6">
          <Link
            href="/api/auth/apple"
            role="button"
            aria-label="Login with Apple"
            className="w-full bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/apple.svg" alt="apple" width={20} height={20} />
            <span>Login with Apple</span>
          </Link>

          <Link
            href="/api/auth/google"
            role="button"
            aria-label="Login with Google"
            className="w-full bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/google.svg" alt="google" width={20} height={20} />
            <span>Login with Google</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
