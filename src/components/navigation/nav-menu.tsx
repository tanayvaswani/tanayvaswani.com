"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
  const pathname = usePathname();
  const currentRoute = pathname.split("/")[1];

  return (
    <div className="hidden md:flex items-center justify-center gap-1">
      {navigationRoutes.map((route, index) => (
        <Button
          key={index}
          variant={"navigation"}
          className={cn(
            currentRoute == route.path.split("/")[1] &&
              "bg-neutral-100 text-blue-600"
          )}
          asChild
        >
          <Link href={route.path} target={route.isExternal ? "_blank" : ""}>
            {route.title}
          </Link>
        </Button>
      ))}
    </div>
  );
};

export default NavigationMenu;
