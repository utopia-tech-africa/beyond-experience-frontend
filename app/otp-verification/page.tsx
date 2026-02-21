"use client";

import { useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VerifyOtpPage() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join("");
    console.log("OTP:", code);
    // verify OTP logic here
  };

  return (
    <div className="min-h-screen  text-white flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="flex items-center mb-10">
          <Link href="/" className="mr-4">
            <ArrowLeft size={26} />
          </Link>
         
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-2 tracking-wide">
          ENTER THE CODE
        </h1>
        <p className="text-gray-400 text-sm mb-8">
          We sent a code to{" "}
          <span className="text-white">+233 50 433 4535</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-between mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-14 h-14 text-center text-xl rounded-xl bg-transparent border border-gray-600 focus:border-blue-500 outline-none"
            />
          ))}
        </div>

        {/* Resend */}
        <div className="text-right mb-8">
          <button className="text-sm text-blue-500 hover:underline">
            Resend code
          </button>
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-3xl py-3 font-semibold"
        >
          Verify OTP
        </button>
      </div>
    </div>
  );
}
