import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { FaArrowLeftLong } from "react-icons/fa6";

type LogsCardProps = {
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
    <Link href={href}>
      <Card>
        <CardHeader>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>

          <div>
            <CardTitle>{date}</CardTitle>
          </div>
        </CardHeader>

        <CardContent>{contentS}</CardContent>

        <CardFooter>
          <Link href={href}>
            See more <FaArrowLeftLong />
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default LogsCard;
