import { About } from "@/components/sections/About";
import { Projetos } from "@/components/sections/Projetos";
import { Contato } from "@/components/sections/Contato";
export default function Home() {
  return (
    <main className="mt-2.5">
      <section
        id="home"
        className="scroll-mt-28 flex items-center justify-center w-full min-h-screen]"
      >
        <About />
      </section>
      <section
        id="projetos"
        className="  "
      >
        <Projetos />
      </section>
      <section
        id="contato"
        className="scroll-mt-28 flex items-center justify-center min-h-screen"
      >
        <Contato />
      </section>
    </main>
  );
}
