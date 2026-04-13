"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Upload } from "lucide-react";
import { use, useState } from "react";

export default function JobApplication({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phone: ""
  });
  const [resume, setResume] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData, resume);
    // You can add API call here to submit the application
    alert("Application submitted successfully!");
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="w-full max-w-md mx-auto relative">

       

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

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-5 pb-32">
          {/* First Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Maxwell"
              required
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Last Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Attoh"
              required
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Middle Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Middle name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleInputChange}
              placeholder="Attoh"
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="maxattoh@gmail.com"
              required
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+233 59 595 5959"
              required
              className="w-full bg-transparent border border-gray-600 rounded-full px-6 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          {/* Upload Resume */}
          <div className="mb-8">
            <label htmlFor="resume" className="block w-full">
              <div className="border-2 border-blue-600 rounded-full px-6 py-3.5 flex items-center justify-center gap-3 cursor-pointer hover:bg-blue-600/10 transition">
                <Upload className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-white">
                  {resume ? resume.name : "Upload resume"}
                </span>
              </div>
              <input
                id="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            {resume && (
              <p className="text-xs text-gray-400 mt-2 text-center">
                Selected: {resume.name}
              </p>
            )}
          </div>
        </form>

        {/* Submit Button - Fixed at bottom */}
        <div className="fixed bottom-0 left-0 right-0 bg-[#0a0f1a] px-5 py-4">
          <div className="max-w-md mx-auto">
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-full transition"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
