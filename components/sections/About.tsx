import { ProfilePicture } from "../ui/ProfilePicture";
export function About() {
  return (
    <div className="flex flex-row p-2.5">
      <div className="flex flex-col w-1/2">
        <h1>Olá, eu sou o</h1>
        <h2>PEDRO PEREIRA</h2>
        <p>
          Desenvolvedor Front-end especializado em criar experiências digitais
          rápidas, escaláveis e com foco em performance. Tenho sólida
          experiência em projetos, utilizando tecnologias modernas como
          React.js, Next.js, TypeScript, Styled Components, Material UI e
          Tailwind CSS. Sou apaixonado pelo desenvolvimento de componentes
          reutilizáveis, Design Systems, animações fluidas e por evoluir
          continuamente a performance e a acessibilidade das aplicações.
        </p>
        <div>
          <h2>Tech Stack</h2>
        </div>
      </div>
      <div className="w-1/2"> <ProfilePicture /></div>
    </div>
  );
}
