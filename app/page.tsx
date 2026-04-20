import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="max-w-md w-full flex flex-col items-center justify-end  pb-16.5 h-full gap-y-20 px-2 lg:px-0">
        <div className="flex items-center justify-center w-full">
          <video
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            src="/videos/hero-video.mp4"
            className="mix-blend-screen w-full h-auto max-h-37.5 object-contain"
          />
        </div>

        <div className="text-center text-white">
          <p className="text-[32px] font-bold tracking-tight leading-none mb-1">
            ABOVE AND BEYOND!
          </p>
          <p className="text-[#9699A3] text-sm  mx-auto">
            Welcome to your one stop hub for everything <br />
            Beyond The Line
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          <Link href="/account">
            <button className="bg-[#0E2B77] text-white py-2.5 px-6 rounded-full font-semibold text-base shadow-lg w-full">
              Create account
            </button>
          </Link>
          <Link href="/login">
            <button className="border border-[#676975] text-white py-2.5 px-6 rounded-full font-semibold text-base w-full">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
