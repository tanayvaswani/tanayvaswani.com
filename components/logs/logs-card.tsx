import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export type TLogsCard = {
  title: string;
  description: string;
  content: string;
  date: string;
};

const LogsCard = ({ title, content, date }: TLogsCard) => {
  return (
    <div className="bg-transparent border-none flex flex-col gap-3">
      <div className="flex flex-col md:flex-row items-start justify-between w-full">
        <h1 className="text-2xl md:text-3xl font-semibold text-zinc-300">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-zinc-500">{date}</p>
      </div>

      <p className="text-zinc-400 md:max-w-screen-lg text-lg md:text-xl">
        {content}
      </p>

      {/* <div>
        <Link
          href={href}
          className="flex items-center justify-start gap-2 text-blue-400 hover:text-zinc-200 transition-all group"
        >
          See more{" "}
          <FaArrowRightLong className="mt-1 group-hover:ml-1 transition-all group-hover:text-zinc-200" />
        </Link>
      </div> */}
    </div>
  );
};

export default LogsCard;
