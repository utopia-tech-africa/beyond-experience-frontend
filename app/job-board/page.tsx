"use client";

import Link from "next/link";
import { Search, SlidersHorizontal, Share2, Bell, MapPin, Clock } from "lucide-react";
import { House, CalendarBlank, Storefront, ChatsCircle } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

interface Job {
  id: number;
  company: string;
  avatar: string;
  title: string;
  description: string;
  applicants: number;
  role: string;
  salary: string;
  postedTime: string;
}

export default function JobBoard() {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedJobType, setSelectedJobType] = useState<string | null>(null);
  const jobs: Job[] = [
    {
      id: 1,
      company: "Delasie Ametepey",
      avatar: "https://i.pravatar.cc/150?img=12",
      title: "KFC Red Army promoters",
      description: "We need promoters to help push the KFC burger deal if you are interested apply.",
      applicants: 10,
      role: "Promoter",
      salary: "GHC 300 - GHC 600",
      postedTime: "1h"
    },
    {
      id: 2,
      company: "Delasie Ametepey",
      avatar: "https://i.pravatar.cc/150?img=33",
      title: "KFC Red Army promoters",
      description: "We need promoters to help push the KFC burger deal if you are interested apply.",
      applicants: 10,
      role: "Promoter",
      salary: "GHC 300 - GHC 600",
      postedTime: "1h"
    },
    {
      id: 3,
      company: "Delasie Ametepey",
      avatar: "https://i.pravatar.cc/150?img=68",
      title: "KFC Red Army promoters",
      description: "We need promoters to help push the KFC burger deal if you are interested apply.",
      applicants: 10,
      role: "Promoter",
      salary: "GHC 300 - GHC 600",
      postedTime: "1h"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="w-full max-w-md mx-auto relative">
        {/* Header - Fixed */}
        <div className="sticky top-0 z-30 bg-[#0a0f1a]">
          {/* Status Bar */}
          {/* <div className="flex items-center justify-between px-5 pt-3 pb-2">
            <span className="text-sm font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-4 h-3 bg-white rounded-sm"></div>
            </div>
          </div> */}

          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image src="/Profile1.jpg" alt="Profile" width={48} height={48} className="object-cover" />
            </div>
            <h1 className="font-bold text-xl tracking-[0.3em]">JOB BOARD</h1>
            <div className="relative">
              <Bell className="w-6 h-6 text-white" strokeWidth={2} />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="px-5 pb-4">
            <div className="flex items-center gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-[#1a2332] rounded-full py-3 pl-12 pr-4 text-sm text-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button 
                onClick={() => setShowFilter(true)}
                className="bg-[#1a2332] p-3 rounded-full hover:bg-[#243447] transition"
              >
                <SlidersHorizontal className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Listings - Scrollable */}
        <div className="px-5 pb-32 space-y-4">
          {jobs.map((job) => (
            <Link href={`/job-board/${job.id}`} key={job.id}>
              <div className="bg-[#0f1621] rounded-2xl p-5 cursor-pointer hover:bg-[#1a2332] transition mb-4">
              {/* Job Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-600 flex-shrink-0 overflow-hidden">
                    <img src={job.avatar} alt={job.company} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{job.company}</h3>
                    <span className="text-gray-500 text-sm">· {job.postedTime}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white transition">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Job Title */}
              <h2 className="font-bold text-lg mb-2">{job.title}</h2>

              {/* Job Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                {job.description}
              </p>

              {/* Applicants Count */}
              <p className="text-sm text-gray-500 mb-4">{job.applicants} people applied</p>

              {/* Job Details */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-sm mb-1">{job.role}</p>
                  <p className="text-xs text-gray-400">Salary: {job.salary}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded-full transition">
                  Apply
                </button>
              </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Filter Modal */}
        {showFilter && (
          <div className="fixed inset-0 z-40 flex items-end justify-center bg-black/50" onClick={() => setShowFilter(false)}>
            <div 
              className="w-full max-w-md bg-[#0f1621] rounded-t-3xl p-6 pb-8 animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Handle bar */}
              <div className="w-16 h-1.5 bg-gray-600 rounded-full mx-auto mb-6"></div>

              <h2 className="text-xl font-semibold mb-6 text-gray-400">Filter options</h2>

              {/* Location Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <h3 className="text-lg font-medium">Location</h3>
                </div>
                <div className="space-y-3 pl-9">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedLocation === 'remote' ? 'border-blue-500' : 'border-gray-500'
                      }`}
                      onClick={() => setSelectedLocation(selectedLocation === 'remote' ? null : 'remote')}
                    >
                      {selectedLocation === 'remote' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-gray-400">Remote</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedLocation === 'in-person' ? 'border-blue-500' : 'border-gray-500'
                      }`}
                      onClick={() => setSelectedLocation(selectedLocation === 'in-person' ? null : 'in-person')}
                    >
                      {selectedLocation === 'in-person' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-gray-400">In person</span>
                  </label>
                </div>
              </div>

              {/* Job Type Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-gray-400" />
                  <h3 className="text-lg font-medium">Job type</h3>
                </div>
                <div className="space-y-3 pl-9">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedJobType === 'part-time' ? 'border-blue-500' : 'border-gray-500'
                      }`}
                      onClick={() => setSelectedJobType(selectedJobType === 'part-time' ? null : 'part-time')}
                    >
                      {selectedJobType === 'part-time' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-gray-400">Part time</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedJobType === 'full-time' ? 'border-blue-500' : 'border-gray-500'
                      }`}
                      onClick={() => setSelectedJobType(selectedJobType === 'full-time' ? null : 'full-time')}
                    >
                      {selectedJobType === 'full-time' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-gray-400">Full time</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div 
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedJobType === 'contractor' ? 'border-blue-500' : 'border-gray-500'
                      }`}
                      onClick={() => setSelectedJobType(selectedJobType === 'contractor' ? null : 'contractor')}
                    >
                      {selectedJobType === 'contractor' && (
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                    <span className="text-gray-400">Contractor</span>
                  </label>
                </div>
              </div>

              {/* Apply Button */}
              <button 
                onClick={() => setShowFilter(false)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-full transition"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

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
