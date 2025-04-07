"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Music, Settings, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 md:hidden dark:bg-gray-900 dark:border-gray-700">
      <div className="grid h-full grid-cols-4 mx-auto">
        <Link
          href="/dashboard"
          className={cn(
            "inline-flex flex-col items-center justify-center px-5",
            pathname === "/dashboard"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-gray-500 dark:text-gray-400",
          )}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/dashboard/my-scoops"
          className={cn(
            "inline-flex flex-col items-center justify-center px-5",
            pathname === "/dashboard/my-scoops"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-gray-500 dark:text-gray-400",
          )}
        >
          <Music className="w-6 h-6" />
          <span className="text-xs mt-1">My Scoops</span>
        </Link>
        <button className="inline-flex flex-col items-center justify-center px-5 text-emerald-600 dark:text-emerald-400">
          <div className="bg-emerald-600 rounded-full p-2 -mt-5 shadow-lg">
            <PlusCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs mt-1">New</span>
        </button>
        <Link
          href="/dashboard/settings"
          className={cn(
            "inline-flex flex-col items-center justify-center px-5",
            pathname === "/dashboard/settings"
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-gray-500 dark:text-gray-400",
          )}
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  );
}
