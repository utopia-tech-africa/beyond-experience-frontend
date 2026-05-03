"use client";

import { useState, useSyncExternalStore } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import Vector from "@/components/custom/vector";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string>("");
  const phoneNumber = useSyncExternalStore(
    () => () => {},
    () => sessionStorage.getItem("phoneNumber") ?? "",
    () => "",
  );
  const router = useRouter();

  const handleVerify = () => {
    console.log("OTP:", otp);
    router.push("/profile-setup");
  };

  return (
    <div className="text-white px-6 lg:px-0">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 pb-12 pt-5 relative">
          <button onClick={() => router.back()}>
            <ArrowLeft size={30} className="cursor-pointer" />
          </button>

          <div className="flex justify-center">
            <Vector />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-9.5 tracking-wide uppercase">
          Enter the code
        </h1>
        <div className="">
          <p className="text-[#F8F9FA] text-sm mb-6">
            We sent a code to{" "}
            <span className="text-white font-semibold">{phoneNumber}</span>
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
        </div>
        <div className="text-right mt-3 mb-8">
          <button className="text-sm text-[#417FB3] hover:underline">
            Resend code
          </button>
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.length < 4}
          className="w-full bg-[#0E2B77] hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition rounded-full py-3.5 font-semibold text-base"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
