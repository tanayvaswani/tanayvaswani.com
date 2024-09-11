import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start w-full gap-6">
      <div className="flex items-start justify-between gap-6 w-full">
        <p className="">
          I’m Tanay Vaswani, an undergrad with a passion for Software
          Engineering, Machine Learning Systems & Infrastructure at scale.
          <br />
          <br />
          I’m currently at{" "}
          <Link href={"https://turboml.com"} target="_blank">
            TurboML, Inc.
          </Link>{" "}
          working on a Machine Learning Platform Reinvinted for Real-Time.
          Previously, I occasionally contribute in commercial & free Open-Source
          projects.
          <br />
          <br />
          I’ve also served as DevOps Mentor at Google Developer Groups (MAIT,
          New Delhi) where I taught everything deploying and scaling.
        </p>

        <Image
          src="/tanay.jpeg"
          alt="tanay.jpeg"
          width={280}
          height={280}
          className="rounded-md border-4 shadow-sm"
        />
      </div>

      <div></div>
    </div>
  );
};

export default HeroSection;
