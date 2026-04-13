"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Briefcase, DollarSign } from "lucide-react";
import { use } from "react";

export default function JobDetails({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  // Mock job data - in a real app, you'd fetch this based on id
  const job = {
    id: id,
    title: "KFC RED ARMY PROMOTERS NEEDED",
    applicants: 10,
    location: "Accra/Kumasi",
    jobType: "Part time",
    salary: "GHC 1k-2k",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    responsibility: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.",
    requiredSkills: [
      "Excellent communication skills",
      "Strong interpersonal abilities",
      "Knowledge of marketing strategies",
      "Ability to engage and motivate audiences"
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="w-full max-w-md mx-auto relative">
        
        {/* Status Bar */}
        {/* <div className="flex items-center justify-between px-5 pt-3 pb-2 bg-[#0a0f1a]">
          <span className="text-sm font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 bg-white rounded-sm"></div>
            <div className="w-4 h-3 bg-white rounded-sm"></div>
            <div className="w-4 h-3 bg-white rounded-sm"></div>
          </div>
        </div> */}

        {/* Header */}
        <div className="sticky top-0 z-30 bg-[#0a0f1a] px-5 py-4">
          <div className="flex items-center justify-center relative">
            <button 
              onClick={() => router.back()}
              className="absolute left-0 hover:opacity-70 transition"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="font-bold text-lg tracking-[0.2em]">JOB DETAILS</h1>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-32">
          {/* Job Title */}
          <h2 className="text-2xl font-bold mb-3 leading-tight">{job.title}</h2>
          
          {/* Applicants */}
          <p className="text-sm text-gray-400 mb-6">{job.applicants} people applied</p>

          {/* Job Info Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Location */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a2332] flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Location</p>
              <p className="text-sm font-medium">{job.location}</p>
            </div>

            {/* Job Type */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a2332] flex items-center justify-center mb-2">
                <Briefcase className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Job type</p>
              <p className="text-sm font-medium">{job.jobType}</p>
            </div>

            {/* Salary */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#1a2332] flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-xs text-gray-400 mb-1">Salary</p>
              <p className="text-sm font-medium">{job.salary}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Description</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {job.description}
            </p>
          </div>

          {/* Responsibility */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Responsibility</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {job.responsibility}
            </p>
          </div>

          {/* Required Skills */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Required skills</h3>
            <ul className="space-y-2">
              {job.requiredSkills.map((skill, index) => (
                <li key={index} className="text-sm text-gray-400 flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Apply Button - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a0f1a] px-5 py-4 border-t border-gray-800">
          <div className="max-w-md mx-auto">
            <button 
              onClick={() => router.push(`/job-board/${id}/apply`)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition"
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
