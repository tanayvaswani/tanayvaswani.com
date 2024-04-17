import Logo from "@/components/logos/logo";
import LogoImage from "../logos/logo-image";
import SidebarRoutes from "./sidebar-routes";
import Socials from "../socials";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col justify-between overflow-y-auto shadow-sm border-r-[0.1px] bg-[#1F1F1F]/30 backdrop-blur-md px-2 py-6">
      <div className="px-6 py-3 w-full flex items-center justify-center">
        <Logo />
      </div>

      <div className="flex flex-col items-center justify-center md:-mt-12 gap-3 w-full">
        <LogoImage />

        <div className="text-zinc-200 text-center px-3">
          Probably writing Typescript at work & GoLang at home.
        </div>

        <SidebarRoutes />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-4">
        <Socials />
        <div className="text-xs text-zinc-600 text-center">
          © 2024 Tanay Vaswani. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
