"use client";
import TopBar from "@/components/custom/top-bar";
import { InputField } from "@/components/custom/controlled-form-fields";
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
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col h-full font-bold px-4 pt-5"
    >
      <TopBar title="CHANGE PASSWORD" />
      <div className="mt-6 space-y-4 text-white">
        <InputField
          name="oldPassword"
          form={form}
          type="password"
          label="Old password"
          placeholder="*********"
        />
        <InputField
          name="newPassword"
          form={form}
          type="password"
          label="New password"
          placeholder="*********"
        />
        <InputField
          name="confirmNewPassword"
          form={form}
          type="password"
          label="Confirm new password"
          placeholder="*********"
        />
      </div>
      <div className="flex justify-end mt-auto mb-6.5">
        <button
          type="submit"
          className="text-white bg-[#0E2B77] w-full rounded-full px-6 py-2.5 cursor-pointer hover:bg-[#0A1F5B] transition-colors duration-300"
        >
          Change password
        </button>
      </div>
    </form>
  );
}
