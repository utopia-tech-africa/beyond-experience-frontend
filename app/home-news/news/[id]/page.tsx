"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

interface NewsDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default function NewsDetailPage({ params }: NewsDetailProps) {
  const router = useRouter();
  const { id } = React.use(params);
  const newsId = parseInt(id);

  // Same news data - in a real app, this would come from an API or database
  const allNews = [
    {
      id: 1,
      category: "Entertainment",
      title: "Young entrepreneurs connect and meet up held at Accra over the weekend.",
      time: "3 Hours ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 2,
      category: "Entertainment",
      title: "The premiere of Silvertown Blues was held at Silverbird Cinemas, Accra Mall by MTN.",
      time: "6 Hours ago",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 3,
      category: "Entertainment",
      title: "Music festival brings together top artists from across Africa.",
      time: "8 Hours ago",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 4,
      category: "Digital",
      title: "EdTech Mondays by MEST is equipping young people with the skills and knowledge they need to thrive.",
      time: "3 Hours ago",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 5,
      category: "Entertainment",
      title: "Fashion show highlights emerging designers from West Africa.",
      time: "5 Hours ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 6,
      category: "Entertainment",
      title: "Annual film festival showcases local talent and creativity.",
      time: "7 Hours ago",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 7,
      category: "Sports",
      title: "Ghana's Black Stars qualify for the next round of African Cup.",
      time: "2 Hours ago",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 8,
      category: "Sports",
      title: "Local basketball league finals draw massive crowds in Accra.",
      time: "4 Hours ago",
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 9,
      category: "Music",
      title: "Afrobeats artist wins international music award.",
      time: "1 Hour ago",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 10,
      category: "Music",
      title: "New album release breaks streaming records across Africa.",
      time: "5 Hours ago",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 11,
      category: "Fashion",
      title: "Accra Fashion Week showcases sustainable African designs.",
      time: "3 Hours ago",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
    {
      id: 12,
      category: "Fashion",
      title: "Local designer collaborates with international fashion house.",
      time: "6 Hours ago",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    },
  ];

  const newsItem = allNews.find((item) => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#071526] to-black text-white flex items-center justify-center">
        <p>News not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#071526] to-black text-white">
      <div className="relative">
        {/* Header Image */}
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover"
        />
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-4 bg-white backdrop-blur-sm p-2 rounded-full"
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>

        {/* Top Right Icons */}
        {/* <div className="absolute top-6 right-4 flex gap-2">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm">📍</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm">👁️</span>
            <span className="text-xs">32</span>
          </div>
          <div className="bg-yellow-500 px-3 py-1 rounded-full flex items-center gap-1">
            <span className="text-sm">⭐</span>
            <span className="text-xs text-black font-semibold">32</span>
          </div>
        </div> */}
      </div>

      {/* Content */}
      <div className="px-4 py-6">
        {/* Category Badge */}
        <span className="inline-block bg-white text-black text-xs px-3 py-1 rounded-full mb-3">
          {newsItem.category}
        </span>

        {/* Title */}
        <h1 className="text-xl font-bold mb-2 uppercase">
          {newsItem.title}
        </h1>

        {/* Trending Info */}
        <p className="text-sm text-gray-400 mb-6">
          Trending • {newsItem.time}
        </p>

        {/* Content Paragraphs */}
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>{newsItem.content}</p>
          <p>{newsItem.content}</p>
          <p>{newsItem.content}</p>
        </div>
      </div>
    </div>
  );
}
