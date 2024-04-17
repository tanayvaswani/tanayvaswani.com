import Image from "next/image";

const LogoImage = () => {
  return (
    <div>
      <Image
        src={"/tanay.jpg"}
        alt={"tanay"}
        className="rounded-full"
        width={200}
        height={200}
      />
    </div>
  );
};

export default LogoImage;
