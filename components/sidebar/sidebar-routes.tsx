"use client";

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
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Contact",
    href: "/contact",
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
