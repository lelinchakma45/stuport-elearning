"use client";

import { useState } from "react";
import { LayoutGrid, MessageSquare, PanelsTopLeft, StickyNote } from "lucide-react";
import NotesList from "./NotesList";

const tabs = [
  { id: "overview", label: "Overview", icon: LayoutGrid, count: undefined },
  { id: "files", label: "Files", icon: PanelsTopLeft, count: 1 },
  { id: "notes", label: "Notes", icon: StickyNote, count: 2 },
  { id: "comments", label: "Comments", icon: MessageSquare, count: 6 },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function LessonTabs() {
  const [active, setActive] = useState<TabId>("notes");

  return (
    <div className="mt-5">
      <div className="flex items-center gap-5 overflow-x-auto border-b border-black/5">
        {tabs.map(({ id, label, icon: Icon, count }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`relative flex shrink-0 items-center gap-1.5 pb-3 text-[13px] font-medium ${
                isActive ? "text-brand" : "text-[#8B8B96] hover:text-[#181826]"
              }`}
            >
              <Icon className="h-4 w-4" strokeWidth={1.8} />
              {label}
              {count !== undefined && (
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    isActive ? "bg-[#ECEEFD] text-brand" : "bg-black/5 text-[#8B8B96]"
                  }`}
                >
                  {count}
                </span>
              )}
              {isActive && <span className="absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-brand" />}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {active === "notes" ? (
          <NotesList />
        ) : (
          <div className="rounded-xl border border-dashed border-black/10 bg-white px-6 py-14 text-center text-[13px] text-[#8B8B96]">
            Nothing here yet.
          </div>
        )}
      </div>
    </div>
  );
}
