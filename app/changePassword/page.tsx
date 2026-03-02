"use client";

import TopBar from "@/components/custom/top-bar";
import Link from "next/link";
import { useForm } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 1️⃣ Zod Schema
const schema = z.object({
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .refine((value) => isValidPhoneNumber(value), {
      message: "Enter a valid phone number",
    }),
});

type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordPhonePage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Valid phone:", data.phoneNumber);
    // send verification code logic
  };

  return (
    <div className="flex flex-col min-h-screen px-6 pt-6 text-white">
      <TopBar title="FORGOT PASSWORD" />

      <div className="mt-8 space-y-6 flex-1">
        {/* Phone Field */}
        <div className="space-y-2">
          <label className="text-sm">Phone</label>

          <PhoneInput
            defaultCountry="GH"
            international
            countryCallingCodeEditable={false}
            value={form.watch("phoneNumber")}
            onChange={(value) =>
              form.setValue("phoneNumber", value || "", {
                shouldValidate: true,
              })
            }
            numberInputProps={{
                className:
                  "w-full rounded-lg px-4 py-1.5 text-white outline-none bg-transparent",
              }}
              containerComponentProps={{
                className:
                  "rounded-full border-[#4C5C6B] border flex flex-row px-4",
              }}
              countrySelectProps={{
                className: "bg-[#0A253B]",
              }}
            className={`w-full rounded-full border px-4 py-3 bg-transparent ${
              form.formState.errors.phoneNumber
                ? "border-red-500"
                : "border-[#4C5C6B]"
            }`}
          />

          {/* Error Message */}
          {form.formState.errors.phoneNumber && (
            <p className="text-red-500 text-sm">
              {form.formState.errors.phoneNumber.message}
            </p>
          )}
        </div>

        {/* Use Email */}
        <div className="text-center">
          <Link
            href="/forgotPassword"
            className="text-sm text-blue-400 hover:underline"
          >
            Use email rather?
          </Link>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={form.handleSubmit(onSubmit)}
        className="w-full bg-blue-700  transition rounded-3xl py-3 font-semibold mb-6"
      >
        Send
      </button>
    </div>
  );
}
