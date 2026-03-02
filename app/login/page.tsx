"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Vector from "@/components/custom/vector";
import CustomInput from "@/components/ui/custom-input";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen  text-white flex justify-center">
      {/* Mobile frame */}
      <div className="w-full max-w-sm px-6 pt-6">
        {/* Back arrow + logo */}
        <div className="flex items-center gap-10 justify-center mb-10 relative">
          <div className="absolute left-0">
            <Link href="/">
              <ArrowLeft size={30} className="cursor-pointer" />
            </Link>
          </div>
          <div>
            <Vector />{" "}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold mb-10 tracking-wide">
          WELCOME BACK!
        </h1>

        {/* Email */}
        <div className="mb-6">
          <CustomInput label="Email" placeholder="johndoe@email.com" />
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="relative mt-2">
            <CustomInput
              label="Password"
              placeholder="*******"
              type="password"
            />
            {/* <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-sm text-gray-300"
            >
              {showPassword ? "Hide" : "Show"}
            </button> */}
          </div>
        </div>

        {/* Forgot password */}
        <div className="flex justify-end mb-8">
          <Link href="/forgotPassword" className="text-sm text-gray-400 mb-5">
            Forgot password
          </Link>
        </div>

        {/* Login button */}
        <Link
          href="/phone-verification"
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
        <div className="space-y-3 mb-6">
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
            <img src="/google.svg" alt="google" className="w-5 h-5 " />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </div>
  );
}
