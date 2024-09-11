import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-start w-full gap-6">
      <div className="flex items-start justify-between gap-6 w-full">
        <p>
          I’m Tanay Vaswani, an undergrad having interest in Software
          Engineering, building Machine Learning Systems & Infrastructure at
          scale.
          <br />
          <br />
          I’m currently at{" "}
          <Link href={"https://turboml.com"} target="_blank">
            TurboML, Inc.
          </Link>{" "}
          working on a Machine Learning Platform Reinvinted for Real-Time.
          Previously, I used to contribute in commercial & free Open-Source
          projects.
          <br />
          <br />
          I’ve also served as DevOps Mentor at Google Developer Groups (MAIT,
          New Delhi), where I taught SDLC, Linux, Version Control, Containers,
          Cloud.
        </p>

        <Image
          src="/tanay.jpeg"
          alt="tanay.jpeg"
          width={240}
          height={240}
          className="rounded-md border-4 shadow-sm"
        />
      </div>

      <div></div>
    </div>
  );
};

export default HeroSection;
