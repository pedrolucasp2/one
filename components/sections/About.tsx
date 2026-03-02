import { ProfilePicture } from "../ui/ProfilePicture";
import { TechBadge } from "@/components/ui/TechBadge";
export function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
<div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('/bg2.png')] opacity-6 mix-blend-screen"></div>

    <div className="mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full h-full">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-light text-white flex items-center gap-3">
          Olá, eu sou o{" "}
          <span className="text-white font-mono font-medium">{"</>"}</span>
        </h1>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#04B3D8] mt-2 tracking-tight">
          PEDRO PEREIRA
        </h2>

        <p className="mt-6 text-lg text-[#7c92b3] leading-relaxed max-w-xl text-justify md:text-left">
          Desenvolvedor Front-end especializado em criar experiências digitais
          rápidas, escaláveis e com foco em performance. 
        </p>

        <div className="mt-12">
          <h3 className="text-2xl text-[#04B3D8] font-medium mb-4">
            Tech Stack
          </h3>

          <div className="flex flex-wrap gap-4 text-sm text-white">
           <TechBadge name="JavaScript" iconSrc="/iconsStacks/jsIcon.png" />
            <TechBadge name="HTML5" iconSrc="/iconsStacks/htmlIcon.png" />
            <TechBadge name="CSS3" iconSrc="/iconsStacks/cssIcon.png" />
            <TechBadge name="TypeScript" iconSrc="/iconsStacks/tsIcon.png" />
            <TechBadge name="React" iconSrc="/iconsStacks/reactIcon.png" />
            <TechBadge name="Tailwind CSS" iconSrc="/iconsStacks/twIcon.png" />
            <TechBadge name="Next.js" iconSrc="/iconsStacks/nextIcon.png" />
          
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center ">
        <ProfilePicture />
      </div>
    </div>
    </div>
  );
}
