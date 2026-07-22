"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Calendar, MessageCircle, Trophy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { NotificationIcon } from "@/lib/notifications";
import { notifications as initialNotifications } from "@/lib/notifications";

const iconMap: Record<NotificationIcon, LucideIcon> = {
  bell: Bell,
  trophy: Trophy,
  message: MessageCircle,
  calendar: Calendar,
};

export default function NotificationsDropdown() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);
  const ref = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function markAllRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  return (
    <div className="relative" ref={ref}>
      <button
        aria-label="Notifications"
        onClick={() => setOpen((v) => !v)}
        className="relative text-[#4B4B57] hover:text-[#181826]"
      >
        <Bell className="h-5 w-5" strokeWidth={1.8} />
        {unreadCount > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[8px] font-bold text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-[calc(100%+10px)] z-20 w-80 overflow-hidden rounded-xl border border-black/10 bg-white shadow-lg">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
            <span className="text-[13px] font-bold text-[#181826]">Notifications</span>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-[11.5px] font-medium text-brand hover:underline"
              >
                Mark all read
              </button>
            )}
          </div>

          <div className="max-h-80 overflow-y-auto">
            {notifications.map((n) => {
              const Icon = iconMap[n.icon];
              return (
                <div
                  key={n.id}
                  className={`flex gap-3 border-b border-black/5 px-4 py-3 last:border-b-0 ${
                    !n.read ? "bg-[#F8F8FF]" : ""
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ECEEFD] text-brand">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[12.5px] font-semibold text-[#181826]">{n.title}</p>
                    <p className="mt-0.5 text-[11.5px] leading-snug text-[#8B8B96]">
                      {n.description}
                    </p>
                    <p className="mt-1 text-[10.5px] text-[#B5B5BD]">{n.time}</p>
                  </div>
                  {!n.read && <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand" />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
