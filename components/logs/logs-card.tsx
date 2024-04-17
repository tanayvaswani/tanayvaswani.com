import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export type LogsCardProps = {
  title: string;
  description: string;
  contentS: string;
  contentL: string;
  date: string;
  href: string;
};

const LogsCard = ({
  title,
  description,
  contentS,
  contentL,
  date,
  href,
}: LogsCardProps) => {
  return (
    <Card className="w-full bg-transparent border-none">
      <CardHeader className="flex justify-between w-full">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>

        <div>{date}</div>
      </CardHeader>

      <CardContent>{contentS}</CardContent>

      <CardFooter>
        <Link
          href={href}
          className="flex items-center justify-start gap-2 text-blue-400 hover:text-zinc-200 transition-all group"
        >
          See more{" "}
          <FaArrowRightLong className="mt-1 group-hover:ml-1 transition-all" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LogsCard;
