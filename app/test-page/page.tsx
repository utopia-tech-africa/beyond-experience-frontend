"use client";

import ChangePassword from "@/components/custom/change-password";
import ForgotPassword from "@/components/custom/forgot-password-otp";
import SplashScreen from "@/components/custom/splash-screen";

const Page = () => {
  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      {/* <ChangePassword /> */}
      {/* <SecondSplashScreen/> */}
      {/* <SplashScreen /> */}
      {/* <ForgotPassword/> */}
      <ChangePassword/>
    </div>
  );
};

export default Page;
