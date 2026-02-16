"use client";

import ChangePassword from "../components/changePassword";
import ForgotPassword from "../components/forgotPassword";


const Page = () => {

  return (
    <div className="space-y-6 flex flex-col h-full font-bold">
      <ChangePassword />
      {/* <ForgotPassword/> */}
    </div>
  );
};

export default Page;
