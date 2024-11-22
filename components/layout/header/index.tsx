import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import SearchInput from "@/components/layout/header/SearchInput";
import ThemeToggle from "@/components/layout/header/ThemeToggle";
import UserProfile from "@/components/layout/header/UserProfile";

const Header = () => {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
      </div>

      <div className="flex items-center gap-2 px-4">
        <div className="hidden md:flex">
          <SearchInput />
        </div>
        <UserProfile />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
