import Image from "next/image";
export function ProfilePicture() {
  return (
    <div className="flex justify-center ">
      <Image
        className=" border-4 border-[#04B3D8] shadow-[0_0_50px_rgba(4,179,216,0.5)] rounded-full aspect-square object-cover"
        src="/profile.png"
        width={380}
        height={380}
        alt="logo"
      />
    </div>
  );
}

