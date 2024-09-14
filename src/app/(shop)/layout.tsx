import SideBar from "@/components/ui/sidebar/Sidebar";
import TopMenu from "@/components/ui/top-menu/TopMenu";
import React from "react";

export default function ShopLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <SideBar />
      <div className="px-1 sm:px-10">
        {children}
      </div>
    </main>
  )
}