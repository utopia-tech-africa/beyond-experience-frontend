"use client";

import { Splash } from "next/font/google";
import SplashScreen from "../components/splash-screen";
import SecondSplashScreen from "../components/second-splash-screen";


const Page = () => {

  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      {/* <ChangePassword /> */}
   <SplashScreen/>
   {/* <SecondSplashScreen/> */}

    </div>
  );
};

export default Page;
