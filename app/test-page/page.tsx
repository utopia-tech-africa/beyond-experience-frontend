"use client";

import ChangePassword from "@/components/custom/change-password";
import ChannelMenu from "@/components/custom/channel-menu";
import ForgotPassword from "@/components/custom/forgot-password-otp";
import SideMenu from "@/components/custom/side-menu";
import SplashScreen from "@/components/custom/splash-screen";

const Page = () => {
  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      <ChannelMenu/>
    </div>
  );
};

export default Page;
