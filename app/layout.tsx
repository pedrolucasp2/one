import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./style.css";
import { NavBar } from "@/components/layout/NavBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pedro Pereira",
  description: "Criando portfólio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`
          ${inter.className} 
          min-h-screen 
          text-white
          bg-[linear-gradient(-45deg,#1B263B_1%,#1E2A40_21%,#212E48_42%,#2B3D5F_64%,#384E7A_77%,#3F598A_92%,#4A68A1_100%)]
        `}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
