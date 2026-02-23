"use client";

import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function PhoneVerification() {
  const [phone, setPhone] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, #0d2137 0%, #000000 60%)",
      }}
    >
      <div className="w-full max-w-sm px-6 text-white">

        
        <div className="flex items-center mb-10">
          <button>
            <ArrowLeft className="w-5 h-5 text-gray-300" />
          </button>
          
        </div>
        <h1 className="text-3xl font-extrabold uppercase mb-8 tracking-tight">
          Verify Your Number
        </h1>
        <div className="space-y-2 mb-4">
          <label className="text-white font-medium">Phone:</label>
          <PhoneInput
            defaultCountry="GH"
            value={phone}
            onChange={(val) => setPhone(val as string)}
           
            className="flex items-center rounded-full border border-gray-500 px-4 py-3 bg-transparent"
            numberInputClass="bg-transparent text-white outline-none flex-1 ml-2"
          />
        </div>
        <button className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-full py-3 font-semibold text-white mt-2">
          Send code
        </button>
      </div>
    </div>
  );
}