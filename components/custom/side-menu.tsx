import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { X, ChevronRight, Settings, ChevronDown, LogOut } from "lucide-react";
import { BellSimpleRingingIcon, UserIcon } from "@phosphor-icons/react";

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
  const [forumNotifications, setForumNotifications] = useState(true);
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
    <div className="flex items-start justify-center min-h-screen pt-10">
      {/* Panel */}
      <div
        className="relative w-85 flex flex-col"
        style={{ height: "calc(100vh - 40px)" }}
      >
        {/* Close button */}
        <div className="flex justify-end pt-10 pr-5">
          <button
            onClick={() => setIsVisible(false)}
            className="w-9 h-9 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-400 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-4 px-6 pt-4 pb-6">
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

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-[#676975] to-transparent mx-6" />

        {/* Account section */}
        <div className="px-6 pt-5">
          <div className="flex items-center gap-3 mb-4">
            <UserIcon size={24} className="text-white" strokeWidth={2} />
            <span className="text-white font-bold text-base tracking-wide">
              Account
            </span>
          </div>

          <MenuRow label="Edit profile" />
          <MenuRow label="Change password" />
        </div>

        {/* Divider */}
        <div className="h-px bg-[#676975] mx-6 mt-4" />

        {/* Notifications section */}
        <div className="px-6 pt-5">
          <div className="flex items-center gap-3 mb-4">
            <BellSimpleRingingIcon
              className="text-white"
              strokeWidth={2}
              size={24}
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

        {/* Divider */}
        <div className="h-px bg-[#676975] mx-6 mt-4" />

        {/* Settings section */}
        <div className="px-6 pt-5">
          <div className="flex items-center gap-3 mb-4">
            <Settings size={20} className="text-white" strokeWidth={2} />
            <span className="text-white font-bold text-base tracking-wide">
              Settings
            </span>
          </div>

          {/* Language dropdown */}
          <button
            onClick={() => setLanguageOpen(!languageOpen)}
            className="w-full flex items-center justify-between py-2.5 text-gray-400 text-sm hover:text-gray-200 transition-colors"
          >
            <span>Language</span>
            <ChevronDown
              size={16}
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Logout */}
        <div className="px-6 pb-10 pt-6">
          <button className="w-full flex items-center justify-center gap-3 bg-[#0E2B77] hover:bg-blue-600 active:bg-blue-800 text-white font-bold py-4 rounded-full tracking-widest uppercase text-sm transition-colors duration-200 shadow-lg shadow-blue-900/40">
            <span>Logout</span>
            <LogOut size={18} strokeWidth={2.5} />
          </button>
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
        size={16}
        className="text-gray-600 group-hover:text-gray-400 transition-colors"
      />
    </button>
  );
}