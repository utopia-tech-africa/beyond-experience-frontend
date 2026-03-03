import Image from "next/image";
import React from "react";

const SplashScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image width={307} height={252} src="/images/btl-logo.png" alt="Logo"/>
    </div>
  );
};

export default SplashScreen;
