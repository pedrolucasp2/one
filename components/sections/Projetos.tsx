import { ProjectCard } from "@/components/ui/ProjectCards";
export function Projetos() {
  return(
    // CAMADA 1: O Fundo Base
    // Aqui fica a sua cor azul original ou o seu gradiente. 
    // Colocamos o 'relative' e 'overflow-hidden' para segurar as camadas de dentro.
    <div className="relative w-full min-h-screen overflow-hidden">
      
      {/* CAMADA 2: A Imagem de Fundo Isolada */}
      {/* absolute inset-0: Estica para cobrir a tela toda */}
      {/* opacity-20: A MÁGICA AQUI! Deixa a imagem com 20% de visibilidade. A cor do fundo (Camada 1) vai aparecer através dela! */}
      <div className="absolute inset-0 bg-no-repeat bg-cover bg-center bg-[url('/bg2.png')] opacity-5 mix-blend-screen"></div>

      {/* CAMADA 3: O Seu Conteúdo */}
      {/* relative z-10: Garante que os textos e cards fiquem acima da imagem */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen p-10 pt-24">
        <h1 className="text-white text-5xl font-bold mb-8">Meus Projetos</h1>
        
        <div className="flex flex-row gap-2">
<ProjectCard name="Projeto teste" imgSrc="/iconsStacks/jsIcon.png" repositorio="https://github.com/"/>
        
        </div>
        
      </div>
      
    </div>
  )
}