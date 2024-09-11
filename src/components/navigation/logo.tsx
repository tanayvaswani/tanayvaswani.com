import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="text-2xl font-semibold hover:opacity-80 transition-opacity duration-100"
    >
      Tanay Vaswani
    </Link>
  );
};

export default Logo;
