"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Clock,
  CaretDown,
  AlignLeft,
  Tag,
} from "@phosphor-icons/react";
import CustomInput from "@/components/ui/custom-input";
import { DatePicker } from "@/components/custom/date-picker";

type TicketType = "Ticketed" | "Free";

export default function Page() {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [ticketType, setTicketType] = useState<TicketType | "">("");
  const [ticketDropdownOpen, setTicketDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center relative px-5 pt-14 pb-5">
        <button className="absolute left-5 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
          <ArrowLeft size={20} weight="bold" className="text-white" />
        </button>
        <h1 className="text-lg font-bold tracking-[0.15em] uppercase text-white">
          New Job
        </h1>
      </div>

      {/* Form */}
      <div className="flex-1 px-5 pb-10 flex flex-col gap-5 overflow-y-auto">
        {/* Event Name */}
        <CustomInput
          label="Event Name:"
          placeholder="Enter event name"
          type="text"
          defaultValue="Fifa Club World Cup Viewing"
        />

        {/* Location */}
        <CustomInput
          label="Location:"
          placeholder="Enter location"
          type="text"
          defaultValue="Accra...."
        />

        {/* Date */}
        <DatePicker label="Date:" placeholder="Choose date" />

        {/* Time */}
        <div className="space-y-2">
          <label className="text-white font-semibold text-base">Time:</label>
          <div className="flex items-center gap-3">
            {/* Start Time */}
            <div className="flex items-center gap-2 border border-[#4C5C6B] px-4 h-12 flex-1">
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="08:00 pm"
                className="bg-transparent text-white text-sm font-medium flex-1 outline-none placeholder:text-white/30 min-w-0"
              />
            </div>

            <span className="text-white/40 font-light text-lg">–</span>

            {/* End Time */}
            <div className="flex items-center gap-2 border border-[#4C5C6B] px-4 h-12 flex-1">
            ``  <input
                type="text"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="12:00 am"
                className="bg-transparent text-white text-sm font-medium flex-1 outline-none placeholder:text-white/30 min-w-0"
              />
            </div>
          </div>
        </div>

        {/* Event Description */}
        <div className="space-y-2">
          <label className="text-white font-semibold text-base">
            Event description:
          </label>
          <div className="flex gap-3 border border-[#4C5C6B] rounded-2xl px-5 py-3.5">
            <AlignLeft size={18} className="text-white/40 shrink-0 mt-0.5" />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the event.."
              rows={5}
              className="bg-transparent text-white/70 placeholder-white/30 text-sm flex-1 outline-none resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Ticketed / Free */}
        <div className="space-y-2 relative">
          <label className="text-white font-semibold text-base">
            Ticket Type:
          </label>
          <button
            type="button"
            onClick={() => setTicketDropdownOpen((v) => !v)}
            className="flex items-center gap-3 border border-[#4C5C6B] rounded-full px-5 h-12 w-full text-left hover:bg-white/5 transition-colors"
          >
            <Tag size={18} className="text-white/40 shrink-0" />
            <span
              className={`flex-1 text-sm ${ticketType ? "text-white" : "text-muted-foreground"}`}
            >
              {ticketType || "Ticketed/Free"}
            </span>
            <CaretDown
              size={16}
              className={`text-muted-foreground border border-[#4C5C6B] rounded-full p-0.5 transition-transform duration-200 ${ticketDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {ticketDropdownOpen && (
            <div className="absolute top-full mt-1 left-0 right-0 bg-[#0F172A] border border-[#4C5C6B] rounded-2xl overflow-hidden z-10 shadow-xl">
              {(["Ticketed", "Free"] as TicketType[]).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setTicketType(option);
                    setTicketDropdownOpen(false);
                  }}
                  className="w-full text-left px-5 py-3 text-sm text-white/70 hover:bg-white/10 transition-colors flex items-center gap-3"
                >
                  <Tag size={16} className="text-white/30" />
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Share Button */}
      <div className="px-5 pb-10 pt-2">
        <button
          type="button"
          className="w-full bg-[#2850e8] hover:bg-[#3560f5] active:bg-[#1e40d4] transition-colors text-white font-semibold text-base rounded-full py-4 tracking-wide shadow-lg shadow-blue-900/40"
        >
          Share
        </button>
      </div>
    </div>
  );
}
