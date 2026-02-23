"use client";
import React from "react";
import TopBar from "@/components/custom/top-bar";
import CustomInput from "@/components/ui/custom-input";

export default function Page() {
  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      <TopBar title="CHANGE PASSWORD" />
      <div className="space-y-4 text-white">
        <CustomInput type="password" label="Old password" />
        <CustomInput type="password" label="New password" />
        <CustomInput type="password" label="Confirm new password" />
      </div>
      <button className="text-white bg-[#0E2B77] w-full rounded-full py-3 mt-auto mb-11.5">
        Change password
      </button>
    </div>
  );
}
