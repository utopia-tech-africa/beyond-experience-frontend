"use client";

import { Input } from "./input";
import { Label } from "./label";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

export default function CustomInput({
  label,
  placeholder,
  type,
  errorMessage,
  ...props
}: React.ComponentProps<"input"> & { label?: string; errorMessage?: string }) {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="space-y-2 relative">
      {label && <Label className="text-white">{label}</Label>}

      <div className="relative w-full">
        <div className="space-y-2">
          <Input
            className="rounded-full border-[#4C5C6B]"
            placeholder={placeholder}
            type={inputType}
            {...props}
          />
          <p className={`${errorMessage && "text-red-500 text-xs"}`}>
            {errorMessage}
          </p>
        </div>

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
}
