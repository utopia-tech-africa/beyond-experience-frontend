"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-md w-full flex flex-col items-center justify-center gap-15 px-6">
        <div className="flex items-center justify-center w-full">
          {!videoLoaded && (
            <div className="w-full h-[300px] bg-transparent animate-pulse" />
          )}
          <video
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            onLoadedData={() => setVideoLoaded(true)}
            src="/videos/hero-video.mp4"
            className={`mix-blend-screen w-full h-auto max-h-37.5 object-contain ${!videoLoaded ? 'hidden' : ''}`}
          />
        </div>

        <div className="text-center text-white">
          <h1 className="text-[32px] font-bold tracking-tight leading-none mb-4">
            ABOVE AND BEYOND!
          </h1>
          <p className="text-[#9699A3] text-sm max-w-65 mx-auto">
            Welcome to your one stop hub for everything <br />
            Beyond The Line
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Link href="/account">
            <button className="bg-[#112D7A] text-white py-4 rounded-full font-semibold text-base shadow-lg w-full">
              Create account
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-white text-white py-4 rounded-full font-semibold text-base w-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

