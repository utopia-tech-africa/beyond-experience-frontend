"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-md h-full flex flex-col items-center overflow-hidden">
      <div className="flex-1 flex items-center justify-center w-full">
        <video
          muted
          loop
          autoPlay
          playsInline
          src="/videos/hero-video.mp4"
          className="mix-blend-screen w-full h-auto max-h-37.5 object-contain"
        />
      </div>

      <div className="text-center text-white mb-8">
        <h1 className="text-[32px] font-bold tracking-tight leading-none mb-4">
          ABOVE AND BEYOND!
        </h1>
        <p className="text-[#9699A3] text-sm max-w-65 mx-auto">
          Welcome to your one stop hub for everything <br />
          Beyond The Line
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 mb-12">
        <Link href="/account">
          <button className="bg-[#112D7A] text-white py-4 rounded-full font-semibold text-base shadow-lg w-full cursor-pointer">
            Create account
          </button>
        </Link>
        <Link href="/login">
          <button className="border border-white text-white py-4 rounded-full font-semibold text-base w-full cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
