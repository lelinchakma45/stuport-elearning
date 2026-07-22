"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Maximize,
  Pause,
  PictureInPicture2,
  Play,
  Redo2,
  Settings,
  Undo2,
  Volume2,
} from "lucide-react";

const POSTER_URL =
  "https://images.unsplash.com/photo-1758691461957-474a7686e388?fm=jpg&q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.1.0";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl bg-[#1F114E]">
      <Image
        src={POSTER_URL}
        alt="Tutor discussing verbal reasoning with a student"
        fill
        priority
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />

      <button
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={() => setIsPlaying((v) => !v)}
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
          {isPlaying ? (
            <Pause className="h-7 w-7" strokeWidth={1.8} fill="currentColor" />
          ) : (
            <Play className="h-7 w-7 translate-x-0.5" strokeWidth={1.8} fill="currentColor" />
          )}
        </span>
      </button>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8">
        <div className="flex items-center gap-2 text-[11px] font-medium text-white/90">
          <span>05:42</span>
          <div className="relative h-1 flex-1 rounded-full bg-white/25">
            <div className="absolute inset-y-0 left-0 w-[32%] rounded-full bg-white" />
            <span className="absolute -top-1 left-[32%] h-3 w-3 -translate-x-1/2 rounded-full bg-white" />
          </div>
          <span>01:13:00</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/90">
            <button aria-label="Play" onClick={() => setIsPlaying((v) => !v)}>
              {isPlaying ? (
                <Pause className="h-4 w-4" strokeWidth={1.8} />
              ) : (
                <Play className="h-4 w-4" strokeWidth={1.8} />
              )}
            </button>
            <button aria-label="Rewind 10 seconds">
              <Undo2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button aria-label="Forward 10 seconds">
              <Redo2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button aria-label="Volume">
              <Volume2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
          <div className="flex items-center gap-3 text-white/90">
            <button aria-label="Settings">
              <Settings className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button aria-label="Picture in picture">
              <PictureInPicture2 className="h-4 w-4" strokeWidth={1.8} />
            </button>
            <button aria-label="Fullscreen">
              <Maximize className="h-4 w-4" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
