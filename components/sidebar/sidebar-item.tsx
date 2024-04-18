"use client";

import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";
import { ArrowBigRight } from "lucide-react";

const pop = Roboto({
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

type SidebarItemProps = {
  label: string;
  href: string;
};

const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center text-zinc-400 font-[500] transition-all hover:text-zinc-200",
        isActive &&
          "text-blue-600 hover:text-blue-600 bg-blue-600/20 rounded-lg"
      )}
    >
      <div
        className={cn(
          "flex items-center py-1 w-full justify-center tracking-wide text-lg",
          pop.className
        )}
      >
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
