"use client";

import React, { useRef, useState } from "react";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getWeekDays(referenceDate: Date) {
  const day = referenceDate.getDay();
  const startOfWeek = new Date(referenceDate);
  startOfWeek.setDate(referenceDate.getDate() - day);

  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startOfWeek);
    d.setDate(startOfWeek.getDate() + i);
    return { label: DAYS[i], date: d.getDate(), fullDate: d };
  });
}

const WeekDaysStrip = ({
  referenceDate = new Date(),
  onSelectDate,
}: {
  referenceDate?: Date;
  onSelectDate?: (date: Date) => void;
}) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const weekDays = getWeekDays(referenceDate);

  const handleSelect = (fullDate: Date) => {
    setSelectedDate(fullDate);
    onSelectDate?.(fullDate);
  };

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex"
        style={
          {
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          } as React.CSSProperties
        }
      >
        <style>{`.week-strip::-webkit-scrollbar { display: none; }`}</style>

        {weekDays.map(({ label, date, fullDate }) => {
          const normalizedFull = new Date(fullDate);
          normalizedFull.setHours(0, 0, 0, 0);
          const isActive = normalizedFull.getTime() === selectedDate.getTime();

          return (
            <button
              key={label + date}
              onClick={() => handleSelect(normalizedFull)}
              className="flex flex-col items-center gap-1 shrink-0 focus:outline-none py-1"
              style={{
                width: "calc(100% / 5)",
                scrollSnapAlign: "start",
                padding: 0,
              }}
            >
              <span
                className="tracking-widest transition-colors duration-200 week-strip-label"
                style={{
                  fontSize: "32px",
                  lineHeight: 1,
                  color: isActive ? "#0074E5" : "rgba(160, 165, 180, 0.75)",
                }}
              >
                {label}
              </span>

              <span
                className="transition-colors duration-200 week-strip-date"
                style={{
                  fontSize: "32px",
                  lineHeight: 1,
                  color: isActive ? "#0074E5" : "rgba(130, 138, 160, 0.8)",
                }}
              >
                {date}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default WeekDaysStrip;
