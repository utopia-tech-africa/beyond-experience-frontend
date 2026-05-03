"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Vector from "@/components/custom/vector";
import { InputField } from "@/components/custom/controlled-form-fields";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

export default function CreateAccountPage() {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    //route to phone-verification page
    router.push("/phone-verification");
  };

  return (
    <div className="text-white h-full pb-16 px-6 lg:px-0 flex flex-col">
      <div className="grid grid-cols-3 pb-12 pt-5 relative">
        <Link href="/">
          <ArrowLeft size={30} className="cursor-pointer" />
        </Link>

        <div className="flex justify-center">
          <Vector />
        </div>
      </div>
      <div className="w-full flex flex-col justify-evenly flex-1">
        <h1 className="text-3xl font-bold tracking-wide">CREATE ACCOUNT</h1>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <InputField
            name="email"
            form={form}
            label="Email"
            type="email"
            placeholder="john@email.com"
          />
          <InputField
            name="password"
            form={form}
            label="Create password"
            type="password"
            placeholder="••••••••"
          />
          <InputField
            name="confirmPassword"
            form={form}
            label="Confirm password"
            type="password"
            placeholder="••••••••"
          />
          <button
            type="submit"
            className="bg-[#0E2B77] text-white py-3 rounded-3xl font-semibold text-base w-full"
          >
            Create account
          </button>
        </form>
        <div className="space-y-4">
          {/* <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-700" />
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700" />
          </div> */}

          <Link
            href="/api/auth/apple"
            role="button"
            aria-label="Sign up with Apple"
            className="w-full  bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/apple.svg" alt="apple" width={20} height={20} />
            <span>Sign up with Apple</span>
          </Link>
          <Link
            href="/api/auth/google"
            role="button"
            aria-label="Sign up with Google"
            className="w-full  bg-gray-800 rounded-3xl py-3 flex items-center justify-center gap-3 hover:bg-gray-700 transition"
          >
            <Image src="/google.svg" alt="google" width={20} height={20} />
            <span>Sign up with Google</span>
          </Link>
          <p className="text-center text-sm text-gray-400 ">
            Already a member?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
