"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full flex flex-col items-center overflow-hidden">
      <div className="flex-1 flex items-end justify-center w-full pb-6">
        <video
          muted
          loop
          autoPlay
          playsInline
          src="/videos/hero-video.mp4"
          className="mix-blend-screen w-full h-auto max-h-37.5 object-contain"
        />
      </div>

      <div className="text-center text-white mt-10">
        <h1 className="text-[32px] font-bold tracking-tight leading-none mb-4">
          ABOVE AND BEYOND!
        </h1>
        <p className="text-[#9699A3] text-sm mx-auto welcome-p">
          Welcome to your one stop hub for everything <br />
          Beyond The Line
        </p>
      </div>

      <div className="w-full px-4 flex flex-col gap-4 mb-14.5 mt-20.25">
        <Link href="/account">
          <button className="bg-[#0E2B77] text-white py-3 px-6 rounded-full font-semibold text-base shadow-lg w-full cursor-pointer">
            Create account
          </button>
        </Link>
        <Link href="/login">
          <button className="border border-[#676975] text-white py-3 px-6 rounded-full font-semibold text-base w-full cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
