"use client";

export default function Home() {
  return (
    <div className="max-w-md h-full  flex flex-col items-center  gap-15 px-6">
      <div className="grow flex items-end justify-center w-[399.34]">
        <video
          muted
          loop
          autoPlay
          playsInline
          src="/videos/hero-video.mp4"
          className="mix-blend-screen w-full h-auto max-h-37.5 object-contain"
        />
      </div>

      <div className="text-center text-white">
        <h1 className="text-[32px] {bebas.variable} font-bold tracking-tight leading-none mb-4">
          ABOVE AND BEYOND!
        </h1>
        <p className="text-[#9699A3] text-sm max-w-65 mx-auto">
          Welcome to your one stop hub for everything <br />
          Beyond The Line
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 mb-12">
        <button className="bg-[#112D7A]  text-white py-4 rounded-full font-semibold text-base shadow-lg">
          Create account
        </button>
        <button className="border border-white  text-white py-4 rounded-full font-semibold text-base">
          Login
        </button>
      </div>
    </div>
  );
}

