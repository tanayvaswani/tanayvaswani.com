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
    title: "100/100",
    path: "/checklist",
  },
  {
    title: "Library",
    path: "/library",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full border-b border-t-[6px] border-t-neutral-700 bg-white/30 backdrop-blur-md h-16">
      <div className="md:max-w-screen-md md:mx-auto py-3 px-4 md:px-0 flex items-center justify-between">
        {/* <Logo /> */}

        <div className="">
          {navigationRoutes.map((route, index) => (
            <Button key={index} variant={"navigation"} asChild>
              <Link href={route.path}>{route.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
