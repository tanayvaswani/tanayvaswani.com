"use client";

import { Ellipsis } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    <div>
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

      <div className="md:hidden flex flex-col items-center justify-center gap-1">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="h-6 w-6 text-neutral-700" />
          </DropdownMenuTrigger>

          <DropdownMenuContent className="mx-4 w-[60vw]">
            <DropdownMenuLabel>Navigate</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {navigationRoutes.map((route, index) => (
              <DropdownMenuItem
                key={index}
                className={cn(
                  currentRoute == route.path.split("/")[1] &&
                    "bg-neutral-100 text-blue-600"
                )}
                asChild
              >
                <Link
                  href={route.path}
                  target={route.isExternal ? "_blank" : ""}
                >
                  {route.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="md:hidden flex flex-col items-center justify-center gap-1"></div>
    </div>
  );
};

export default NavigationMenu;
