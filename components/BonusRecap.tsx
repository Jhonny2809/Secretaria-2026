
import React from 'react';

const BonusRecap: React.FC = () => {
  const bonuses = [
    "Certificados de Todas as Classes 2026",
    "Certificado de Especialidades 2026",
    "Certificados de Mestrados 2026"
  ];

  return (
    <section className="bg-white py-10 md:py-12 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#00703C]/5 border-2 border-dashed border-[#00703C]/30 rounded-2xl md:rounded-3xl p-6 md:p-12 text-center">
          <h3 className="text-xl md:text-3xl font-black text-gray-900 mb-4 md:mb-6 uppercase italic leading-tight">
            VOCÊ NÃO VAI RECEBER APENAS O KIT...
          </h3>
          <p className="text-sm md:text-lg text-gray-600 font-medium mb-6 md:mb-8">
            Ao garantir seu acesso hoje, você desbloqueia automaticamente estes 3 presentes exclusivos:
          </p>
          
          <div className="space-y-3 md:space-y-4 max-w-md mx-auto">
            {bonuses.map((bonus, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 text-left transform hover:translate-x-1 md:hover:translate-x-2 transition-transform">
                <div className="bg-green-100 text-[#00703C] p-1.5 md:p-2 rounded-full shrink-0">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-bold text-gray-800 uppercase text-[10px] md:text-sm leading-tight">{bonus}</span>
                <span className="ml-auto text-[#D32F2F] font-black text-[9px] md:text-[10px] tracking-tighter">GRÁTIS</span>
              </div>
            ))}
          </div>

          <div className="mt-8 md:mt-10 animate-bounce">
            <svg className="w-6 h-6 md:w-8 md:h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusRecap;
