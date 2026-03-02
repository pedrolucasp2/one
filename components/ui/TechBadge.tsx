import Image from "next/image";
interface TechBadgeProps {
  name: string;
  iconSrc: string;
}

export function TechBadge({ name, iconSrc }: TechBadgeProps) {
  return (
    <div className="flex items-center gap-3 bg-[#111827]/60 pr-4 py-1.5 pl-1.5 rounded-lg border border-white/10 hover:bg-[#111827]/80 transition-colors cursor-default">
      <div className="flex items-center justify-center w-8 h-8 rounded-md overflow-hidden bg-white/5">
        <Image
          width={380}
          height={380}
          src={iconSrc}
          alt={`Logo do ${name}`}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-sm font-medium text-white/90 tracking-wide">
        {name}
      </span>
    </div>
  );
}
