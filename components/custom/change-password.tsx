"use client";
import React from "react";
import TopBar from "@/components/custom/top-bar";
import CustomInput from "@/components/ui/custom-input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    oldPassword: z.string().min(1, "Old password is required"),
    newPassword: z
      .string()
      .min(8, "Must be at least 8 characters long")
      .regex(/[0-9]/, "Must include special numbers")
      .regex(/[^a-zA-Z0-9]/, "Must include special characters"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function Page() {
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
      className="flex flex-col h-full font-bold px-4"
    >
      <TopBar title="CHANGE PASSWORD" />
      <div className="mt-6 space-y-4 text-white">
        <CustomInput
          type="password"
          label="Old password"
          placeholder="*********"
          errorMessage={errors.oldPassword?.message}
          {...register("oldPassword")}
        />
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
      <div className="flex justify-end mt-auto mb-6.5">
        <button
          type="submit"
          className="text-white bg-[#0E2B77] w-full rounded-full  px-6 py-2.5  cursor-pointer hover:bg-[#0A1F5B] transition-colors duration-300"
        >
          Change password
        </button>
      </div>
    </form>
  );
}
