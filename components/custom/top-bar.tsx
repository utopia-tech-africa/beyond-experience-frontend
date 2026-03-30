"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function TopBar({ title }: { title: string }) {
  const router = useRouter();
  return (
    <div className="py-3 topbar">
      <p className="text-white text-[26px] text-center relative">
        {" "}
        <ArrowLeft
          className="text-white absolute left-0 top-1/2 -translate-y-1/2"
          onClick={() => {
            router.back();
          }}
        />
        {title}
      </p>
    </div>
  );
}
