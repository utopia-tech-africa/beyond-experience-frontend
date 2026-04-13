"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Camera, Image as ImageIcon, X } from "lucide-react";

export default function EditProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [showImageOptions, setShowImageOptions] = useState(false);
  const [profileImage, setProfileImage] = useState("https://i.pravatar.cc/150?img=12");
  const [name, setName] = useState("MAXWELL ATTOH");
  const [email, setEmail] = useState("max911@email.com");
  const [bio, setBio] = useState("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    setShowImageOptions(false);
  };

  const handleSave = () => {
    // Save profile logic here
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <div className="w-full max-w-md mx-auto relative">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-[#0a0f1a] flex items-center justify-between px-5 py-4">
          <button onClick={() => router.back()}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="font-bold text-lg">Edit Profile</h1>
          <button 
            onClick={handleSave}
            className="text-blue-500 font-semibold"
          >
            Save
          </button>
        </div>

        {/* Profile Image Section */}
        <div className="flex flex-col items-center py-8 px-5">
          <div className="relative mb-4">
            <div className="w-32 h-32 rounded-full overflow-hidden">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <button
              onClick={() => setShowImageOptions(true)}
              className="absolute bottom-0 right-0 bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <button 
            onClick={() => setShowImageOptions(true)}
            className="text-blue-500 text-sm font-medium"
          >
            Change profile photo
          </button>
        </div>

        {/* Form Fields */}
        <div className="px-5 space-y-6">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Tell us about yourself..."
              rows={4}
              className="w-full bg-[#1a2332] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition resize-none"
            />
          </div>
        </div>

        {/* Hidden file inputs */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageSelect}
          className="hidden"
        />

        {/* Image Options Modal */}
        {showImageOptions && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-end">
            <div className="w-full bg-[#1a2332] rounded-t-3xl p-6 animate-slide-up">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">Change Profile Photo</h3>
                <button onClick={() => setShowImageOptions(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => cameraInputRef.current?.click()}
                  className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-4 flex items-center justify-center gap-3 transition"
                >
                  <Camera className="w-5 h-5" />
                  <span className="font-medium">Take Photo</span>
                </button>
                
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-[#0a0f1a] hover:bg-[#0f1621] border border-gray-700 rounded-lg py-4 flex items-center justify-center gap-3 transition"
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="font-medium">Choose from Gallery</span>
                </button>
                
                <button
                  onClick={() => setShowImageOptions(false)}
                  className="w-full bg-transparent hover:bg-[#0a0f1a] rounded-lg py-4 text-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
