"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Vector from "@/components/custom/vector";
import CustomInput from "@/components/ui/custom-input";

export default function CreateAccountPage() {
  return (
    <div className="text-white">
      {/* Mobile container */}
      <div className="w-full ">
        {/* Back arrow + logo */}
        <div className="grid grid-cols-3 pb-12 pt-5  relative">
          <Link href="/">
            <ArrowLeft size={30} className="cursor-pointer" />
          </Link>

          <div className=" flex justify-center">
            <Vector />
          </div>
        </div>

        <h1 className="text-3xl font-bold tracking-wide">CREATE ACCOUNT</h1>
        <div className="space-y-4">
          <CustomInput
            label="Email"
            type="email"
            placeholder="john@email.com"
          />

          <CustomInput
            label="Create password"
            type="password"
            placeholder="••••••••"
          />

          <CustomInput
            label="Confirm password"
            type="password"
            placeholder="••••••••"
          />
        </div>

        <Link
          href="/login"
          className="w-full inline-block bg-blue-700 hover:bg-blue-800 transition rounded-3xl py-3 font-semibold mb-6 text-center"
        >
          Create account
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-700" />
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

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
