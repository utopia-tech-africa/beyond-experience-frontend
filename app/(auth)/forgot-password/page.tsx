"use client";

import TopBar from "@/components/custom/top-bar";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const [usePhone, setUsePhone] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (usePhone && !phone) {
      setError("Phone number is required");
      return;
    }
    if (!usePhone && !email) {
      setError("Email is required");
      return;
    }
    setError("");
    sessionStorage.setItem("forgotContact", usePhone ? phone : email);
    router.push("/forgot-password-otp");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 flex flex-col h-full px-4"
    >
      <TopBar title="FORGOT PASSWORD" />
      <p className="text-[#9CAAB8] text-sm">
        {usePhone
          ? "Please enter your phone number to receive a verification code"
          : "Please enter your email to receive a verification code"}
      </p>
      <div className="space-y-3">
        {usePhone ? (
          <Field>
            <FieldLabel className="text-white font-semibold">Phone</FieldLabel>
            <PhoneInput
              defaultCountry="GH"
              value={phone}
              onChange={(val) => setPhone(val as string)}
              className="phone-input flex items-center rounded-full border border-[#4C5C6B] h-12 px-4 bg-transparent"
            />
            {error && (
              <FieldError className="text-xs text-red-500">{error}</FieldError>
            )}
          </Field>
        ) : (
          <Field>
            <FieldLabel className="text-white font-semibold">Email</FieldLabel>
            <Input
              type="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-full border-[#4C5C6B] h-12 px-4 placeholder:text-gray-400"
            />
            {error && (
              <FieldError className="text-xs text-red-500">{error}</FieldError>
            )}
          </Field>
        )}
        <div className="text-center">
          <button
            type="button"
            onClick={() => {
              setUsePhone((v) => !v);
              setError("");
            }}
            className="text-sm text-[#417FB3] hover:underline"
          >
            {usePhone ? "Use email rather?" : "Use phone rather?"}
          </button>
        </div>
      </div>

      <div className="flex justify-end mt-auto">
        <button
          type="submit"
          className="w-full bg-[#0E2B77] hover:bg-blue-800 transition rounded-3xl py-3 text-white font-semibold mb-6"
        >
          Send
        </button>
      </div>
    </form>
  );
}
