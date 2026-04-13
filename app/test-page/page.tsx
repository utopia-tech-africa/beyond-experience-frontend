"use client";

import ChangePassword from "@/components/custom/change-password";
import ChannelMenu from "@/components/custom/channel-menu";
import ForgotPassword from "@/components/custom/forgot-password-otp";
import SecondSplashScreen from "@/components/custom/second-splash-screen";
import SideMenu from "@/components/custom/side-menu";
import SplashScreen from "@/components/custom/splash-screen";
import { Splash } from "next/font/google";

const Page = () => {
  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      <ChannelMenu />
      <ChangePassword />
      <SplashScreen />
      <SecondSplashScreen />
    </div>
  );
};

export default Page;
