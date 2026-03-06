import { useState } from "react";
import { X, Users, Globe, ChevronRight } from "lucide-react";
import { GitForkIcon, UsersThreeIcon, XCircleIcon } from "@phosphor-icons/react";

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
    <div className="w-72 min-h-screen bg-[#0d1b2a] text-white flex flex-col px-5 py-6 font-sans">
      {/* Close button */}
      <button
        onClick={onClose}
        className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center mb-8 hover:border-white/60 transition-colors"
        aria-label="Close menu"
      >
       <XCircleIcon size={20} weight="duotone" strokeWidth={2} className="text-[#F8F9FA]" /> 
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
      <UsersThreeIcon size={24} className="text-white/80"  weight="duotone" strokeWidth={1.5}/> 
        <span className="text-base font-semibold tracking-wide">Your communities</span>
      </div>

      <div className="border-t border-white/10 mb-5" />

      {/* Internal Communities */}
      <section className="mb-6">
        <div className="flex items-center gap-2.5 mb-3">
          {/* Org icon */}
          <GitForkIcon size={24} className="-rotate-180" />
          <span className="text-sm font-bold tracking-wide">Internal Communities</span>
        </div>

        <ul>
          {internalCommunities.map((community) => (
            <li key={community.id}>
              <button
                className="w-full flex items-center justify-between py-2.5 px-1 text-sm text-white/70 hover:text-white transition-colors group rounded"
                onMouseEnter={() => setHoveredId(community.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCommunity?.(community)}
              >
                <span>{community.name}</span>
                <ChevronRight
                  size={14}
                  className={`transition-transform duration-200 ${
                    hoveredId === community.id ? "translate-x-0.5 text-white" : "text-white/40"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-white/10 mb-5" />

      {/* Public Communities */}
      <section>
        <div className="flex items-center gap-2.5 mb-3">
          <Globe size={20} className="text-white/80" strokeWidth={1.5} />
          <span className="text-sm font-bold tracking-wide">Public Communities</span>
        </div>

        <ul>
          {publicCommunities.map((community) => (
            <li key={community.id}>
              <button
                className="w-full flex items-center justify-between py-2.5 px-1 text-sm text-white/70 hover:text-white transition-colors group rounded"
                onMouseEnter={() => setHoveredId(community.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => onSelectCommunity?.(community)}
              >
                <span>{community.name}</span>
                <ChevronRight
                  size={14}
                  className={`transition-transform duration-200 ${
                    hoveredId === community.id ? "translate-x-0.5 text-white" : "text-white/40"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="border-t border-white/10 mt-5" />
    </div>
  );
}