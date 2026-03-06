"use client";
import TopBar from "@/components/custom/top-bar";
import ImagePicker from "@/components/custom/image-picker";
import CustomInput from "@/components/ui/custom-input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import CustomSelect from "@/components/ui/custom-select";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  username: z.string().min(2, "Username must be at least 2 characters long"),
  email: z.string().email("Enter a valid email address"),
  gender: z.enum(["male", "female"], {
    error: "Please select a gender",
  }),
  phoneNumber: z.string().min(7, "Enter a valid phone number"),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

export default function Page() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      gender: undefined as unknown as "male" | "female",
      phoneNumber: "",
    },
  });

  return (
    <div className="space-y-6 px-6 py-2 flex flex-col h-full">
      <TopBar title="PROFILE" />
      <ImagePicker />
      <form
        id="profile-form"
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="space-y-4 text-white">
          <CustomInput
            label="Name"
            placeholder="Maxwell Attoh"
            {...form.register("name")}
            errorMessage={form.formState.errors.name?.message}
          />
          <CustomInput
            label="Username"
            placeholder="@max360"
            {...form.register("username")}
            errorMessage={form.formState.errors.username?.message}
          />
          <CustomInput
            label="Email"
            placeholder="johndoe@email.com"
            {...form.register("email")}
            errorMessage={form.formState.errors.email?.message}
          />
          <CustomSelect
            label="Gender"
            value={form.watch("gender")}
            onChange={(e) => {
              form.setValue("gender", e as "male" | "female", {
                shouldValidate: true,
              });
            }}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
            errorMessage={form.formState.errors.gender?.message}
          />
          <div className="space-y-2">
            <label className="text-white">Phone Number</label>
            <PhoneInput
              placeholder="Enter phone number"
              value={form.watch("phoneNumber")}
              onChange={(e) => {
                form.setValue("phoneNumber", e as string, {
                  shouldValidate: true,
                });
              }}
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
            />
            {form.formState.errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">
                {form.formState.errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
      </form>
      <button
        className="text-white bg-[#0E2B77] w-full rounded-full py-3 mt-auto mb-11.5"
        form="profile-form"
      >
        Save
      </button>
    </div>
  );
}
