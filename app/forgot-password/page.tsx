"use client";

import TopBar from "@/components/custom/top-bar";
import CustomInput from "@/components/ui/custom-input";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Enter a valid email address"),
});

type FormData = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Reset email:", data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 flex flex-col h-full px-4"
    >
      <TopBar title="FORGOT PASSWORD" />
      <p className="text-[#9CAAB8] text-sm">
        Please enter your email to receive a verification code
      </p>
      <div className="space-y-3">
        <CustomInput
          label="Email"
          placeholder="johndoe@email.com"
          type="email"
          errorMessage={errors.email?.message}
          {...register("email")}
        />
        <div className="text-center">
          <Link
            href="/changePassword"
            className="text-sm text-[#417FB3] hover:underline"
          >
            Use phone rather?
          </Link>
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
