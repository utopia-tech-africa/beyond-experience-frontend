"use client";
import { Camera } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ImagePicker = () => {
  const [image, setImage] = useState("");
  return (
    <div className="flex items-center justify-center">
      <div className="bg-red-600 h-[131.64px] w-[131.64px] rounded-[65.82px] border relative border-neutral-100 ">
        <div className="h-8.25 w-8.25 rounded-full flex items-center justify-center border absolute right-1 bottom-1 bg-red-100 border-red-500 z-99">
          {" "}
          <Camera className="text-red-500" />
          <input
            type="file"
            className="opacity-0 absolute inset-0 cursor-pointer"
            onChange={(e) => {
              console.log(e.target.files);
              if (!e.target.files) return;
              const imageUrl = URL.createObjectURL(e.target.files[0]);
              setImage(imageUrl);
            }}
          />
        </div>
        <Image
          src={image || "/images/profile-avatar.jpg"}
          alt="Profile Picture"
          fill
          className="rounded-[65.82px]"
        />
      </div>
    </div>
  );
};

export default ImagePicker;
