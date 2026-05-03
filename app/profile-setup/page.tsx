"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Vector from "@/components/custom/vector";
import { DatePickerField, InputField, SelectField } from "@/components/custom/controlled-form-fields";
import { SelectItem } from "@/components/ui/select";

const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  username: z.string().min(1, "Username is required"),
  gender: z.string().min(1, "Gender is required"),
  dateOfBirth: z.date({ error: "Date of birth is required" }),
  email: z.email("Invalid email address"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function ProfileSetupPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: { name: "", username: "", gender: "", email: "" },
  });

  return (
    <div className="h-full text-white flex justify-center">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-8">
          <Vector />
        </div>

        <h1 className="text-center font-bold mb-8 tracking-wide">
          FINISH SETTING UP YOUR ACCOUNT
        </h1>

        <div className="flex justify-center mb-8 relative">
          <div className="relative">
            <Image
              src="/Profile1.jpg"
              alt="profile"
              width={120}
              height={120}
              className="relative z-10 rounded-full object-cover border-2 border-gray-600"
            />

            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-2 right-2 bg-pink-300 p-2 rounded-full z-20"
            >
              <Camera size={16} className="text-red-700" />
            </button>

            <input ref={fileRef} type="file" className="hidden" accept="image/*" />
          </div>
        </div>

        <form onSubmit={form.handleSubmit(() => router.push("/home-news/news"))}>
          <div className="space-y-4">
            <InputField name="name" form={form} label="Name" placeholder="Maxwell Attoh" />
            <InputField name="username" form={form} label="Username" placeholder="@max360" />
            <SelectField name="gender" form={form} label="Gender" placeholder="Select gender">
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectField>
            <DatePickerField name="dateOfBirth" form={form} label="Date of Birth" placeholder="07 September, 2000" />
            <InputField name="email" form={form} label="Email" placeholder="johndoe@email.com" type="email" />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition rounded-full py-3 font-semibold mt-4 mb-10"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
