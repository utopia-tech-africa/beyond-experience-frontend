"use client"
import * as React from "react"
import { format } from "date-fns"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Label } from "@/components/ui/label"

interface DatePickerProps {
  label?: string
  errorMessage?: string
  placeholder?: string
  defaultDate?: Date
}

export function DatePicker({
  label,
  errorMessage,
  placeholder = "Pick a date",
  defaultDate,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(defaultDate)

  return (
    <div className="space-y-2 relative">
      {label && (
        <Label className="text-white font-semiboldtext-base">{label}</Label>
      )}
      <div className="relative w-full">
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-between text-left font-normal rounded-full border-[#4C5C6B] hover:bg-[#111827] text-white px-5 h-12",
                  !date && "text-muted-foreground"
                )}
              >
                {date ? format(date, "dd MMMM, yyyy") : <span>{placeholder}</span>}
                <ChevronDown className="h-6 w-6 text-muted-foreground border border-[#4C5C6B] rounded-full p-0.5 shrink-0" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto bg-[#0F172A] text-white p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                captionLayout="dropdown-buttons"
                fromYear={1990}
                toYear={2030}
                initialFocus
                classNames={{
                  caption_dropdowns: "flex gap-2",
                  dropdown:
                    "bg-background border border-[#4C5C6B] rounded-md text-sm px-2 py-1 cursor-pointer focus:outline-none",
                  dropdown_month: "flex-1",
                  dropdown_year: "flex-1",
                  caption_label: "hidden",
                }}
              />
            </PopoverContent>
          </Popover>
          {errorMessage && (
            <p className="text-red-500 text-xs">{errorMessage}</p>
          )}
        </div>
      </div>
    </div>
  )
}