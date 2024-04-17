import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center transition hover:opacity-90">
        <p
          className={cn(
            "text-xl antialiased md:text-2xl text-transparent bg-clip-text bg-gradient-to-t from-zinc-100 to-blue-200",
            headingFont.className
          )}
        >
          T A N A Y
        </p>
      </div>
    </Link>
  );
};

export default Logo;
