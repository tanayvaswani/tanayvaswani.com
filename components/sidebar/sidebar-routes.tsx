"use client";

import { Home } from "lucide-react";

import SidebarItem from "./sidebar-item";

const routes = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Experience",
    href: "/experience",
  },
];

const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full gap-y-2 mt-4 mb-8">
      {routes.map((route, index) => (
        <SidebarItem key={index} label={route.label} href={route.href} />
      ))}
    </div>
  );
};

export default SidebarRoutes;
