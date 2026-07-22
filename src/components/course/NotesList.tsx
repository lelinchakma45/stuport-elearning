"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp, Clock, Pencil, Trash2 } from "lucide-react";
import { notes } from "@/lib/tutorial";

export default function NotesList() {
  const [openId, setOpenId] = useState<string | null>(
    () => notes.find((n) => n.body)?.id ?? null
  );

  return (
    <div className="overflow-hidden rounded-xl border border-black/5 bg-white">
      {notes.map((note, i) => {
        const isOpen = openId === note.id;
        return (
          <div key={note.id} className={i !== notes.length - 1 ? "border-b border-black/5" : ""}>
            <button
              onClick={() => setOpenId(isOpen ? null : note.id)}
              className="flex w-full flex-wrap items-center justify-between gap-2 px-4 py-3.5 text-left"
            >
              <span className="flex items-center gap-2 text-[13.5px] font-semibold text-[#181826]">
                {isOpen ? (
                  <ChevronUp className="h-4 w-4 text-[#8B8B96]" strokeWidth={1.8} />
                ) : (
                  <ChevronDown className="h-4 w-4 text-[#8B8B96]" strokeWidth={1.8} />
                )}
                {note.title}
              </span>
              <span className="flex items-center gap-3 text-[12px] text-[#8B8B96]">
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {note.time}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {note.date}
                </span>
                <span className="flex items-center gap-2 border-l border-black/10 pl-3">
                  <Pencil className="h-3.5 w-3.5 hover:text-brand" strokeWidth={1.8} />
                  <Trash2 className="h-3.5 w-3.5 text-[#D2454F] hover:opacity-70" strokeWidth={1.8} />
                </span>
              </span>
            </button>
            {isOpen && note.body && (
              <div className="flex flex-col gap-3 px-4 pb-4 text-[13px] leading-relaxed text-[#5B5B68]">
                {note.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
