import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { X, ChevronRight, Settings, ChevronDown, LogOut } from "lucide-react";
import { BellRingingIcon, UserIcon } from "@phosphor-icons/react";

interface ToggleProps {
  enabled: boolean;
  onChange: () => void;
}

const Toggle = ({ enabled, onChange }: ToggleProps) => (
  <button
    onClick={onChange}
    className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors duration-300 focus:outline-none ${
      enabled ? "bg-green-400" : "bg-gray-600"
    }`}
  >
    <span
      className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-transform duration-300 ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

export default function SideMenu() {
  const [allowNotifications, setAllowNotifications] = useState(false);
  const [forumNotifications, setForumNotifications] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <button
          onClick={() => setIsVisible(true)}
          className="px-6 py-3 bg-blue-700 text-white rounded-full font-semibold tracking-wide hover:bg-blue-600 transition-colors"
        >
          Open Menu
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-start justify-center h-full  ">
      <div className="relative w-85 flex flex-col h-full">
        <div className="flex justify-end pt-10 pr-5 ">
          <button
            onClick={() => setIsVisible(false)}
            className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.25 8.25001L8.25 13.25L13.25 8.25001ZM8.25 8.25001L13.25 13.25L8.25 8.25001ZM5.75 2.08801C7.26945 1.20874 8.99448 0.747119 10.75 0.750014C16.273 0.750014 20.75 5.22701 20.75 10.75C20.75 16.273 16.273 20.75 10.75 20.75C5.227 20.75 0.75 16.273 0.75 10.75C0.75 8.92901 1.237 7.22001 2.088 5.75001"
                fill="#D9D9D9"
                fillOpacity="0.25"
              />
              <path
                d="M13.25 8.25001L8.25 13.25M8.25 8.25001L13.25 13.25M5.75 2.08801C7.26945 1.20874 8.99448 0.747119 10.75 0.750014C16.273 0.750014 20.75 5.22701 20.75 10.75C20.75 16.273 16.273 20.75 10.75 20.75C5.227 20.75 0.75 16.273 0.75 10.75C0.75 8.92901 1.237 7.22001 2.088 5.75001"
                stroke="#F8F9FA"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4 px-6 pt-4 pb-6 ">
          <div className="relative">
            <Avatar className="w-14 h-14 ring-2 ring-blue-500/40">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-linear-to-br from-orange-400 to-red-500 text-white font-bold text-xl">
                M
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <h2 className="text-[#F8F9FA] text-2xl font-extrabold tracking-widest uppercase">
              Maxwell
            </h2>
            <p className="text-[#9699A3] text-sm mt-0.5">max911@email.com</p>
          </div>
        </div>

        <div className="px-6 pt-5  border-t border-[#4C5C6B]">
          <div className="flex items-center gap-3 mb-4">
            <UserIcon
              size={24}
              className="text-white"
              strokeWidth={2}
              weight="duotone"
            />
            <span className="text-white font-bold text-base tracking-wide">
              Account
            </span>
          </div>

          <MenuRow label="Edit profile" />
          <MenuRow label="Change password" />
        </div>

        <div className="px-6 pt-5   border-t border-[#4C5C6B]">
          <div className="flex items-center gap-3 mb-4">
            <BellRingingIcon
              className="text-[#F5FCFF]"
              size={24}
              weight="duotone"
            />

            <span className="text-white font-bold text-base tracking-wide">
              Notifications
            </span>
          </div>

          <div className="flex items-center justify-between py-2.5">
            <span className="text-gray-400 text-sm">Allow notifications</span>
            <Toggle
              enabled={allowNotifications}
              onChange={() => setAllowNotifications(!allowNotifications)}
            />
          </div>

          <div className="flex items-center justify-between py-2.5">
            <span className="text-gray-400 text-sm">Forum notifications</span>
            <Toggle
              enabled={forumNotifications}
              onChange={() => setForumNotifications(!forumNotifications)}
            />
          </div>
        </div>

        <div className="px-6 py-5 flex flex-col justify-between h-full  border-t border-[#4C5C6B]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Settings size={20} className="text-white" strokeWidth={2} />
              <span className="text-white font-bold text-base tracking-wide">
                Settings
              </span>
            </div>
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="w-full flex items-center justify-between py-2.5 text-gray-400 text-sm hover:text-gray-200 transition-colors"
            >
              <span>Language</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${languageOpen ? "rotate-180" : ""}`}
              />
            </button>

            {languageOpen && (
              <div className="mt-1 rounded-lg overflow-hidden border border-gray-700/50">
                {["English", "French"].map((lang) => (
                  <button
                    key={lang}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-400 hover:bg-white/5 hover:text-white transition-colors border-b border-gray-700/30 last:border-0"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="px-6">
            <button className="w-full flex items-center justify-center gap-3 bg-[#0E2B77]  text-white font-bold py-2.5 px-4 rounded-full tracking-widest text-sm  duration-200 shadow-lg shadow-blue-900/40">
              <span>Logout</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 12H2M2 12L5.5 9M2 12L5.5 15"
                  stroke="#F8F9FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.00195 7C9.01395 4.825 9.11095 3.647 9.87895 2.879C10.758 2 12.172 2 15 2H16C18.829 2 20.243 2 21.122 2.879C22 3.757 22 5.172 22 8V16C22 18.828 22 20.243 21.122 21.121C20.353 21.89 19.175 21.986 17 21.998M9.00195 17C9.01395 19.175 9.11095 20.353 9.87895 21.121C10.52 21.763 11.447 21.936 13 21.983"
                  stroke="#F8F9FA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuRow({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between py-3 text-gray-400 text-sm hover:text-gray-200 transition-colors group">
      <span>{label}</span>
      <ChevronRight
        size={18}
        className="text-[#9699A3] group-hover:text-gray-400 transition-colors"
      />
    </button>
  );
}
