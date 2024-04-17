import Image from "next/image";

const LogoImage = () => {
  return (
    <div>
      <Image
        src={"/tanayvaswani.jpg"}
        alt={"tanay"}
        className="rounded-full border-neutral-600 border-2"
        width={200}
        height={200}
      />
    </div>
  );
};

export default LogoImage;
