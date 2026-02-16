"use client";
import React from "react";
import TopBar from "../components/top-bar";
import CustomInput from "@/components/ui/custom-input";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const changePasswordSchema = z.object({
  oldPassword: z.string().min(8, "Password must be at least 8 characters long"),
  newPassword: z.string().min(8, "Password must be at least 8 characters long"),
  confirmNewPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long"),
});
export default function Page() {
  const form = useForm({
    resolver: zodResolver(changePasswordSchema),
  });
  console.log(form.formState.errors);
  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      <TopBar title="CHANGE PASSWORD" />
      <div className="space-y-4 text-white">
        <CustomInput type="password" label="Old password" {...form.register("oldPassword")} errorMessage={form.formState.errors.oldPassword?.message as string || ""}/>
        <CustomInput type="password" label="New password" {...form.register("newPassword")} errorMessage={form.formState.errors.newPassword?.message as string || ""}/>
        <CustomInput type="password" label="Confirm new password" {...form.register("confirmNewPassword")} errorMessage={form.formState.errors.confirmNewPassword?.message as string || ""}/>
      </div>
      <button className="text-white bg-[#0E2B77] w-full rounded-full py-3 mt-auto mb-11.5">
        Change password
      </button>
    </div>
  );
}
