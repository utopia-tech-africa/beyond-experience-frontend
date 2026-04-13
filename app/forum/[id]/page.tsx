"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageCircle, Share2, Image as ImageIcon, Paperclip, Smile, Menu } from "lucide-react";
import { dummyPosts } from "../data/dummyPosts";

interface ForumThreadProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ForumThreadPage({ params }: ForumThreadProps) {
  const router = useRouter();
  const { id } = React.use(params);
  const [message, setMessage] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const post = dummyPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] text-white flex items-center justify-center">
        <p>Post not found</p>
      </div>
    );
  }

  // Create dummy replies based on the post
  const replies = [
    {
      id: "r1",
      author: "Delasie Ametepey",
      username: "#delasie",
      time: "1h",
      content: "Lorem ipsum dolor sit amet, #Savetheearth consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      avatar: "https://i.pravatar.cc/150?img=32",
      votes: 10,
    },
    {
      id: "r2",
      author: "Delasie Ametepey",
      username: "#delasie",
      time: "1h",
      content: "Lorem ipsum dolor sit amet, #Savetheearth consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      avatar: "https://i.pravatar.cc/150?img=32",
      votes: 10,
    },
    {
      id: "r3",
      author: "Delasie Ametepey",
      username: "#delasie",
      time: "1h",
      content: "Lorem ipsum dolor sit amet, #Savetheearth consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
      avatar: "https://i.pravatar.cc/150?img=32",
      votes: 10,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white flex flex-col">
      {/* Header */}
      <div className={`sticky top-0 z-30 flex items-center justify-center px-5 py-4 relative transition-all duration-300 ${
        isScrolled ? "bg-[#0a0f1a]/80 backdrop-blur-md" : "bg-[#0a0f1a]"
      }`}>
        <button
          onClick={() => router.back()}
          className="absolute left-5"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="font-bold text-xl tracking-[0.3em]">FORUM</h1>
      </div>

      {/* Featured Post Banner (if it's the first post) - Sticky */}
      {post.id === "1" && (
        <div className="sticky top-[60px] z-20 mx-4 mb-4 rounded-xl overflow-hidden relative">
          <img 
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800" 
            alt="Featured" 
            className="w-full h-24 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-600/80 flex items-center px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{post.author} <span className="text-gray-300">{post.username}</span></h3>
                <p className="text-xs text-gray-200">KFC promoters wanted</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pb-24">

        {/* Main Post */}
        <div className="px-4 mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
              {post.avatar ? (
                <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full" />
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-semibold text-base">{post.author}</h2>
                <span className="text-blue-400 text-sm">{post.username}</span>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <p className="text-sm text-gray-300 leading-relaxed">
              {post.content}
            </p>
          </div>

          {post.image && (
            <div className="mb-4">
              <img 
                src={post.image} 
                alt="" 
                className="w-full aspect-[16/9] rounded-2xl object-cover"
              />
            </div>
          )}

          {/* Post Actions */}
          <div className="flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button className="hover:text-blue-400 transition">
                  <ThumbsUp className="w-5 h-5" strokeWidth={2} />
                </button>
                <span className="text-sm text-gray-400">vote</span>
                <button className="hover:text-blue-400 transition">
                  <ThumbsDown className="w-5 h-5" strokeWidth={2} />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" strokeWidth={2} />
                <span className="text-sm">{replies.length}</span>
              </div>
            </div>

            <button className="hover:text-blue-400 transition">
              <Share2 className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mx-4 mb-4"></div>

        {/* Replies */}
        <div className="px-4 space-y-6">
          {replies.map((reply) => (
            <div key={reply.id}>
              <div className="flex gap-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-700">
                  <img src={reply.avatar} alt={reply.author} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-base">{reply.author}</h3>
                    <span className="text-blue-400 text-sm">{reply.username}</span>
                    <span className="text-gray-600 text-sm">· {reply.time}</span>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-3">
                    {reply.content}
                  </p>
                  
                  {/* Reply Actions */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button className="hover:text-blue-400 transition">
                        <ThumbsUp className="w-4 h-4" strokeWidth={2} />
                      </button>
                      <span className="text-xs text-gray-400">vote</span>
                      <button className="hover:text-blue-400 transition">
                        <ThumbsDown className="w-4 h-4" strokeWidth={2} />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" strokeWidth={2} />
                      <span className="text-xs">{reply.votes}</span>
                    </div>

                    <button className="hover:text-blue-400 transition">
                      <Share2 className="w-4 h-4" strokeWidth={2} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Message Input - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a0f1a] border-t border-gray-800 px-4 py-3">
        <div className="max-w-md mx-auto flex items-center gap-2">
          <div className="flex-1 bg-white rounded-full flex items-center px-4 py-2.5">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 bg-transparent text-gray-800 text-sm outline-none placeholder-gray-400"
            />
            <div className="flex items-center gap-2 ml-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-gray-600">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button className="bg-blue-600 rounded-full p-3 hover:bg-blue-700 transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
