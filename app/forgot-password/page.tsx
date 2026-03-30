"use client";

import TopBar from "@/components/custom/top-bar";
import CustomInput from "@/components/ui/custom-input";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Reset email:", email);
  };

  return (
    <div className="space-y-6 flex flex-col h-full">
      <TopBar title="FORGOT PASSWORD" />
      <p className="text-white text-sm">
        Please enter your email to receive a verification code
      </p>
      <CustomInput label="Email" placeholder="johndoe@email.com" />

      <div className="text-center mb-10">
        <Link
          href="/changePassword"
          className="text-sm text-blue-500 hover:underline"
        >
          Use phone rather?
        </Link>
      </div>

      <div className="flex-1"></div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-3xl py-3 text-white font-semibold mb-6"
      >
        Send
      </button>
    </div>
  );
}
