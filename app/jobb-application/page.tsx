"use client";

import { useState } from "react";
import { ArrowLeft, AlignLeft, Plus } from "@phosphor-icons/react";
import CustomInput from "@/components/ui/custom-input";
import CustomSelect from "@/components/ui/custom-select";

export default function Page() {
  const [jobTitle, setJobTitle] = useState("");
  const [locations, setLocations] = useState([""]);
  const [jobType, setJobType] = useState("");
  const [salaryMin, setSalaryMin] = useState("");
  const [salaryMax, setSalaryMax] = useState("");
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const addLocation = () => setLocations((prev) => [...prev, ""]);

  const updateLocation = (index: number, value: string) => {
    setLocations((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  return (
    <div className="h-full text-white flex flex-col">
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
      <div className="flex-1 px-4 py-3 flex flex-col gap-2.5 overflow-y-auto">
        {/* Job Title */}
        <CustomInput
          label="Job title:"
          placeholder="Graphic designer..."
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        {/* Location(s) */}
        <div className="space-y-2">
          <label className="text-white font-semibold text-base">
            Location:
          </label>
          {locations.map((loc, i) => (
            <CustomInput
              key={i}
              placeholder="Accra...."
              type="text"
              value={loc}
              onChange={(e) => updateLocation(i, e.target.value)}
            />
          ))}
          <button
            type="button"
            onClick={addLocation}
            className="flex items-center gap-1.5 bg-[#0E2B77]  transition-colors text-white text-sm font-semibold px-4 py-2 rounded-full"
          >
            <Plus size={14} weight="bold" />
            Add
          </button>
        </div>

        {/* Job Type */}
        <CustomSelect
          label="Job type:"
          value={jobType}
          onChange={setJobType}
          options={[
            { value: "full-time", label: "Full-time" },
            { value: "part-time", label: "Part-time" },
            { value: "contract", label: "Contract" },
            { value: "internship", label: "Internship" },
            { value: "remote", label: "Remote" },
            { value: "hybrid", label: "Hybrid" },
          ]}
        />

        {/* Salary Range */}
        <div className="space-y-2">
          <label className="text-white font-semibold text-base">
            Salary range:
          </label>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-white/60 shrink-0">
              GHC
            </span>
            <CustomInput
              placeholder="Min"
              type="number"
              value={salaryMin}
              onChange={(e) => setSalaryMin(e.target.value)}
            />
            <span className="text-white/40 font-light text-lg shrink-0">-</span>
            <CustomInput
              placeholder="Max"
              type="number"
              value={salaryMax}
              onChange={(e) => setSalaryMax(e.target.value)}
            />
          </div>
        </div>

        {/* Job Description */}
        <div className="space-y-2">
          <label className="text-white font-semibold text-base">
            Job description:
          </label>
          <div className="flex gap-3 border border-[#4C5C6B] rounded-lg px-4 py-3">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the role.."
              rows={5}
              className="bg-transparent text-white/70 placeholder-white/30 text-sm flex-1 outline-none resize-none leading-relaxed"
            />
          </div>
        </div>

        {/* Responsibilities */}
        <div className="space-y-2 relative">
          <label className="text-white font-semibold text-base">
            Responsibilities:
          </label>
          <div className="flex gap-3 border border-[#4C5C6B] rounded-lg px-4 py-3">
            <textarea
              value={responsibilities}
              onChange={(e) => setResponsibilities(e.target.value)}
              placeholder="what will the applicant be responsible for?"
              rows={4}
              className="bg-transparent text-white/70 placeholder-white/30 text-sm flex-1 outline-none resize-none leading-relaxed"
            />
          </div>
          {/* Share Button */}
          <div className="px-3.5 w-full pb-8 pt-2.75 fixed bottom-0 left-0 right-0">
            <button
              type="button"
              className="w-full bg-[#0E2B77] active:bg-[#1e40d4] transition-colors text-white font-semibold text-base rounded-full px-6 py-3 gap-2.5 opacity-100 tracking-wide shadow-lg shadow-blue-900/40 flex items-center justify-center"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
