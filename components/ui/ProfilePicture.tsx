import Image from "next/image";
export function ProfilePicture() {
  return (
    <div className="flex justify-center ">
      <Image
        className=" border-4 border-primary rounded-full aspect-square object-cover"
        src="/profile.png"
        width={380}
        height={380}
        alt="logo"
      />
    </div>
  );
}
