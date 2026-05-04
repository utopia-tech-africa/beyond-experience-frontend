"use client";

import { useState, useSyncExternalStore } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import TopBar from "@/components/custom/top-bar";

const Page = () => {
  const [otp, setOtp] = useState("");
  const contact = useSyncExternalStore(
    () => () => {},
    () => sessionStorage.getItem("forgotContact") ?? "",
    () => "",
  );

  return (
    <div className="space-y-6 px-4 flex flex-col h-full pt-5">
      <TopBar title="FORGOT PASSWORD" />
      <p className="text-white text-sm">
        We sent a code to <span className="font-semibold">{contact}</span>
      </p>
      <InputOTP maxLength={4} value={otp} onChange={setOtp}>
        <InputOTPGroup className="flex w-full gap-6.75 text-white">
          <InputOTPSlot
            className="rounded-md border border-[#4C5C6B] font-semibold shadow-none h-15 flex-1 min-w-0"
            index={0}
          />
          <InputOTPSlot
            className="rounded-md border border-[#4C5C6B] font-semibold shadow-none h-15 flex-1 min-w-0"
            index={1}
          />
          <InputOTPSlot
            className="rounded-md border border-[#4C5C6B] font-semibold shadow-none h-15 flex-1 min-w-0"
            index={2}
          />
          <InputOTPSlot
            className="rounded-md border border-[#4C5C6B] font-semibold shadow-none h-15 flex-1 min-w-0"
            index={3}
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-[#417FB3] flex justify-end">Resend code</p>
      <button
        disabled={otp.length < 4}
        className="text-white bg-[#0E2B77] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition w-full rounded-full py-3 mt-auto mb-11.5"
      >
        Verify OTP
      </button>
    </div>
  );
};

export default Page;
