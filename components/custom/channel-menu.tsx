import { useState } from "react";
import { X, Users, Globe, ChevronRight } from "lucide-react";
import {
  GitForkIcon,
  UsersThreeIcon,
  XCircleIcon,
} from "@phosphor-icons/react";

interface Community {
  id: string;
  name: string;
}

interface ChannelMenuProps {
  onClose?: () => void;
  internalCommunities?: Community[];
  publicCommunities?: Community[];
  onSelectCommunity?: (community: Community) => void;
}

const defaultInternal: Community[] = [
  { id: "1", name: "Beyond marketing internal" },
  { id: "2", name: "Benchmark internal" },
  { id: "3", name: "Utopia internal" },
];

const defaultPublic: Community[] = [
  { id: "4", name: "Beyond Ghana" },
  { id: "5", name: "Job board" },
];

export default function ChannelMenu({
  onClose,
  internalCommunities = defaultInternal,
  publicCommunities = defaultPublic,
  onSelectCommunity,
}: ChannelMenuProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen  text-white flex flex-col px-5 py-6 font-sans">
      <button
        onClick={onClose}
        className="w-7 h-7 rounded-full  cursor-pointer border-[#F8F9FA] flex items-center justify-center mb-8 hover:border-white/60 transition-colors"
        aria-label="Close menu"
      >
        <XCircleIcon
          size={20}
          weight="duotone"
          stroke-width={2}
          className="text-[#F8F9FA]"
        />
      </button>

      <div className="flex items-center gap-3 mb-6">
        <UsersThreeIcon
          size={24}
          className="text-white/80"
          weight="duotone"
          stroke-width={1.5}
        />
        <span className="text-base font-semibold tracking-wide">
          Your communities
        </span>
      </div>

      <div className="border-t border-[#4C5C6B] mb-5" />

      <section className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          <GitForkIcon size={24} className="-rotate-180" />
          <span className="text-sm font-bold tracking-wide">
            Internal Communities
          </span>
        </div>

        <ul>
          {internalCommunities.map((community) => (
            <li key={community.id}>
              <button
                className="w-full flex items-center justify-between py-2.5 px-1 text-sm text-[#9699A3] hover:text-white transition-colors group rounded"
                onMouseEnter={() => setHoveredId(community.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCommunity?.(community)}
              >
                <span>{community.name}</span>
                <ChevronRight
                  size={18}
                  className={`transition-transform duration-200 ${
                    hoveredId === community.id
                      ? "translate-x-0.5 text-white"
                      : "text-white/40"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-[#4C5C6B] mb-5" />

      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_495_809)">
              <path
                opacity="0.2"
                d="M15.0664 13.1496C14.9771 13.0952 14.8776 13.0597 14.7739 13.0455L12.6346 12.7568C12.4739 12.735 12.3105 12.7659 12.1689 12.8449C12.0272 12.9238 11.915 13.0465 11.8489 13.1946L10.5646 16.0765C10.5049 16.2106 10.4858 16.3592 10.5098 16.5041C10.5338 16.6489 10.5998 16.7835 10.6996 16.8912L12.5502 18.7971C12.6304 18.8833 12.6892 18.9873 12.7218 19.1005C12.7543 19.2137 12.7598 19.333 12.7377 19.4487L12.4405 20.9899C14.0082 20.9136 15.5287 20.4287 16.8511 19.5832C18.1735 18.7378 19.2518 17.5612 19.9789 16.1702L15.0664 13.1496Z"
                fill="#F5FCFF"
              />
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#F5FCFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.11377 11.5554L8.36252 9.37477C8.42844 9.26059 8.52329 9.16581 8.63752 9.09997C8.75174 9.03413 8.8813 8.99957 9.01314 8.99977H10.5797C10.7064 8.99997 10.831 8.96769 10.9416 8.90602L12.0938 8.27227C12.1445 8.24499 12.1914 8.21127 12.2335 8.17195L14.7572 5.89102C14.8828 5.77681 14.9659 5.62338 14.993 5.45582C15.02 5.28825 14.9895 5.11646 14.9063 4.96852L13.9219 3.20508"
                stroke="#F5FCFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.35431 4.99023L5.24993 7.60117C5.17534 7.77792 5.17131 7.97654 5.23869 8.15617L6.31681 11.0315C6.36111 11.149 6.43419 11.2534 6.52936 11.3353C6.62452 11.4172 6.73873 11.4739 6.8615 11.5002L8.87056 11.9324C8.98199 11.9563 9.08651 12.0053 9.17618 12.0756C9.26585 12.146 9.33831 12.2358 9.38806 12.3384L9.74431 13.0762C9.80576 13.2029 9.90167 13.3098 10.021 13.3846C10.1404 13.4594 10.2784 13.499 10.4193 13.499H11.7131"
                stroke="#F5FCFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                opacity="0.2"
                d="M7.11368 11.5556L8.36243 9.37501C8.42835 9.26083 8.52321 9.16605 8.63743 9.10021C8.75166 9.03438 8.88122 8.99982 9.01306 9.00001H10.5796C10.7063 9.00022 10.8309 8.96794 10.9415 8.90626L12.0937 8.27251C12.1444 8.24524 12.1913 8.21152 12.2334 8.1722L14.7571 5.89126C14.8827 5.77705 14.9658 5.62363 14.9929 5.45606C15.02 5.2885 14.9894 5.1167 14.9062 4.96876L13.9218 3.20532C13.2903 3.06854 12.646 2.99971 11.9999 3.00001C9.94558 2.99688 7.9525 3.69952 6.35431 4.99032L5.24993 7.60126C5.17534 7.77801 5.17131 7.97663 5.23869 8.15626L6.31681 11.0316C6.36111 11.1491 6.43419 11.2535 6.52936 11.3354C6.62452 11.4173 6.73873 11.474 6.8615 11.5003L7.11368 11.5556Z"
                fill="#F5FCFF"
              />
              <path
                d="M19.9771 16.1702L15.0664 13.1496C14.9771 13.0952 14.8776 13.0597 14.7739 13.0455L12.6346 12.7568C12.4739 12.735 12.3105 12.7659 12.1689 12.8449C12.0272 12.9238 11.915 13.0465 11.8489 13.1946L10.5646 16.0765C10.5049 16.2106 10.4858 16.3592 10.5098 16.5041C10.5338 16.6489 10.5998 16.7835 10.6996 16.8912L12.5502 18.7971C12.6304 18.8833 12.6892 18.9873 12.7218 19.1005C12.7543 19.2137 12.7598 19.333 12.7377 19.4487L12.4405 20.9899"
                stroke="#F5FCFF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_495_809">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <span className="text-sm font-bold tracking-wide">
            Public Communities
          </span>
        </div>

        <ul>
          {publicCommunities.map((community) => (
            <li key={community.id}>
              <button
                className="w-full flex items-center justify-between py-2.5 px-1 text-sm text-[#9699A3] hover:text-white transition-colors group rounded"
                onMouseEnter={() => setHoveredId(community.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCommunity?.(community)}
              >
                <span>{community.name}</span>
                <ChevronRight
                  size={14}
                  className={`transition-transform duration-200 ${
                    hoveredId === community.id
                      ? "translate-x-0.5 text-white"
                      : "text-[#9699A3]"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-[#4C5C6B] mt-5" />
    </div>
  );
}
