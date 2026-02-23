"use client";

import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

type CustomSelectProps = {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export default function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select option",
}: CustomSelectProps) {
  return (
    <div className="space-y-2 text-white cursor-pointer">
      {label && <Label>{label}</Label>}

      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="rounded-full border-[#4C5C6B] w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent
          className="z-50  bg-[#0F172A] text-white cursor-pointer
    border border-[#4C5C6B]
    rounded-xl
    shadow-xl
    p-1"
        >
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
