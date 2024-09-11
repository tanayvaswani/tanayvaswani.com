"use client";

import Link from "next/link";

import { Button } from "../ui/button";

const navigationRoutes = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "*/100",
    path: "/checklist",
  },
  {
    title: "Library",
    path: "/library",
  },
  {
    title: "GitHub",
    path: "https://github.com/tanayvaswani",
    isExternal: true,
  },
];

const NavigationMenu = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {navigationRoutes.map((route, index) => (
        <Button key={index} variant={"navigation"} asChild>
          <Link href={route.path} target={route.isExternal ? "_blank" : ""}>
            {route.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default NavigationMenu;
