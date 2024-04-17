import Logo from "@/components/logo";

import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto shadow-sm border-r-[0.1px] bg-[#1F1F1F]/30 backdrop-blur-md px-2 py-16">
      <div className="px-6 py-3 w-full flex items-center justify-center">
        <Logo />
      </div>

      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
