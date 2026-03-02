"use client";
import React from "react";
import TopBar from "./top-bar";
import CustomInput from "@/components/ui/custom-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Must be at least 8 characters long")
      .regex(/[0-9]/, "Must include a number")
      .regex(/[^a-zA-Z0-9]/, "Must include a special character"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full font-bold"
    >
      <TopBar title="CHANGE PASSWORD" />
      <div className="mt-6 space-y-4 text-white">
        <CustomInput
          type="password"
          label="New password"
          placeholder="*********"
          errorMessage={errors.newPassword?.message}
          {...register("newPassword")}
        />
        <CustomInput
          type="password"
          label="Confirm new password"
          placeholder="*********"
          errorMessage={errors.confirmNewPassword?.message}
          {...register("confirmNewPassword")}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-[#0E2B77] w-full rounded-full py-3 mt-auto mb-11.5 cursor-pointer hover:bg-[#0A1F5B] transition-colors duration-300"
      >
        Change password
      </button>
    </form>
  );
}