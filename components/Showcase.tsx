
import React from 'react';

const Showcase: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Title Bar */}
      <div className="bg-[#00703C] py-3 text-center shadow-md">
        <h3 className="text-white font-black text-sm md:text-lg tracking-wider uppercase">
          CONHEÇA ALGUNS DOS MODELOS 100% EDITÁVEIS NO CANVA
        </h3>
      </div>

      {/* Grid Content */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Left: Certificado de Amigo */}
          <div className="bg-blue-600 rounded-lg shadow-xl p-4 flex flex-col aspect-[4/3] border-4 border-yellow-400 transform hover:-rotate-1 transition-transform">
             <div className="flex justify-between items-start mb-4">
                <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-inner"></div>
                <h4 className="text-white font-black text-center text-lg leading-tight flex-grow px-2 drop-shadow-md">CERTIFICADO DE CLASSE</h4>
                <div className="w-8 h-8 bg-yellow-400 rounded-full shadow-inner"></div>
             </div>
             <div className="mt-auto bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
                <p className="text-white text-[10px] uppercase tracking-widest text-center opacity-70 mb-1">Certificamos que</p>
                <div className="h-0.5 bg-white/30 mb-2"></div>
                <h5 className="text-yellow-300 font-black text-3xl text-center italic tracking-tight drop-shadow-md">AMIGO</h5>
             </div>
          </div>

          {/* Center: Cartão Conselheiro Excelente */}
          <div className="bg-[#FF5722] rounded-lg shadow-xl p-4 flex flex-col aspect-[4/3] border-4 border-[#D32F2F] overflow-hidden relative transform hover:scale-105 z-10 transition-transform">
             <div className="absolute top-0 right-0 p-2 bg-red-600 text-white text-[10px] font-bold rounded-bl-lg shadow-md">2026</div>
             <div className="flex-grow flex flex-col justify-center items-center">
                <div className="w-20 h-20 border-4 border-white rotate-45 flex items-center justify-center mb-4 shadow-lg">
                   <div className="-rotate-45 text-white font-black text-2xl">CE</div>
                </div>
                <h4 className="text-white font-black text-xl text-center leading-tight uppercase drop-shadow-lg">Cartão Conselheiro Excelente</h4>
             </div>
             <div className="h-3 bg-red-800 w-full mt-4 rounded-full"></div>
          </div>

          {/* Right: Certificado Companheiro */}
          <div className="bg-[#D32F2F] rounded-lg shadow-xl p-4 flex flex-col aspect-[4/3] border-4 border-white transform hover:rotate-1 transition-transform">
             <div className="text-white text-center mb-4">
                <p className="text-[10px] font-bold tracking-widest opacity-80">MINISTÉRIO DOS DESBRAVADORES</p>
                <h4 className="text-lg font-black leading-tight uppercase drop-shadow-md">CERTIFICADO DE CONCLUSÃO DE CLASSE</h4>
             </div>
             <div className="mt-auto bg-white rounded-md p-5 flex flex-col items-center shadow-inner">
                <h5 className="text-red-700 font-black text-2xl uppercase tracking-tighter">COMPANHEIRO</h5>
                <p className="text-[8px] text-gray-400 mt-2 font-bold uppercase tracking-widest">Investidura Oficial 2026</p>
             </div>
          </div>
        </div>

        {/* Large Diploma Below */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#F5F5DC] rounded-lg shadow-2xl p-10 flex flex-col border-[12px] border-[#8B4513] relative overflow-hidden">
             <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <svg className="w-[80%] h-[80%]" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
             </div>
             <div className="text-center z-10">
                <h4 className="text-[#5D4037] font-serif italic text-3xl md:text-4xl mb-4" style={{ fontFamily: 'serif' }}>Certificado de</h4>
                <h5 className="text-[#3E2723] font-black text-5xl md:text-7xl tracking-[0.2em] uppercase mb-8 drop-shadow-md">MESTRADOS</h5>
                <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-[#8B4513] to-transparent mx-auto mb-8"></div>
                <p className="text-[#5D4037] text-sm md:text-base max-w-lg mx-auto leading-relaxed font-bold italic">
                  Pela excelência nos requisitos cumpridos durante o ano eclesiástico de 2026.
                </p>
             </div>
             <div className="mt-12 flex justify-between items-end px-4 md:px-10 z-10">
                <div className="flex flex-col items-center">
                  <div className="w-32 md:w-48 h-0.5 bg-[#8B4513]"></div>
                  <span className="text-[10px] text-[#8B4513] mt-2 font-bold uppercase">Secretaria do Clube</span>
                </div>
                <div className="w-20 h-20 md:w-28 md:h-28 bg-yellow-600 rounded-full border-4 border-yellow-700 shadow-2xl flex items-center justify-center -mb-4 md:-mb-8 ring-8 ring-[#F5F5DC]">
                   <div className="w-16 h-16 md:w-24 md:h-24 border-2 border-dotted border-white/50 rounded-full flex items-center justify-center">
                      <span className="text-white font-black text-xl md:text-3xl opacity-80">2026</span>
                   </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-32 md:w-48 h-0.5 bg-[#8B4513]"></div>
                  <span className="text-[10px] text-[#8B4513] mt-2 font-bold uppercase">Diretoria do Clube</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
