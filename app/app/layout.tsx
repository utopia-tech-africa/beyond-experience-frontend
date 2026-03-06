import BottomNav from "@/components/custom/bottom-nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-full">
      {children}
      <BottomNav />
    </div>
  );
};

export default layout;
