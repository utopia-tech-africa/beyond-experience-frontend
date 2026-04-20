"use client";

import { useState } from "react";
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
  const router = useRouter();

  const handleVerify = () => {
    console.log("OTP:", otp);
    router.push("/profile-setup");
  };

  return (
    <div className="text-white  px-6">
      <div className="flex flex-col">
        <div className="grid grid-cols-3 pb-12 pt-5  relative">
          <Link href="/" className="mr-4">
            <ArrowLeft size={26} />
          </Link>
          <Vector />
        </div>

        <h1 className="text-2xl font-bold mb-9.5 tracking-wide uppercase">
          Enter the code
        </h1>
        <div className="">
          <p className="text-[#F8F9FA] text-sm mb-6">
            We sent a code to{" "}
            <span className="text-white font-semibold">+233 50 433 4535</span>
          </p>

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
