"use client";
import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import TopBar from "@/components/custom/top-bar";

const Page = () => {
  return (
    <div className="space-y-6 px-4 flex flex-col h-full">
      <TopBar title="FORGOT PASSWORD" />
      <p className="text-white text-sm">We sent a code to maxwell@gmail.com</p>
      <InputOTP maxLength={4}>
        <InputOTPGroup className="space-x-[27.85px] text-white grid grid-cols-4  w-full gap-x-[27.85px]">
          <InputOTPSlot
            className="rounded-md border-accent border border-[#4C5C6B] font-semibold shadow-none h-15  w-[64.86px]"
            index={0}
          />
          <InputOTPSlot
            className="rounded-md border-accent border border-[#4C5C6B] font-semibold shadow-none h-15 w-[64.86px] "
            index={1}
          />
          <InputOTPSlot
            className="rounded-md border-accent border border-[#4C5C6B] font-semibold shadow-none h-15 w-[64.86px] "
            index={2}
          />
          <InputOTPSlot
            className="rounded-md border-accent border border-[#4C5C6B] font-semibold shadow-none h-15 w-[64.86px] "
            index={3}
          />
        </InputOTPGroup>
      </InputOTP>
<p className="text-[#417FB3] flex justify-end">Resend code</p>
      <button className="text-white bg-[#0E2B77] w-full rounded-full py-3 mt-auto mb-11.5">
        Veirfy OTP
      </button>
    </div>
  );
};

export default Page;
