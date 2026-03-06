"use client";
import { ArrowLeftIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const newsArticle = {
  category: "Entertainment",
  title: "Young Entrepreneurs Pop Up Market Day Meet Up Held At Accra Mall This Weekend.",
  trend: "Trending",
  timeAgo: "3 hours",
  image: "/images/news-hero.png",
  body: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
  ],
};

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#060D18] text-white max-w-[375px] mx-auto relative overflow-x-hidden">

      {/* Hero Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/images/news-image.png"
          fill
          className="object-cover"
          alt="news-image"
          priority
        />

        {/* Dark gradient overlay fading to background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-[#060D18]" />

        {/* Back button overlaid on image */}
        <button
          onClick={() => router.back()}
          className="absolute top-12 left-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-[#060D18] shadow-md transition-transform hover:-translate-x-0.5 active:scale-95"
          aria-label="Go back"
        >
          <ArrowLeftIcon size={18} weight="bold" />
        </button>
      </div>

      {/* Content Card — overlaps image */}
      <div className="relative -mt-10 px-5 pt-6 pb-16 rounded-t-3xl bg-[#060D18] flex flex-col gap-4">

        {/* Category badge */}
        <span className="self-start px-2 py-1 rounded-full bg-[#FFFFFF] border border-white/15 text-xs font-medium text-black tracking-wide">
          {newsArticle.category}
        </span>

        {/* Title */}
        <h1 className="text-[#F8F9FA] font-normal text-[26px] leading-snug uppercase tracking-tight">
          {newsArticle.title}
        </h1>

        {/* Meta row */}
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span className="font-semibold text-gray-300">{newsArticle.trend}</span>
          <span className="w-1 h-1 rounded-full bg-gray-500 inline-block" />
          <span>{newsArticle.timeAgo}</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 w-full" />

        {/* Body paragraphs */}
        <div className="flex flex-col gap-4">
          {newsArticle.body.map((para, i) => (
            <p key={i} className="text-gray-300 text-sm leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;