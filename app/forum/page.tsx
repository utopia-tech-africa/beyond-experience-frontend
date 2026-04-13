"use client";

import Link from "next/link";
import { dummyPosts } from "./data/dummyPosts";
import { MessageCircle, ThumbsUp, ThumbsDown, Plus, Bell, Share2 } from "lucide-react";
import { House, CalendarBlank, Storefront, ChatsCircle } from "@phosphor-icons/react";
import Image from "next/image";

export default function Forum() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="w-full max-w-md mx-auto relative">
        {/* Header - Fixed */}
        <div className="sticky top-0 z-30 bg-[#0a0f1a] flex items-center justify-between px-5 py-4">
          <Link href="/forum/profile">
            <div className="w-14 h-14 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition">
              <Image src="/Profile1.jpg" alt="Profile" width={56} height={56} className="object-cover" />
            </div>
          </Link>
          <h1 className="font-bold text-xl tracking-[0.3em]">FORUM</h1>
          <div className="relative">
            <Bell className="w-6 h-6 text-white" strokeWidth={2} />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Posts Container - Scrollable */}
        <div className="px-4 pb-32 pt-2">
          {dummyPosts.map((post, index) => (
            <div key={post.id} className="mb-6">
              {/* Post Header */}
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  {post.avatar ? (
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  ) : (
                    <Image src="/Profile1.jpg" alt={post.author} width={48} height={48} className="object-cover" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h2 className="font-semibold text-base">{post.author}</h2>
                    <span className="text-gray-500 text-sm">{post.username}</span>
                    <span className="text-gray-600 text-sm">· {post.time}</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="mb-3 pl-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  {post.content}
                </p>
              </div>

              {/* Post Image */}
              {post.image && (
                <Link href={`/forum/${post.id}`}>
                  <div className="mb-4">
                    <img 
                      src={post.image} 
                      alt="" 
                      className="w-full aspect-[16/9] rounded-2xl object-cover"
                    />
                  </div>
                </Link>
              )}

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Vote buttons */}
                  <div className="flex items-center gap-2">
                    <button className="hover:text-blue-400 transition">
                      <ThumbsUp className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <span className="text-sm text-gray-400">vote</span>
                    <button className="hover:text-blue-400 transition">
                      <ThumbsDown className="w-5 h-5" strokeWidth={2} />
                    </button>
                  </div>
                  
                  {/* Comments */}
                  <Link href={`/forum/${post.id}`} className="flex items-center gap-2 hover:text-blue-400 transition">
                    <MessageCircle className="w-5 h-5" strokeWidth={2} />
                    <span className="text-sm">{post.comments.length}</span>
                  </Link>
                </div>

                {/* Share button */}
                <button className="hover:text-blue-400 transition">
                  <Share2 className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>

              {/* Divider between posts */}
              {index < dummyPosts.length - 1 && (
                <div className="mt-6 border-t border-gray-800"></div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Create Button - Positioned within mobile container */}
        <Link href="/forum/create">
          <button className="fixed bottom-32 right-4 bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-20 hover:bg-blue-700 transition-all">
            <Plus className="w-7 h-7" strokeWidth={2.5} />
          </button>
        </Link>

        {/* Bottom Navigation - Rounded Container */}
        <div className="fixed bottom-4 left-0 right-0 z-10 px-4">
          <div 
            className="max-w-md mx-auto rounded-[32px] shadow-2xl"
            style={{
              background: '#121214CC',
              border: '0.5px solid',
              borderImageSource: 'linear-gradient(87.1deg, #2E2E2E 2.87%, #575454 78.06%)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="flex justify-around items-center py-3 px-6">
              <Link href="/" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition py-2 min-w-[70px]">
                <House size={24} weight="regular" />
                <span className="text-[11px]">Home</span>
              </Link>
              <Link href="/events" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition py-2 min-w-[70px]">
                <CalendarBlank size={24} weight="regular" />
                <span className="text-[11px]">Events</span>
              </Link>
              <Link href="/marketplace" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition py-2 min-w-[70px]">
                <Storefront size={24} weight="regular" />
                <span className="text-[11px]">Marketplace</span>
              </Link>
              <Link href="/forum" className="flex flex-col items-center gap-1 text-blue-500 py-2 min-w-[70px]">
                <ChatsCircle size={24} weight="fill" />
                <span className="text-[11px] font-semibold">Forum</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
