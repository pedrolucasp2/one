export default function Home() {
  return (
   <div className="bg-dark p-10 min-h-screen">
  
  <div className="bg-gray rounded-lg p-6 max-w-sm mx-auto shadow-lg">
    
    <h2 className="text-light text-2xl font-bold mb-2">Meu Projeto</h2>
    
    <p className="text-light/80 mb-4">
      Esta é uma descrição usando a cor clara com 80% de opacidade.
    </p>

    <button className="bg-primary text-light px-4 py-2 rounded hover:opacity-90">
      Saiba mais
    </button>
    
  </div>
</div>
  );
}
