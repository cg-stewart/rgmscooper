import type React from "react";
import DashboardSidebar from "@/components/dashboard/sidebar";
import MobileNav from "@/components/dashboard/mobile-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col w-full">
          <main className="flex-1 w-full max-w-7xl pb-20 md:pb-6 m-4">
            {children}
          </main>
          <MobileNav />
        </div>
      </div>
    </SidebarProvider>
  );
}
