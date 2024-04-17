"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

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
        "flex items-center text-zinc-400 font-[500] transition-all hover:text-zinc-300",
        isActive && "text-blue-600 hover:text-blue-600"
      )}
    >
      <div className="flex items-center py-1 w-full justify-center">
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
