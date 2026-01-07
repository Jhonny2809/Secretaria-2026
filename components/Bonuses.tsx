
import React from 'react';

const Bonuses: React.FC = () => {
  const bonusList = [
    {
      title: "Bônus: Certificados de todas as classes 2026",
      description: "Modelos exclusivos para todas as classes regulares e avançadas.",
      color: "bg-blue-600",
      accent: "border-yellow-400",
      icon: (
        <div className="w-full h-32 bg-blue-700 rounded border-2 border-yellow-400 p-2 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[10px] text-white font-black uppercase mb-1">Certificado de Classe</div>
          <div className="w-full h-0.5 bg-yellow-400 mb-2"></div>
          <div className="text-yellow-300 font-black text-2xl italic">2026</div>
          <div className="absolute -bottom-2 -right-2 opacity-10">
             <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path></svg>
          </div>
        </div>
      )
    },
    {
      title: "Bônus: Certificado de especialidades 2026",
      description: "Designer moderno e impactante para as novas especialidades do ano.",
      color: "bg-[#D32F2F]",
      accent: "border-white",
      icon: (
        <div className="w-full h-32 bg-[#C62828] rounded border-2 border-white p-2 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[8px] text-white font-bold uppercase mb-1">Ministério dos Desbravadores</div>
          <div className="text-white font-black text-center text-[10px] leading-none mb-2">CERTIFICADO DE<br/>ESPECIALIDADE</div>
          <div className="bg-white rounded px-3 py-1 text-[#C62828] font-black text-lg">2026</div>
        </div>
      )
    },
    {
      title: "Bônus: Certificados de mestrados 2026",
      description: "Diplomas elegantes e profissionais para reconhecimento de liderança.",
      color: "bg-[#F5F5DC]",
      accent: "border-[#8B4513]",
      icon: (
        <div className="w-full h-32 bg-[#FFFDE7] rounded border-2 border-[#8B4513] p-2 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[#5D4037] font-serif italic text-xs">Certificado de</div>
          <div className="text-[#3E2723] font-black text-xl tracking-widest uppercase">MESTRADOS</div>
          <div className="w-10 h-0.5 bg-[#8B4513] my-1"></div>
          <div className="w-6 h-6 bg-yellow-600 rounded-full border border-yellow-800 flex items-center justify-center">
             <div className="w-4 h-4 border border-dotted border-white rounded-full"></div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="bg-[#D32F2F] text-white font-black px-4 py-1 rounded-full text-sm uppercase tracking-widest mb-4 inline-block shadow-md">
            EXCLUSIVO
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase leading-tight">
            3 BÔNUS INCRÍVEIS <br className="hidden md:block" />
            <span className="text-[#00703C]">QUE VOCÊ VAI RECEBER HOJE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bonusList.map((bonus, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                {bonus.icon}
              </div>
              <div className="p-6 pt-0 text-center flex-grow">
                <h4 className="text-gray-900 font-black text-lg mb-3 leading-tight uppercase">
                  {bonus.title}
                </h4>
                <p className="text-gray-500 text-sm font-medium">
                  {bonus.description}
                </p>
              </div>
              <div className="bg-[#FFCC00] py-3 text-center">
                <span className="text-black font-black text-xs uppercase tracking-tighter">
                   VALOR ESTIMADO: <span className="line-through opacity-60">R$ 49,90</span> - <span className="text-[#D32F2F]">HOJE: GRÁTIS</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
