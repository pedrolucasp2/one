import Image from "next/image";
interface ProjectCardsProps {
  name: string;
  imgSrc: string;
 // stacksIconsSrc: string;
  repositorio: string;
}
export function ProjectCard({
  name,
  imgSrc,
 // stacksIconsSrc,
  repositorio,
}: ProjectCardsProps) {
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
      <Image
        width={100}
        height={180}
        src={imgSrc}
        alt={`Imagem do projeto`}
        className="w-full h-full object-contain"
      />
      <div>
      <span className="text-sm font-medium text-white/90 tracking-wide">
        {name}
      </span>
      <a href={repositorio}>  <Image
        width={180}
        height={180}
        src="/githubIcon.png"
        alt={`Imagem do projeto`}
        className="w-full h-full object-contain"
      /></a>
      </div>
      
    </div>
  );
}
