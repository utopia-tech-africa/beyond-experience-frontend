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

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();

  const handleVerify = () => {
    console.log("OTP:", otp);
    router.push("/profile-setup");
  };

  return (
    <div className="min-h-screen bg-[#05080f] text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="flex items-center mb-10">
          <Link href="/" className="mr-4">
            <ArrowLeft size={26} />
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-2 tracking-wide uppercase">
          Enter the code
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          We sent a code to{" "}
          <span className="text-white font-semibold">+233 50 433 4535</span>
        </p>

        <InputOTP
          maxLength={4}
          value={otp}
          onChange={setOtp}
          containerClassName="w-full"
        >
          <InputOTPGroup className="w-full justify-between gap-3">
            {[0, 1, 2, 3].map((index) => (
              <InputOTPSlot
                key={index}
                index={index}
                className="
                  flex-1 h-16 text-xl font-semibold rounded-xl
                  bg-[#0d1117] border border-gray-700
                  data-[active=true]:border-blue-500
                  data-[active=true]:ring-2 data-[active=true]:ring-blue-500/30
                  first:rounded-xl first:border
                  last:rounded-xl last:border
                  text-white
                "
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <div className="text-right mt-3 mb-8">
          <button className="text-sm text-blue-500 hover:underline">
            Resend code
          </button>
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.length < 4}
          className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition rounded-3xl py-4 font-semibold text-base"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}